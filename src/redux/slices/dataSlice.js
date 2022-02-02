import axios from "axios"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { SUCCEEDED, FAILED, IDLE, LOADING } from '../../model/loadingState'
import { fetchData } from '../../api/data'

const fetch = createAsyncThunk(
  'data/fetch',
  async (_, thunkApi) => {
    const { signal } = thunkApi
    const tokenSource = axios.CancelToken.source()
    signal.addEventListener('abort', () => {
      tokenSource.cancel()
    })

    const data = await fetchData()
    return data
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: IDLE,
    error: null,
  },
  reducers: {
    setError(state, action) {
      state.error = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetch.pending, (state) => {
        state.status = LOADING
      })
      .addCase(fetch.fulfilled, (state, action) => {
        state.profile = action.payload
        state.status = SUCCEEDED
        state.error = null
      })
      .addCase(fetch.rejected, (state, action) => {
        state.status = FAILED
        state.error = action.error.message
      })
  },
})

export { fetch }
export default dataSlice.reducer
