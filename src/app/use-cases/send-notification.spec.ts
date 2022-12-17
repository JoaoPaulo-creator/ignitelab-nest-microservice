import { SendNotification } from './send-notification';

describe('Send notifications', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'Notification test',
      category: 'social',
      recipientId: 'example-recipient-id'
    });

    expect(notification).toBeTruthy();
  });
});
