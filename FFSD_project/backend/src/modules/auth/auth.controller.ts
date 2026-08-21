import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Login with email and password',
    description: 'Public endpoint. Returns user info and JWT token. Use token in Authorization header (Bearer token) for subsequent requests.',
  })
  @ApiResponse({
    status: 200,
    description: 'Login successful. Returns JWT token and user data.',
    schema: {
      example: {
        success: true,
        message: 'Login successful',
        data: {
          userId: 'usr-admin-001',
          name: 'Admin User',
          email: 'superadmin@example.com',
          userRole: 'super_admin',
          status: 'active',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        },
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Invalid email or password' })
  @ApiResponse({ status: 400, description: 'Account suspended/inactive or invalid input' })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
