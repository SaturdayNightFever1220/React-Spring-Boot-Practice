import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// get時の完全なItem
export interface Item {
  id: number
  itemName: string
  price: number
  groupid: string
  registDate: string
}

// post時に送る新規Item (id / registDate はサーバ側付与)
export interface NewItem {
  itemName: string
  price: number
  groupid: string
}

export const itemsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (b) => ({
    getItems: b.query<Item[], void>({
      query: () => ({ url: 'items', method: 'GET' }),
    }),
    addItem: b.mutation<Item, NewItem>({
      query: (body) => ({ url: 'item', method: 'POST', body }),
    }),
  }),
})

export const { useGetItemsQuery, useAddItemMutation } = itemsApi
