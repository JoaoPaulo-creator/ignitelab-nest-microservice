import { SendNotification } from '@app/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationsPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class KafkaNotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.service')
  async handleNotification(
    @Payload() { content, category, recipientId }: SendNotificationsPayload,
  ) {
    await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });
  }
}
