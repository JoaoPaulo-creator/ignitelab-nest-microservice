import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsReposity } from '@test/repository/in-memory-notification-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsReposity();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'id1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'id1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'id2' }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'id1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'id1' }),
        expect.objectContaining({ recipientId: 'id1' }),
      ]),
    );
  });
});
