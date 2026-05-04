import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

/**
 * Custom decorator to extract user ID from x-user-id request header
 * Usage: @UserId() userId: string
 */
export const UserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return (request.headers['x-user-id'] as string) || null;
  },
);
