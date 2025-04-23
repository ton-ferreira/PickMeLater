import { QueueItemType } from "@models/queueItemEnums";

export const queueItemTypeColors: Record<QueueItemType, string> = {
  [QueueItemType.Book]: "#E0ECFF",
  [QueueItemType.Movie]: "#FFD6D6",
  [QueueItemType.Series]: "#F1D6FF",
  [QueueItemType.Video]: "#FFE9E0",
  [QueueItemType.Podcast]: "#D6FFE2",
  [QueueItemType.Article]: "#FFF6CC",
  [QueueItemType.Other]: "#EEEEEE",
};
