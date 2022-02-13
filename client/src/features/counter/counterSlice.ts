import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CounterState {
  value: string[];
}

const initialState: CounterState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    allCoins: (state, action: PayloadAction<any>) => {
      state.value=[];
      state.value = [...state.value, action.payload];
    },
    removeCoins: (state,action: PayloadAction<any>) =>{
      state.value=[...state.value, action.payload];
    }
  },
});

export const { allCoins,removeCoins } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;
