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
        addOrder: builder.mutation({
            query: (data) => ({
                url: '/orders/create-order',
                method: 'POST',
                body: data,
            }),
        }),

        // Verify Order
        verifyOrder: builder.query({
            query: (order_id) => ({
                url: "/orders/verify",
                params: { order_id },
                method: "GET",
            }),
        }),


        // delete product Api
        deleteOrder: builder.mutation({
            query: ({ id, body }) => ({
                url: `/orders/${id}`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['Order']
        }),

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
    useAddOrderMutation,
    useGetAllOrdersQuery,
    useVerifyOrderQuery,
    useDeleteOrderMutation,
    // useGetSingleBicycleQuery,
    // useDeleteProductMutation,
    // useUpdateProductMutation,
} = orderManagementApi;