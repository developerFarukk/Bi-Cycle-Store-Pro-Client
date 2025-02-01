/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam, TResponseRedux } from "@/types/global";
import { TBicycle } from "@/types/productsManagment";


const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // Get All Bicycle
        getAllProducts: builder.query({
            query: (args) => {
                console.log(args);
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string);
                    });
                }

                return {
                    url: '/bicycle?limit=6',
                    method: 'GET',
                    params: params,
                };
            },
            transformResponse: (response: TResponseRedux<TBicycle[]>) => {
                return {
                    data: response.data,
                };
            },
        }),

        // Get single Bicycle
        getSingleBicycle: builder.query({
            query: (id) => {
                return {
                    url: `/bicycle/${id}`,
                    method: 'GET',
                };
            },
            transformResponse: (response: TResponseRedux<any>) => {
                return {
                    data: response.data,
                    // meta: response.meta,
                };
            },
        }),

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
    useGetAllProductsQuery,
    useGetSingleBicycleQuery,
} = userManagementApi;