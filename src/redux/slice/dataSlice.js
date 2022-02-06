import axios from "axios"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { SUCCEEDED, FAILED, IDLE, LOADING } from '../../model/loadingState'
import { fetchData } from '../../api/data'
import { ALL } from "../../model/categories"
import { DEFAULT } from "../../model/order"

const fetch = createAsyncThunk(
  'data/fetch',
  async (_, thunkApi) => {
    const { signal } = thunkApi
    const tokenSource = axios.CancelToken.source()
    signal.addEventListener('abort', () => {
      tokenSource.cancel()
    })

    const { data } = await fetchData()
    return data
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    category: ALL,
    date: DEFAULT,
    order: DEFAULT,
    status: IDLE,
    error: null,
    page: 1,
    search: null
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
      state.date = DEFAULT
      state.search = null
      state.order = DEFAULT
      state.page = 1
    },
    setDate(state, action) {
      state.date = action.payload
      state.order = DEFAULT
      state.page = 1
      state.search = null
    },
    setOrder(state, action) {
      state.order = action.payload
      state.category = ALL
      state.date = DEFAULT
      state.page = 1
      state.search = null
    },
    setPage(state, action) {
      state.page = action.payload
    },
    setSearch(state, action) {
      state.search = action.payload
      state.page = 1
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
        state.page = 1
        state.error = null
      })
      .addCase(fetch.rejected, (state, action) => {
        state.status = FAILED
        state.error = action.error.message
      })
  },
})

export { fetch }
export const { setCategory, setDate, setOrder, setPage, setSearch } = dataSlice.actions
export default dataSlice.reducer
