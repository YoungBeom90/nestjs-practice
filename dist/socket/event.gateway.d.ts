/// <reference types="node" />
import { OnGatewayInit, WsResponse } from '@nestjs/websockets';
import { Socket } from 'net';
import { Observable } from 'rxjs';
import { Server } from 'socket.io';
export declare class EventGateway implements OnGatewayInit {
    server: Server;
    handleEvent(data: string): string;
    handleEventId(id: number): number;
    handleEventWithSocket(data: string, client: Socket): string;
    onEvent(data: unknown): Observable<WsResponse<Number>>;
    afterInit(server: any): any;
}
