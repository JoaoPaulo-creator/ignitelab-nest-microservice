import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repositry';

interface CountRecipientNotificationsRequest {
  recipientId: string;
}

interface CountRecipientNotificationsResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsReposity: NotificationsRepository) {}

  async execute(
    request: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationsReposity.countManyByRecipientId(
      recipientId,
    );

    return { count };
  }
}
