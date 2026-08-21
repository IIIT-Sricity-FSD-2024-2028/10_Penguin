"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleDecorator = void 0;
const common_1 = require("@nestjs/common");
/**
 * Custom decorator to extract user role from request headers
 * Usage: @UserRoleDecorator() role: UserRole
 */
exports.UserRoleDecorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.userRole;
});
//# sourceMappingURL=user-role.decorator.js.map