import { ProjectFormType } from "@/components/admin/types";
import { APIRequestType } from "@/redux/reduxTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const projectAPI = createApi({
    reducerPath: "projectAPI",
    baseQuery: fetchBaseQuery({baseUrl: "/api"}),
    endpoints: (builder) => ({
        addProject: builder.mutation<APIRequestType, ProjectFormType>({
            query: (data) => ({
                url: 'project',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
                credentials: "include"
            })
        }),
        getProjects: builder.query<APIRequestType, undefined>({
            query: () => ({
                url: 'project',
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })
        })
    })
});

export const { useAddProjectMutation, useGetProjectsQuery  } = projectAPI;

export default projectAPI;