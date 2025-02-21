import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PINCodeImitatorState {
    enteredPin: string;
    status: 'empty' | 'success' | 'error';
    message: string;
}

const initialState: PINCodeImitatorState = {
    enteredPin: '',
    status: 'empty',
    message: '',
};

export const PINCodeImitatorSlice = createSlice({
    name: 'PINCodeImitator',
    initialState,
    reducers: {
        enterDigit: (state, action: PayloadAction<string>) => {
            if (state.enteredPin.length < 4) {
                state.enteredPin += action.payload;
            }
        },
        deleteDigit: (state) => {
            state.enteredPin = state.enteredPin.slice(0, -1);
        },
        submitPin: (state) => {
            const CORRECT_PIN = '1337';
            if (state.enteredPin === CORRECT_PIN) {
                state.status = 'success';
                state.message = 'Access Granted';
            } else {
                state.status = 'error';
                state.message = 'Access Denied';
            }
        },
        reset: (state) => {
            state.enteredPin = '';
            state.status = 'empty';
            state.message = '';
        }
    }
});

export const { enterDigit, deleteDigit, submitPin, reset } = PINCodeImitatorSlice.actions;

export default PINCodeImitatorSlice.reducer;