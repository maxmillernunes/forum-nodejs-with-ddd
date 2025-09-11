import type { NotificationsRepository } from '@/domain/notification/application/repositories/notifications-repository'
import type { Notification } from '@/domain/notification/enterprise/notification'

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public itens: Notification[] = []

  async create(notification: Notification): Promise<void> {
    this.itens.push(notification)
  }
}
