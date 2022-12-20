import { OnModuleInit } from '@nestjs/common';
import { ConsumerService } from './kafka/consumer.service';
export declare class TestConsumer implements OnModuleInit {
    private readonly consumerService;
    constructor(consumerService: ConsumerService);
    onModuleInit(): Promise<void>;
}
