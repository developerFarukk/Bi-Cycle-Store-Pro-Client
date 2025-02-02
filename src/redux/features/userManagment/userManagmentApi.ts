
import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam, TResponseRedux } from "@/types/global";
import { TUser } from "../auth/authSlice";


const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // Get All Bicycle
        getAllUsers: builder.query({
            query: (args) => {
                console.log(args);
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string);
                    });
                }

                return {
                    url: '/users',
                    method: 'GET',
                    params: params,
                };
            },
            transformResponse: (response: TResponseRedux<TUser[]>) => {
                return {
                    data: response.data,
                };
            },
        }),

        // Get single Bicycle
        // getSingleBicycle: builder.query({
        //     query: (id) => {
        //         return {
        //             url: `/bicycle/${id}`,
        //             method: 'GET',
        //         };
        //     },
        //     transformResponse: (response: TResponseRedux<any>) => {
        //         return {
        //             data: response.data,
        //             // meta: response.meta,
        //         };
        //     },
        // }),

        // create student API
        // addStudent: builder.mutation({
        //     query: (data) => ({
        //         url: '/users/create-student',
        //         method: 'POST',
        //         body: data,
        //     }),
        // }),

    }),
});

export const {
    // useAddStudentMutation,
    useGetAllUsersQuery,
    // useGetSingleBicycleQuery,
} = userManagementApi;