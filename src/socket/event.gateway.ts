import {
  ConnectedSocket,
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Socket } from 'net';
import { from, map, Observable } from 'rxjs';
import { Server } from 'socket.io';
import { log } from '../logger/logger';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('event')
  handleEvent(@MessageBody() data: string): string {
    return data;
  }

  @SubscribeMessage('event-id')
  handleEventId(@MessageBody('id') id: number): number {
    return id;
  }

  @SubscribeMessage('event-with-socket')
  handleEventWithSocket(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ): string {
    return data;
  }

  @SubscribeMessage('events')
  onEvent(@MessageBody() data: unknown): Observable<WsResponse<Number>> {
    log.info('Request events');
    const event = 'events';
    const response = [1, 2, 3];

    return from(response).pipe(map((data) => ({ event, data })));
  }

  afterInit(server: any): any {
    if (server) {
      console.log('WebSocket server connect successes!');
      return;
    }
    console.log('WebSocket server connect failed...');
  }
}
