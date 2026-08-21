import { CanActivate, ExecutionContext } from '@nestjs/common';
/**
 * RoleGuard checks the user role from x-role request header
 * and validates access based on role permissions
 */
export declare class RoleGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
//# sourceMappingURL=role.guard.d.ts.map