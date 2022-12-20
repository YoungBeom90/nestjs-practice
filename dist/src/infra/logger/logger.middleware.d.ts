import { MiddlewareConsumer, NestMiddleware, NestModule } from '@nestjs/common';
export declare class LoggerMiddleware implements NestMiddleware {
    private logger;
    use(req: any, res: any, next: (error?: any) => void): any;
}
export declare class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
