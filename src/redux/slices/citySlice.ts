import { createSlice } from "@reduxjs/toolkit";

export type TCoords = {
    latitude: number,
    longitude: number
}

interface ICityNameSlice {
    cityName: string
    searchValue: string,
    coords: TCoords,
}

const initialState: ICityNameSlice = {
    cityName: 'Sochi',
    searchValue: '',
    coords: {
        latitude: 0,
        longitude: 0
    }
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
        },
        setGeoCoords: (state, action) => {
            state.coords = action.payload
        }
    },
})

export const { setCity, setSearchValue, clearSearchValue, setGeoCoords } = citySlice.actions
export default citySlice.reducer