import {configureStore} from '@reduxjs/toolkit';
import PINCodeImitatorReducer from "../PINCodeImitator/PINCodeImitatorSlice.ts";

export const store = configureStore({
    reducer: {
        pincode: PINCodeImitatorReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;