/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['valued-walleye-8237-us1-kafka.upstash.io:9092'],

        sasl: {
          mechanism: 'scram-sha-256',

          username:
            'dmFsdWVkLXdhbGxleWUtODIzNyQ4TnRq24KxY-A29NF-Ay4oENHrF6vg9yrfFC8',

          password: 'f1aaaeba30564cc8b87c910e56c14cce',
        },

        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    // Quando o nest ficar fora do ar por algum motivo, que a conexao com o kafka seja fechada
    await this.close();
  }
}
