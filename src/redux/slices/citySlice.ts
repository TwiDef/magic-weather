import { createSlice } from "@reduxjs/toolkit";

interface ICityNameSlice {
    cityName: string
    searchValue: string | null
}

const initialState: ICityNameSlice = {
    cityName: 'Sochi',
    searchValue: null
}

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {}
})

export const { } = citySlice.actions
export default citySlice.reducer