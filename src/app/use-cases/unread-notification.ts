import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repositry';
import { NotificationNotFound } from './errors/notification-not-found';

interface UnreadNotificationRequest {
  notificationId: string;
}

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(private notificationsReposity: NotificationsRepository) {}

  async execute(
    request: UnreadNotificationRequest,
  ): Promise<UnreadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsReposity.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    // 'desle' uma notificacao
    notification.unread();
    await this.notificationsReposity.save(notification);
  }
}
