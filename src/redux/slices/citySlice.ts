import { createSlice } from "@reduxjs/toolkit";

export type TCoords = {
    latitude: number | null,
    longitude: number | null
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
        latitude: null,
        longitude: null
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