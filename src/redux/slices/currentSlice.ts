import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import weatherService from "../../services/weatherService";

export const fetchCurrentInfo = createAsyncThunk('current/fetchCurrentInfo', async (cityname: string, thunkAPI) => {
    try {
        return await weatherService.getCurrentInfo(cityname)
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export type TCondition = {
    code: number,
    icon: string,
    text: string
}

interface ICurrentSlice {
    temp_type: string,
    condition: TCondition | null,
    feelslike_c: number | null,
    feelslike_f: number | null,
    humidity: number | null,
    pressure_mb: number | null,
    temp_c: number | null,
    temp_f: number | null,
    wind_kph: number | null,
    status: Status.LOADING | Status.SUCCESS | Status.ERROR
}

const initialState: ICurrentSlice = {
    temp_type: 'c',
    condition: null,
    feelslike_c: null,
    feelslike_f: null,
    humidity: null,
    pressure_mb: null,
    temp_c: null,
    temp_f: null,
    wind_kph: null,
    status: Status.LOADING
}

const currentSlice = createSlice({
    name: 'current',
    initialState,
    reducers: {
        toggleTempType: (state, action) => {
            state.temp_type = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchCurrentInfo.pending, (state) => {
            state.status = Status.LOADING
        })
        builder.addCase(fetchCurrentInfo.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.condition = action.payload.condition
            state.feelslike_c = action.payload.feelslike_c
            state.feelslike_f = action.payload.feelslike_f
            state.humidity = action.payload.humidity
            state.pressure_mb = action.payload.pressure_mb
            state.temp_c = action.payload.temp_c
            state.temp_f = action.payload.temp_f
            state.wind_kph = action.payload.wind_kph
        })
        builder.addCase(fetchCurrentInfo.rejected, (state) => {
            state.status = Status.ERROR
        })
    }
})

export const { toggleTempType } = currentSlice.actions
export default currentSlice.reducer