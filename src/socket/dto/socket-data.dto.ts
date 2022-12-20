interface Inverter {
  id: number;
  deviceKey: string;
}

export class SocketDataDto {
  inverter: Inverter;
}
