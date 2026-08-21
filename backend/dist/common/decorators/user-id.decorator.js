"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserId = void 0;
const common_1 = require("@nestjs/common");
/**
 * Custom decorator to extract user ID from x-user-id request header
 * Usage: @UserId() userId: string
 */
exports.UserId = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.headers['x-user-id'] || null;
});
//# sourceMappingURL=user-id.decorator.js.map