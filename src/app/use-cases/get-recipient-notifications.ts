import { Notification } from '@app/entities/notifications';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repositry';

interface GetRecipientNotificationsRequest {
  recipientId: string;
}

interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsReposity: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotificationsRequest,
  ): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsReposity.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
