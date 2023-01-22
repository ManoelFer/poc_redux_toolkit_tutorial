import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

export interface IInitialState {
  value: number;
}

const initialState: IInitialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter", // nome do reducer/slice
  initialState, // estado inicial
  //funções para serem executadas
  reducers: {
    increment: (state) => {
      //Funções para cada ação
      state.value += 1; // usa a biblioteca Immer por debaixo dos panos para manter o conceito de imutabilidade
    },
    incrementAmount: (state, action: PayloadAction<number>) => {
      //Funções para cada ação
      state.value += action.payload; // usa a biblioteca Immer por debaixo dos panos para manter o conceito de imutabilidade
    },
  },
});

//Exportando as ações
export const { increment, incrementAmount } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
