/* eslint-disable prettier/prettier */
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { GetNotification } from './get-notification';


describe('Send notification', () => {
  it('should be able list notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const getNoficiation = new GetNotification(notificationRepository);

    const notifications = await getNoficiation.execute();

    expect(notificationRepository.notifications[0]).toBe(notifications[0]);
  });
});
