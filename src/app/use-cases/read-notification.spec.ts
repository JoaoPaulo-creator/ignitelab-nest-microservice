import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsReposity } from '@test/repository/in-memory-notification-repository';
import { ReadNotification } from './read-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Read notifications', () => {
  it('should be able to read a notification', async () => {
    const notificationsReposity = new InMemoryNotificationsReposity();
    const readNotification = new ReadNotification(notificationsReposity);

    const notification = makeNotification();

    await notificationsReposity.create(notification); // esse await é opcional

    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsReposity.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a non existing notification', async () => {
    const notificationsReposity = new InMemoryNotificationsReposity();
    const readNotification = new ReadNotification(notificationsReposity);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
