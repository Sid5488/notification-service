/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from 'src/infra/database/database.module';

import { NotificationsController } from './kafka/controllers/notifications.contoller';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  providers: [SendNotification, KafkaConsumerService],
  controllers: [NotificationsController],
})
export class MessagingModule {}
