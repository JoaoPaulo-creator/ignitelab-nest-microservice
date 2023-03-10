import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repositry';
import { NotificationNotFound } from './errors/notification-not-found';

interface ReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {
  constructor(private notificationsReposity: NotificationsRepository) {}

  async execute(
    request: ReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsReposity.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    // lendo uma notificacao
    notification.read();
    await this.notificationsReposity.save(notification);
  }
}
