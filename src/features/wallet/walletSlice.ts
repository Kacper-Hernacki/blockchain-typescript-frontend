import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface WalletState {
  wallet: Array<object>;
}

// Define the initial state using that type
const initialState: WalletState = {
  wallet: [],
};

export const walletSlice = createSlice({
  name: "usersWallet",
  initialState,
  reducers: {
    addAuthenticatedWallet: (state, action: PayloadAction<object>) => {
      state.wallet.push(action.payload);
    },
  },
});

export const { addAuthenticatedWallet } = walletSlice.actions;

export const checkWallet = (state: RootState) => state.wallet;

export default walletSlice.reducer;
