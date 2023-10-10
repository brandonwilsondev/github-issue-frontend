import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import {
    baseUrl,
    baseUrlLocal,
} from '~config/urls'

console.log("baseUrlLocal===>", baseUrlLocal)

export const api = createApi({
    tagTypes: [],
    baseQuery: fetchBaseQuery({
        baseUrl:
            process.env.NODE_ENV === 'production' ?
                baseUrl
                :
                baseUrlLocal,
        prepareHeaders: (
            headers,
        ) => {

            return headers
        },
    }),
    endpoints: () => ({}),
})