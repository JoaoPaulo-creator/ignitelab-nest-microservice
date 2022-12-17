import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsReposity } from '@test/repository/in-memory-notification-repository';
import { UnreadNotification } from './unread-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Unread notifications', () => {
  it('should be able to unread a notification', async () => {
    const notificationsReposity = new InMemoryNotificationsReposity();
    const unreadNotification = new UnreadNotification(notificationsReposity);

    const notification = makeNotification({ readAt: new Date() });

    await notificationsReposity.create(notification); // esse await é opcional

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsReposity.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    const notificationsReposity = new InMemoryNotificationsReposity();
    const readNotification = new UnreadNotification(notificationsReposity);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
