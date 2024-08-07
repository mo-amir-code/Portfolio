import { SignInFormType, SignUpFormType } from "@/components/auth/types";
import { APIRequestType } from "@/redux/reduxTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: fetchBaseQuery({baseUrl: "/api/auth"}),
    endpoints: (builder) => ({
        signIn: builder.mutation<APIRequestType, SignInFormType>({
            query: (data) => ({
                url: 'signin',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
                credentials: "include"
            })
        }),
        signUp: builder.mutation<APIRequestType, SignUpFormType>({
            query: (data) => ({
                url: 'signup',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
                credentials: "include"
            })
        }),
    })
});

export const { useSignInMutation, useSignUpMutation  } = authAPI;

export default authAPI;