import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import weatherService from "../../services/weatherService";

export const fetchForecastInfo = createAsyncThunk('current/fetchForecastInfo', async (cityname: string, thunkAPI) => {
    try {
        return await weatherService.getForecastInfo(cityname)
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

interface IForecastSlice {
    astro: [] | null,
    hour: [] | null,
    status: Status
}

const initialState: IForecastSlice = {
    astro: null,
    hour: null,
    status: Status.LOADING
}

const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchForecastInfo.pending, (state) => {
            state.status = Status.LOADING
        })
        builder.addCase(fetchForecastInfo.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.astro = action.payload.astro
            state.hour = action.payload.hour
        })
        builder.addCase(fetchForecastInfo.rejected, (state) => {
            state.status = Status.ERROR
        })
    }
})

export const { } = forecastSlice.actions
export default forecastSlice.reducer