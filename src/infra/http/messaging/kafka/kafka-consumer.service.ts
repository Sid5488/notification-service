/* eslint-disable prettier/prettier */
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['ace-pipefish-5389-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'YWNlLXBpcGVmaXNoLTUzODkkZGtuPohAnsto3iDM5bTqL7PBHwETCI1o0lxrJOE',
          password: 'CPyfUGQiRjRUfHzw3cL2odMdHFgDN7G6tDtIh6er-mTVHBPA71En9fS2Hd68bEoKPKUsPw==',
        },
        ssl: true
      }
    });
  }
  
  async onModuleDestroy() {
    await this.close();
  }
}
