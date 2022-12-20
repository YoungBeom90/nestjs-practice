"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesController = void 0;
const microservices_1 = require("@nestjs/microservices");
const common_1 = require("@nestjs/common");
let HeroesController = class HeroesController {
    async onModuleInit() {
        this.client.subscribeToResponseOf('hero.kill.dragon');
        await this.client.connect();
    }
    killDragon(message) {
        const dragonId = message.dragonId;
        const items = [
            { id: 1, name: 'Mythical Sword' },
            { id: 2, name: 'Key to Dungeon' },
        ];
        return items;
    }
};
__decorate([
    (0, microservices_1.Client)({
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                clientId: 'hero',
                brokers: ['localhost:9092'],
            },
            consumer: {
                groupId: 'hero-consumer',
            },
        },
    }),
    __metadata("design:type", microservices_1.ClientKafka)
], HeroesController.prototype, "client", void 0);
__decorate([
    (0, microservices_1.MessagePattern)('hero.kill.dragon'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof KillDragonMessage !== "undefined" && KillDragonMessage) === "function" ? _a : Object]),
    __metadata("design:returntype", Object)
], HeroesController.prototype, "killDragon", null);
HeroesController = __decorate([
    (0, common_1.Controller)()
], HeroesController);
exports.HeroesController = HeroesController;
//# sourceMappingURL=heroes.controller.js.map