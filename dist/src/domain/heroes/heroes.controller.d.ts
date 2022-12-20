import { ClientKafka } from '@nestjs/microservices';
export declare class HeroesController {
    client: ClientKafka;
    onModuleInit(): Promise<void>;
}
