import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueueItem } from "../types/queue.types";

const initialState: QueueItem[] = [];

const queueSlice = createSlice({
  name: "queue",
  initialState,
  reducers: {
    addQueueItem: (state, action: PayloadAction<QueueItem>) => {
      state.push(action.payload);
    },
    removeQueueItem: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    editQueueItem: (state, action: PayloadAction<QueueItem>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addQueueItem, removeQueueItem, editQueueItem } =
  queueSlice.actions;
export default queueSlice.reducer;
