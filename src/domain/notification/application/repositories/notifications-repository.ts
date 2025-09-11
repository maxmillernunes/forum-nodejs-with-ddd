import type { Notification } from '../../enterprise/notification'

export interface NotificationsRepository {
  create(notification: Notification): Promise<void>
}
