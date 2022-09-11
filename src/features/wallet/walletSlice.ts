import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface WalletState {
  walletsPool: Array<object>;
  wallet: object;
  authenticatedWallet: any;
}

// Define the initial state using that type
const initialState: WalletState = {
  walletsPool: [],
  wallet: {},
  authenticatedWallet: {},
};

export const walletSlice = createSlice({
  name: "wallets",
  initialState,
  reducers: {
    addWallet: (state, action: PayloadAction<object>) => {
      state.wallet = action.payload;
      state.walletsPool.push(action.payload);
    },
    addAuthenticatedWallet: (state, action: PayloadAction<object>) => {
      state.authenticatedWallet = action.payload;
    },
  },
});

export const { addWallet, addAuthenticatedWallet } = walletSlice.actions;

export const checkWallet = (state: RootState) => state.wallets;

export default walletSlice.reducer;
