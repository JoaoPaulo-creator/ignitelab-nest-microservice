import { Content } from '../entities/content';
import { Notifications } from '../entities/notifications';
import { NotificationsRepository } from '../repositories/notifications-repositry';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notifications;
}

export class SendNotification {
  constructor(private notificationsReposity: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notifications({
      recipientId,
      content: new Content(content),
      category
    });

    await this.notificationsReposity.create(notification);

    return { notification };
  }
}
