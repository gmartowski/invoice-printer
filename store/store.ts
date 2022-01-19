import { configureStore} from "@reduxjs/toolkit"
import formReducer from '../pages/Form/FormSlice'

export const store = configureStore({
  reducer: {
    invoice: formReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch