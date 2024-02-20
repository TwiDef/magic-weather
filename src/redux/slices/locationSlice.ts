import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLocationInfo } from "../../services/weatherService";

export const fetchLocationInfo = createAsyncThunk('location/fetchLocatinInfo', getLocationInfo)

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

interface ILocationSlice {
    name: string | null
    localtime: string | null,
    country: string | null
    status: Status.LOADING | Status.SUCCESS | Status.ERROR
}

const initialState: ILocationSlice = {
    name: null,
    localtime: null,
    country: null,
    status: Status.LOADING
}



const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchLocationInfo.pending, (state) => {
            state.status = Status.LOADING
        })
        builder.addCase(fetchLocationInfo.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.name = action.payload.name
            state.localtime = action.payload.localtime
            state.country = action.payload.country
        })
    }
})

export const { } = locationSlice.actions
export default locationSlice.reducer