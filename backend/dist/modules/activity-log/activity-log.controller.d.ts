import { ActivityLogService } from './activity-log.service';
import { UserRole } from '../../common/constants';
export declare class ActivityLogController {
    private readonly activityLogService;
    constructor(activityLogService: ActivityLogService);
    findAll(limit?: number, offset?: number): {
        logs: import("../../common/data-store").ActivityLog[];
        total: number;
    };
    findByRole(role: UserRole): import("../../common/data-store").ActivityLog[];
    findByAction(role: UserRole): import("../../common/data-store").ActivityLog[];
    getStatistics(): {
        totalActions: number;
        actionCounts: {
            [key: string]: number;
        };
        roleCounts: {
            [key: string]: number;
        };
    };
    clearLogs(): {
        message: string;
    };
}
//# sourceMappingURL=activity-log.controller.d.ts.map