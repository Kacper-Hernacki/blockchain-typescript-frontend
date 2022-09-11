import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface WalletState {
  walletsPool: Array<object>;
  wallet: object;
}

// Define the initial state using that type
const initialState: WalletState = {
  walletsPool: [],
  wallet: {},
};

export const walletSlice = createSlice({
  name: "wallets",
  initialState,
  reducers: {
    addAuthenticatedWallet: (state, action: PayloadAction<object>) => {
      state.walletsPool.push(action.payload);
    },
  },
});

export const { addAuthenticatedWallet } = walletSlice.actions;

export const checkWallet = (state: RootState) => state.wallets;

export default walletSlice.reducer;
