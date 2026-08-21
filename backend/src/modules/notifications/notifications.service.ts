import { Injectable, ForbiddenException } from '@nestjs/common';
import { DataStore } from '../../common/data-store';
import { UserRole } from '../../common/constants';

@Injectable()
export class NotificationsService {
  private db: DataStore;
  constructor() { this.db = DataStore.getInstance(); }

  findAll(role: UserRole, userId: string): any[] {
    if (!userId) throw new ForbiddenException('x-user-id header is required to view notifications');
    return this.db.notifications.filter(n => n.userId === userId);
  }

  markRead(notificationId: string, userId: string): any {
    const notif = this.db.notifications.find(n => n.notificationId === notificationId && n.userId === userId);
    if (!notif) return { success: false, message: 'Notification not found' };
    notif.read = true;
    return { success: true, message: 'Notification marked as read', data: notif };
  }

  markAllRead(userId: string): any {
    const notifs = this.db.notifications.filter(n => n.userId === userId);
    notifs.forEach(n => n.read = true);
    return { success: true, message: `${notifs.length} notifications marked as read` };
  }

  getUnreadCount(userId: string): any {
    const count = this.db.notifications.filter(n => n.userId === userId && !n.read).length;
    return { userId, unreadCount: count };
  }
}
