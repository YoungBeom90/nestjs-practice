import { OnApplicationShutdown } from '@nestjs/common';
import { ConsumerRunConfig, ConsumerSubscribeTopic } from 'kafkajs';
export declare class ConsumerService implements OnApplicationShutdown {
    private readonly kafka;
    private readonly consumers;
    consume(topic: ConsumerSubscribeTopic, config: ConsumerRunConfig): Promise<void>;
    onApplicationShutdown(): Promise<void>;
}
