import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Request } from 'express';
import { UserRole, normalizeRole } from '../constants';

/**
 * RoleGuard checks the user role from x-role request header
 * and validates access based on role permissions
 */
@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const roleHeader = (request.headers['x-role'] as string) || '';

    // Validate role is provided
    if (!roleHeader) {
      throw new ForbiddenException('x-role header is required');
    }

    // Normalize and validate role
    const normalizedRole = normalizeRole(roleHeader);
    if (!normalizedRole) {
      throw new ForbiddenException(
        `Invalid x-role "${roleHeader}". Valid roles: ${Object.values(UserRole).join(', ')}`,
      );
    }

    // Attach role to request for later use
    (request as any).userRole = normalizedRole;

    return true;
  }
}
