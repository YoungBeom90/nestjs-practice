import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  // async getHello() {
  //   await this.producerService.produce({
  //     topic: 'test',
  //     messages: [
  //       {
  //         value: 'Hello World',
  //       },
  //     ],
  //   });
  //   return 'Hello World';
  // }
}
