/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam, TResponseRedux } from "@/types/global";
import { TBicycle } from "@/types/productsManagment";


const productManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // Get All Bicycle
        getAllProducts: builder.query({
            query: (args) => {
                // console.log(args);
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string);
                    });
                }

                return {
                    url: '/bicycle',
                    // url: '/bicycle',
                    method: 'GET',
                    params: params,
                };
            },
            providesTags: ['Bicycle'],
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
                };
            },
        }),

        // create Product API
        addProduct: builder.mutation({
            query: (data) => ({
                url: '/bicycle/create-bicycle',
                method: 'POST',
                body: data,
            }),
        }),

        // delete product Api
        deleteProduct: builder.mutation({
            query: ({ id, body }) => ({
                url: `/bicycle/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Bicycle']
        }),

        // Update Product
        updateProduct: builder.mutation({
            query: ({ bicycleId, body }) => ({
                url: `/bicycle/${bicycleId}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Bicycle']
        }),

    }),
});

export const {
    useAddProductMutation,
    useGetAllProductsQuery,
    useGetSingleBicycleQuery,
    useDeleteProductMutation,
    useUpdateProductMutation,
} = productManagementApi;