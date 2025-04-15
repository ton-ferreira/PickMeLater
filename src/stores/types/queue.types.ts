import {
  QueueItemPriority,
  QueueItemStatus,
  QueueItemType,
} from "types/queueItemEnums";

export type QueueItem = {
  addedAt: Date;
  id: string;
  name: string;
  notes: string;
  priority: QueueItemPriority;
  status: QueueItemStatus;
  type: QueueItemType;
  url?: string;
};
