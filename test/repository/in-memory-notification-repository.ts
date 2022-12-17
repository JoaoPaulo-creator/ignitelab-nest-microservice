import { Notifications } from 'src/app/entities/notifications';
import { NotificationsRepository } from 'src/app/repositories/notifications-repositry';

export class InMemoryNotificationsReposity implements NotificationsRepository {
  public notifications: Notifications[] = [];
  async create(notification: Notifications) {
    this.notifications.push(notification);
  }
}
