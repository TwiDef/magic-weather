import { createSlice } from "@reduxjs/toolkit";

interface ICityNameSlice {
    cityName: string
    searchValue: string
}

const initialState: ICityNameSlice = {
    cityName: 'Sochi',
    searchValue: ''
}

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setCity: (state, action) => {
            state.cityName = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        clearSearchValue: (state) => {
            state.searchValue = ''
        }
    }
})

export const { setCity, setSearchValue, clearSearchValue } = citySlice.actions
export default citySlice.reducer