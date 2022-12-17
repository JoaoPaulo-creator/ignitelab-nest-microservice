import { Content } from '@app/entities/content';
import { NotificationProps, Notification } from '@app/entities/notifications';

// Partial<> serve para que deixar os campos/atributos opcionais. Assim consigo usar somente um dos campos,
// quando necessario
type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Conteudo teste'),
    recipientId: 'example-id-content',
    ...override,
  });
}
