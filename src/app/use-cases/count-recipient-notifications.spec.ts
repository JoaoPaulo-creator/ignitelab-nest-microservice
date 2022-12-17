import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notifications';
import { InMemoryNotificationsReposity } from '@test/repository/in-memory-notification-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsReposity = new InMemoryNotificationsReposity();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsReposity,
    );

    await notificationsReposity.create(
      new Notification({
        category: 'social',
        content: new Content('Conteudo teste'),
        recipientId: 'id1',
      }),
    );

    await notificationsReposity.create(
      new Notification({
        category: 'social',
        content: new Content('Conteudo teste'),
        recipientId: 'id1',
      }),
    );

    await notificationsReposity.create(
      new Notification({
        category: 'social',
        content: new Content('Conteudo teste'),
        recipientId: 'o2',
      }),
    );

    await notificationsReposity.create(
      new Notification({
        category: 'social',
        content: new Content('Conteudo teste'),
        recipientId: 'example-id-content',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'id1',
    });

    expect(count).toEqual(2);
  });
});
