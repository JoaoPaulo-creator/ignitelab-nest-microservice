import { Notification } from '../entities/notifications';

/*
Repositórios não são implementados em classes. Nesse caso, essa classe abstrata será utilizada dentro do construtor

 */

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>; // se o da notification nao existir, retorna nulo
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>; // consultando varias por recipientId
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}
