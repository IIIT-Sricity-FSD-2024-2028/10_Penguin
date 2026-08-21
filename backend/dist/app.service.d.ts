export declare class AppService {
    getWelcome(): {
        message: string;
        version: string;
        endpoints: {
            events: string;
            attendees: string;
            staff: string;
            'activity-logs': string;
            'api-docs': string;
        };
        docs: string;
        roles: string[];
        'pass-role-header': string;
    };
    getHealth(): {
        status: string;
        timestamp: string;
        uptime: number;
    };
}
//# sourceMappingURL=app.service.d.ts.map