import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend integration with specific origins
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
      'http://127.0.0.1:3002',
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'http://localhost:5500',
      'http://127.0.0.1:5500',
      'http://localhost:5501',
      'http://127.0.0.1:5501',
      'http://localhost:8080',
      'http://127.0.0.1:8080',
      'null', // Allow file:// protocol (opens with null origin)
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-role', 'x-user-id'],
  });

  // Global validation pipe with whitelist and transform
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Swagger Setup
  const config = new DocumentBuilder()
    .setTitle('Event Management System API')
    .setDescription(
      'Complete REST API for Event Management & Coordination with RBAC\n\n' +
      '**Required Headers:**\n\n' +
      '- `x-role`: User role (super_admin, client, event_organizer, event_staff, attendee)\n' +
      '- `x-user-id`: User ID (required for endpoints that check ownership)\n\n' +
      '**Demo Users:**\n\n' +
      '- SuperAdmin: superadmin@example.com / Admin@123\n' +
      '- Client: client@example.com / Client@123\n' +
      '- Organizer: organizer@example.com / Organizer@123\n' +
      '- Staff: staff@example.com / Staff@123\n' +
      '- Attendee: attendee@example.com / Attendee@123',
    )
    .setVersion('1.0.0')
    .addApiKey(
      {
        type: 'apiKey',
        in: 'header',
        name: 'x-role',
        description:
          'User role header. Values: super_admin, client, event_organizer, event_staff, attendee',
      },
      'x-role-header',
    )
    .addApiKey(
      {
        type: 'apiKey',
        in: 'header',
        name: 'x-user-id',
        description: 'User ID header for ownership checks',
      },
      'x-user-id-header',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Save Swagger JSON to docs/swagger.json
  const docsPath = path.join(process.cwd(), 'docs');
  if (!fs.existsSync(docsPath)) {
    fs.mkdirSync(docsPath, { recursive: true });
  }
  fs.writeFileSync(
    path.join(docsPath, 'swagger.json'),
    JSON.stringify(document, null, 2),
  );

  SwaggerModule.setup('api', app, document);

  const PORT = process.env.PORT || 3002;
  await app.listen(PORT);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📚 Swagger API Docs: http://localhost:${PORT}/api`);
  console.log(`📄 Swagger JSON exported to: docs/swagger.json`);
}

bootstrap();
