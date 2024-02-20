import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';

import locationSlice from "./slices/locationSlice";
import currentSlice from "./slices/currentSlice";

export const store = configureStore({
    reducer: {
        locationInfo: locationSlice,
        currentInfo: currentSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch

