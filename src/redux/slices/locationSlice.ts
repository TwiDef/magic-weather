import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import weatherService from "../../services/weatherService";

export const fetchLocationInfo = createAsyncThunk('location/fetchLocatinInfo', async (cityname: string, thunkAPI) => {
    try {
        return await weatherService.getLocationInfo(cityname)
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

interface ILocationSlice {
    name: string | null
    localtime_epoch: number | null,
    country: string | null
    status: Status.LOADING | Status.SUCCESS | Status.ERROR
}

const initialState: ILocationSlice = {
    name: null,
    localtime_epoch: null,
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
            state.localtime_epoch = action.payload.localtime_epoch
            state.country = action.payload.country
        })
        builder.addCase(fetchLocationInfo.rejected, (state) => {
            state.status = Status.ERROR

        })
    }
})

export const { } = locationSlice.actions
export default locationSlice.reducer