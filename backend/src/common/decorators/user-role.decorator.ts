import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { UserRole } from '../constants';

/**
 * Custom decorator to extract user role from request headers
 * Usage: @UserRoleDecorator() role: UserRole
 */
export const UserRoleDecorator = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<any>();
    return request.userRole || request.user?.userRole || request.headers['x-role'];
  },
);
