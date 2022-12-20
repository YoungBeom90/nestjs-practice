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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const net_1 = require("net");
const rxjs_1 = require("rxjs");
const socket_io_1 = require("socket.io");
const logger_1 = require("../logger/logger");
const shared_utils_1 = require("@nestjs/common/utils/shared.utils");
const socket_data_dto_1 = require("./dto/socket-data.dto");
let EventGateway = class EventGateway {
    handleEvent(data) {
        return data;
    }
    handleEventId(id) {
        return id;
    }
    handleEventWithSocket(data, client) {
        if ((0, shared_utils_1.isObject)(data)) {
            const inverter = data.inverter;
            logger_1.log.info('inverter ID: ', inverter.id, 'inverter DeviceKey: ', inverter.deviceKey);
        }
        logger_1.log.info('headers: ', client['handshake'].headers);
        return {
            event: 'event-with-socket',
            data: JSON.stringify(data),
        };
    }
    onEvent(data) {
        logger_1.log.info('Request events');
        const event = 'events';
        const response = [1, 2, 3];
        return (0, rxjs_1.from)(response).pipe((0, rxjs_1.map)((data) => ({ event, data })));
    }
    afterInit(server) {
        if (server) {
            console.log('WebSocket server connect successes!');
            return;
        }
        console.log('WebSocket server connect failed...');
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], EventGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('event'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], EventGateway.prototype, "handleEvent", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('event-id'),
    __param(0, (0, websockets_1.MessageBody)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], EventGateway.prototype, "handleEventId", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('event-with-socket'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_data_dto_1.SocketDataDto,
        net_1.Socket]),
    __metadata("design:returntype", Object)
], EventGateway.prototype, "handleEventWithSocket", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('count-events'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], EventGateway.prototype, "onEvent", null);
EventGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(81, {
        cors: {
            origin: '*',
        },
        transport: ['websocket'],
    })
], EventGateway);
exports.EventGateway = EventGateway;
//# sourceMappingURL=event.gateway.js.map