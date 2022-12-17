/* eslint-disable prettier/prettier */
import { Notification } from '../../src/application/entities/notification';
import { NotificationRepository } from '../../src/application/repositories/notification-repository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];
  
  async list(): Promise<Notification[]> {
    return this.notifications;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
