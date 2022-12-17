import { Notifications } from '../entities/notifications';

/*
Repositórios não são implementados em classes. Nesse caso, essa classe abstrata será utilizada dentro do construtor

 */

export abstract class NotificationsRepository {
  abstract create(notification: Notifications): Promise<void>;
}
