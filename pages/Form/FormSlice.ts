import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormState } from "./IFormState";
import { formInitialState } from "./FormInitialState";

export const formSlice = createSlice({
  name: 'formSlice',
  initialState: formInitialState,
  reducers: {
    createInvoice: (state: FormState, action: PayloadAction<FormState>) => {
      return { ...state, ...action.payload }
    }
  }
})

export const { createInvoice } = formSlice.actions

export default formSlice.reducer