import { configureStore } from "@reduxjs/toolkit";
import walletSlice from "../features/wallet/walletSlice";

const store = configureStore({
  reducer: {
    wallet: walletSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
