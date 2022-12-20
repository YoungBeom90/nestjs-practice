"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerService = void 0;
const common_1 = require("@nestjs/common");
const kafkajs_1 = require("kafkajs");
let ConsumerService = class ConsumerService {
    constructor() {
        this.kafka = new kafkajs_1.Kafka({
            brokers: ['localhost:9092'],
        });
        this.consumers = [];
    }
    async consume(topic, config) {
        const consumer = this.kafka.consumer({ groupId: 'nestjs-kafka' });
        await consumer.connect();
        await consumer.subscribe(topic);
        await consumer.run(config);
        this.consumers.push(consumer);
    }
    async onApplicationShutdown() {
        for (const consumer of this.consumers) {
            await consumer.disconnect();
        }
    }
};
ConsumerService = __decorate([
    (0, common_1.Injectable)()
], ConsumerService);
exports.ConsumerService = ConsumerService;
//# sourceMappingURL=consumer.service.js.map