import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';

import locationSlice from "./slices/locationSlice";

export const store = configureStore({
    reducer: {
        locationInfo: locationSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch

