import axios from "axios"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { SUCCEEDED, FAILED, IDLE, LOADING } from '../../model/loadingState'
import { fetchData } from '../../api/data'
import { ALL } from "../../model/categories"
import { ASCENDING, DESCENDING } from "../../model/order"

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
    category: ALL,
    date: 'NO',
    order: ASCENDING,
    status: IDLE,
    error: null,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
      state.date = 'NO'
      state.order = ASCENDING
    },
    setDate(state, action) {
      state.date = action.payload
      state.order = DESCENDING
    },
    setOrder(state, action) {
      state.order = action.payload
      state.date = 'NO'
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetch.pending, (state) => {
        state.status = LOADING
      })
      .addCase(fetch.fulfilled, (state, action) => {
        state.data = action.payload
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
export const { setCategory, setDate, setOrder } = dataSlice.actions
export default dataSlice.reducer
