import { configureStore } from "@reduxjs/toolkit";
import stateReducer from '../components/stateSlice'

export const store = configureStore({
    reducers: {
        state: stateReducer,
    },
});