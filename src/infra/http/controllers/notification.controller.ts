import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetNotification } from 'src/application/use-cases/get-notification';

import { SendNotification } from 'src/application/use-cases/send-notification';

import { CreateNotificationBody } from '../DTOs/create-notification-body';

@Controller('notifications')
export class NotificationController {
  constructor(
    private sendNotification: SendNotification,
    private getNotification: GetNotification,
  ) {}

  @Get()
  async list() {
    return await this.getNotification.execute();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });

    return { notification };
  }
}
