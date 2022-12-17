import { InMemoryNotificationsReposity } from '../../../test/repository/in-memory-notification-repository';
import { SendNotification } from './send-notification';

describe('Send notifications', () => {
  it('should be able to send a notification', async () => {
    const notificationsReposity = new InMemoryNotificationsReposity();
    const sendNotification = new SendNotification(notificationsReposity);

    const { notification } = await sendNotification.execute({
      content: 'Notification test',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notificationsReposity.notifications).toHaveLength(1);
    expect(notificationsReposity.notifications[0]).toEqual(notification);
  });
});
