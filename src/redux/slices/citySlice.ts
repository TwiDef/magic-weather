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
    reducers: {
        setCity: (state, action) => {
            state.cityName = action.payload
        }
    }
})

export const { setCity } = citySlice.actions
export default citySlice.reducer