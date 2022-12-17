import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@app/entities/notifications';
import { Content } from '@app/entities/content';

export class PrismaNotificationMapper {
  /*
    este serve para que a Notification (classe que representa meu dominio), seja convertida para
    o Notification do Prisma
  */
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  /*
    este segue a mesma ideia do metodo de cima, porem converte do prisma para o dominio
  */
  static toDomain(rawNotification: RawNotification): Notification {
    return new Notification(
      {
        category: rawNotification.category,
        content: new Content(rawNotification.content),
        recipientId: rawNotification.recipientId,
        readAt: rawNotification.readAt,
        canceledAt: rawNotification.canceledAt,
        createdAt: rawNotification.createdAt,
      },
      rawNotification.id,
    );
  }
}
