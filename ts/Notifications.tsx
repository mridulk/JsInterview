enum NotificationType {
  SMS = "sms",
  EMAIL = "email",
  PUSH = "push",
}
enum NotificationStatus {
  PENDING = "pending",
  SENT = "sent",
  FAILED = "failed",
}
interface NotificationPayload {
  id: string;
  content: string;
  timestamp: Date;
  status: NotificationStatus;
}

// store for managing notifications
class NotificatioStore {
  notifications: Map<string, NotificationPayload> = new Map();
  save(notification: NotificationPayload): string {
    this.notifications.set(notification.id, notification);
    return notification.id;
  }
  delete(id: string): boolean {
    return this.notifications.delete(id);
  }
  list(
    page: number = 0,
    limit: number = 5,
    query: string = ""
  ): NotificationPayload[] {
    let res = Array.from(this.notifications.values());
    let filterNotifications: NotificationPayload[] = [];
    if (query) {
      filterNotifications = res.filter((item) =>
        item.content.toLowerCase().includes(query.toLowerCase())
      );
    }
    return filterNotifications.slice((page - 1) * limit, page + limit);
  }
  findById(id: string): NotificationPayload | undefined {
    return this.notifications.get(id);
  }
  update(id: string, payload: any = {}) {
    if (!id) return;
    const getCurrentNotification = this.notifications.get(id);
    this.notifications.set(id, {
      ...getCurrentNotification,
      ...payload,
    });
  }
}

const NotificationStoreInstance = new NotificatioStore();

// Notification service API's endpoints
class NotificationService {
  createNotitication(content: string): string {
    const payload: NotificationPayload = {
      id: this.generateId(),
      content,
      status: NotificationStatus.PENDING,
      timestamp: new Date(),
    };
    return NotificationStoreInstance.save(payload);
  }
  deleteNotification(id: string): boolean {
    return NotificationStoreInstance.delete(id);
  }
  getNotification(id: string): NotificationPayload | undefined {
    return NotificationStoreInstance.findById(id);
  }
  listAllNotifications(
    page: number,
    limit: number,
    query: ""
  ): NotificationPayload[] {
    return NotificationStoreInstance.list(page, limit, query);
  }
  updateNotification(id: string, payload: any = {}) {
    NotificationStoreInstance.update(id, payload);
  }
  private generateId() {
    return window.crypto.randomUUID();
  }
}

const NotificationServiceInstance = new NotificationService();

// Notification send campaigns
class NotificationSendService {
  batchSize;
  constructor(batchSize: number) {
    this.batchSize = batchSize;
  }
  sendNotification(id: string, recipientIds: any[], type: NotificationType) {
    const notification = NotificationServiceInstance.getNotification(id);
    switch (type) {
      case NotificationType.EMAIL:
        this.sendBatchEmail(id, recipientIds);
        break;
      case NotificationType.PUSH:
        this.sendPush(id, recipientIds);

        break;
      case NotificationType.SMS:
        this.sendSMS(id, recipientIds);
        break;
      default:
        break;
    }
  }
  sendSMS(id: string, recipientIds: any[]) {
    recipientIds.forEach((item) => {
      console.log(`Send sms for recipient id: ${item}`);
    });
    NotificationServiceInstance.updateNotification(id, {
      sent: NotificationStatus.SENT,
    });
  }
  sendBatchEmail(id: string, recipientIds: any[]) {
    for (let i = 0; i < recipientIds?.length; i += this.batchSize) {
      const res = recipientIds.slice(i, i + this.batchSize);
      console.log(`send email for recipient batch ${res.join(",")}`);
    }
    NotificationServiceInstance.updateNotification(id, {
      sent: NotificationStatus.SENT,
    });
  }
  sendPush(id: string, recipientIds: any[]) {
    recipientIds.forEach((item) => {
      console.log(`Send push notifications for recipient id: ${item}`);
    });
    NotificationServiceInstance.updateNotification(id, {
      sent: NotificationStatus.SENT,
    });
  }
}

const NotificationSendServiceInstance = new NotificationSendService(5);
