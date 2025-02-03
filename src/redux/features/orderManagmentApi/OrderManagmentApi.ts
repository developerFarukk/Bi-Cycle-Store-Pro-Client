import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam, TResponseRedux } from "@/types";
import { TOrders } from "@/types/orderTypes";



const orderManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // Get All Bicycle
        getAllOrders: builder.query({
            query: (args) => {
                // console.log(args);
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string);
                    });
                }

                return {
                    url: '/orders',
                    method: 'GET',
                    params: params,
                };
            },
            providesTags: ['Order'],
            transformResponse: (response: TResponseRedux<TOrders[]>) => {
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
        //         };
        //     },
        // }),

        // create Product API
        // addProduct: builder.mutation({
        //     query: (data) => ({
        //         url: '/bicycle/create-bicycle',
        //         method: 'POST',
        //         body: data,
        //     }),
        // }),

        // delete product Api
        // deleteProduct: builder.mutation({
        //     query: ({ id, body }) => ({
        //         url: `/bicycle/${id}`,
        //         method: 'PATCH',
        //         body,
        //     }),
        //     invalidatesTags: ['Bicycle']
        // }),

        // Update Product
        // updateProduct: builder.mutation({
        //     query: ({ bicycleId, body }) => ({
        //         url: `/bicycle/${bicycleId}`,
        //         method: 'PATCH',
        //         body,
        //     }),
        //     invalidatesTags: ['Bicycle']
        // }),

    }),
});

export const {
    // useAddProductMutation,
    useGetAllOrdersQuery,
    // useGetSingleBicycleQuery,
    // useDeleteProductMutation,
    // useUpdateProductMutation,
} = orderManagementApi;