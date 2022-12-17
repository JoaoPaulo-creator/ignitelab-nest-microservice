import { Notifications } from '../entities/notifications';
import { Content } from '../entities/content';

describe('Notification', () => {
  it('should be able to create a notificaton', () => {
    const notification = new Notifications({
      content: new Content('New notification'),
      category: 'social',
      recipientId: 'er4282weuiwiou'
    });
    expect(notification).toBeTruthy();
  });
});
