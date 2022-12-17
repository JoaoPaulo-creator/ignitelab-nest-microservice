import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsReposity } from '@test/repository/in-memory-notification-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel notifications', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsReposity = new InMemoryNotificationsReposity();
    const cancelNotification = new CancelNotification(notificationsReposity);

    const notification = makeNotification();

    await notificationsReposity.create(notification); // esse await é opcional

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsReposity.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationsReposity = new InMemoryNotificationsReposity();
    const cancelNotification = new CancelNotification(notificationsReposity);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
