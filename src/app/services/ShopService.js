import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firebase/db'


export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes:["image","location"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (categorias) => `catalogo.json?orderBy="categorias"&equalTo="${categorias}"`,
    }),
    getProduct: builder.query({
        query:(id)=> `catalogo/${id}.json`
    }),
    getCategories : builder.query({
        query: () => "categorias.json"
    }),
    postOrders: builder.mutation({
      query: (order) => ({
        url:"ordenes.json",
        method:"POST",
        body:order
      })
  }),
    postProfileImage: builder.mutation({
      query: ({localId,image}) => ({
        url:`profileImage/${localId}.json`,
        method:"PUT",
        body:{image}
      }),
      invalidatesTags:["image"]
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImage/${localId}.json`,
      providesTags:["image"]
    }),
    postUserLocation: builder.mutation({
      query: ({localId,locationFormatted}) => ({
        url:`userLocation/${localId}.json`,
        method:"PUT",
        body:locationFormatted
      }),
      invalidatesTags:["location"]
    }),
    getUserLocation: builder.query({
      query: (localId) => `userLocation/${localId}.json`,
      providesTags:["location"]
    }),
  }),
})

export const { useGetProductsQuery,
               useGetProductQuery,
               useGetCategoriesQuery ,
              usePostOrdersMutation,
              usePostProfileImageMutation,
              useGetProfileImageQuery,
              usePostUserLocationMutation,
              useGetUserLocationQuery
             } = shopApi