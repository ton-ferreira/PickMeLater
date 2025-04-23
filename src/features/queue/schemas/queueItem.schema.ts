import { QueueItemPriority, QueueItemType } from "@models/queueItemEnums";
import { z } from "zod";

export const queueItemSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required").max(30),
  notes: z
    .string()
    .min(1, "Insert some meaningful note about your item.")
    .max(80),
  addedAt: z.date(),
  priority: z.nativeEnum(QueueItemPriority),
  type: z.nativeEnum(QueueItemType),
  url: z.string().url().optional(),
});

export type QueueItemFormData = z.infer<typeof queueItemSchema>;
