import { OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { ProducerRecord } from 'kafkajs';
export declare class ProducerService implements OnModuleInit, OnApplicationShutdown {
    private readonly kafka;
    private readonly producer;
    onModuleInit(): Promise<void>;
    produce(record: ProducerRecord): Promise<void>;
    onApplicationShutdown(): Promise<void>;
}
