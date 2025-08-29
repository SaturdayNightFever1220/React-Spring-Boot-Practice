import { configureStore } from '@reduxjs/toolkit'
import { itemsApi } from '../items/itemsApi'
import { counterSlice } from '../counter/counterSlice'

export const store = configureStore({
  reducer: {
    [itemsApi.reducerPath]: itemsApi.reducer,
    counter: counterSlice.reducer
  },
  middleware: (g) => g().concat(itemsApi.middleware),
})
