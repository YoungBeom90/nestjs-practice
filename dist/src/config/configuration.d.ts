declare const _default: () => {
    port: string;
    database: {
        retryAttempts?: number;
        retryDelay?: number;
        toRetry?: (err: any) => boolean;
        autoLoadEntities?: boolean;
        keepConnectionAlive?: boolean;
        verboseRetryLog?: boolean;
    } & Partial<import("typeorm/driver/mysql/MysqlConnectionOptions").MysqlConnectionOptions>;
};
export default _default;
