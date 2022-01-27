import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormState } from "./IFormState";
import { formInitialState } from "./FormInitialState";

export const formSlice = createSlice({
  name: 'formSlice',
  initialState: formInitialState,
  reducers: {
    createInvoice: (state: FormState, action: PayloadAction<FormState>) => {
      return {
        ...state,
        ...action.payload,
        vatPercentage: action.payload.vatPercentage,
        grossAmount: Number(action.payload.nettAmount) + Number(action.payload.nettAmount * action.payload.vatPercentage),
        productName: action.payload.productName,
        nettAmount: Number(action.payload.nettAmount),
        nettSumAmount: Number(action.payload.nettAmount),
        vatAmount: Number(action.payload.nettAmount * action.payload.vatPercentage),
      }
    }
  }
})

export const { createInvoice } = formSlice.actions

export default formSlice.reducer