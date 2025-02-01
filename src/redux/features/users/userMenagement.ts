import { baseApi } from "@/redux/api/baseApi";


const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // Get All Student API
        // getAllStudents: builder.query({
        //     query: (args) => {
        //         console.log(args);
        //         const params = new URLSearchParams();

        //         if (args) {
        //             args.forEach((item: TQueryParam) => {
        //                 params.append(item.name, item.value as string);
        //             });
        //         }

        //         return {
        //             url: '/students',
        //             method: 'GET',
        //             params: params,
        //         };
        //     },
        //     transformResponse: (response: TResponseRedux<TStudent[]>) => {
        //         return {
        //             data: response.data,
        //             meta: response.meta,
        //         };
        //     },
        // }),

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