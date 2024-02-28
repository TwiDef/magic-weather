import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';

import locationSlice from "./slices/locationSlice";
import currentSlice from "./slices/currentSlice";
import forecastSlice from "./slices/forecastSlice";
import citySlice from "./slices/citySlice";

export const store = configureStore({
    reducer: {
        locationInfo: locationSlice,
        currentInfo: currentSlice,
        forecast: forecastSlice,
        city: citySlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch

