import { baseApi } from "@/redux/api/baseApi";


const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({


        // create student API
        addUser: builder.mutation({
            query: (data) => ({
                url: '/users/register',
                method: 'POST',
                body: data,
            }),
        }),

    }),
});


export const {
    useAddUserMutation,
    // useGetAllStudentsQuery,
} = userManagementApi;