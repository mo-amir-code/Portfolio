import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/api"}),
    endpoints: (builder) => ({
        getauth: builder.query({
            query: () => ({
                url: 'auth',
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })
        }),
    })
});

export const { useGetauthQuery  } = authAPI;

export default authAPI;