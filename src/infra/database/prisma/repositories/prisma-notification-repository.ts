/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import { Notification } from 'src/application/entities/notification';
import { NotificationRepository } from 'src/application/repositories/notification-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(
    private prismaService: PrismaService
  ) {}

  async list(): Promise<any> {
    const notifications = await this.prismaService.notification.findMany();

    return notifications;
  }

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.content.value,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt
      }
    })
  }
}
