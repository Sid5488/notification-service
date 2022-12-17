/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification-repository';

@Injectable()
export class GetNotification {
  constructor(
    private notificationRepository: NotificationRepository
  ) {}

  async execute(): Promise<Notification[]> {
    const notifications = await this.notificationRepository.list();

    return notifications;
  }
}
