import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './Counter/CounterSlice'

export const store = configureStore({
  reducer: {
    counter:CounterSlice
  },
})