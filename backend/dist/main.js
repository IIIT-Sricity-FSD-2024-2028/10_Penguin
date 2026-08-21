"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // Enable CORS for frontend integration with specific origins
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'http://localhost:3001',
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
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    // Swagger Setup
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Event Management System API')
        .setDescription('Complete REST API for Event Management & Coordination with RBAC\n\n' +
        '**Required Headers:**\n\n' +
        '- `x-role`: User role (super_admin, client, event_organizer, event_staff, attendee)\n' +
        '- `x-user-id`: User ID (required for endpoints that check ownership)\n\n' +
        '**Demo Users:**\n\n' +
        '- SuperAdmin: superadmin@example.com / Admin@123\n' +
        '- Client: client@example.com / Client@123\n' +
        '- Organizer: organizer@example.com / Organizer@123\n' +
        '- Staff: staff@example.com / Staff@123\n' +
        '- Attendee: attendee@example.com / Attendee@123')
        .setVersion('1.0.0')
        .addApiKey({
        type: 'apiKey',
        in: 'header',
        name: 'x-role',
        description: 'User role header. Values: super_admin, client, event_organizer, event_staff, attendee',
    }, 'x-role-header')
        .addApiKey({
        type: 'apiKey',
        in: 'header',
        name: 'x-user-id',
        description: 'User ID header for ownership checks',
    }, 'x-user-id-header')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    // Save Swagger JSON to docs/swagger.json
    const docsPath = path.join(process.cwd(), 'docs');
    if (!fs.existsSync(docsPath)) {
        fs.mkdirSync(docsPath, { recursive: true });
    }
    fs.writeFileSync(path.join(docsPath, 'swagger.json'), JSON.stringify(document, null, 2));
    swagger_1.SwaggerModule.setup('api', app, document);
    const PORT = process.env.PORT || 3001;
    await app.listen(PORT);
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📚 Swagger API Docs: http://localhost:${PORT}/api`);
    console.log(`📄 Swagger JSON exported to: docs/swagger.json`);
}
bootstrap();
//# sourceMappingURL=main.js.map