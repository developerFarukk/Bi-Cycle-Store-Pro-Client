/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllOrdersQuery } from "@/redux/features/orderManagmentApi/OrderManagmentApi";

export interface Transaction {
  id: string;
  transactionStatus: string | null;
  bank_status: string;
  date_time: string;
  method: string;
  sp_code: string;
  sp_message: string;
}

export interface Product {
  product: string;
  quantity: number;
  _id: string;
}

export interface Order {
  transaction: Transaction;
  _id: string;
  user: string;
  products: Product[];
  totalPrice: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function OrderDetails() {
  const { isLoading, data } = useGetAllOrdersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const orderData: Order[] = data?.data;
  

  return isLoading ? (
    <Skeleton />
  ) : (
    <div className="mx-auto p-10 columns-1 divide-y divide-x">
      {orderData?.result.map((order: any) => (
        <div className="grid grid-cols-2 gap-4" key={order._id}>
          <div>
            <h3 className="font-semibold">Customer Information</h3>
            <p>User ID: {order?.user?._id}</p>
            <p>Order Date: {new Date(order?.createdAt).toLocaleString()}</p>
            <p>Last Updated: {new Date(order?.updatedAt).toLocaleString()}</p>
          </div>
          <div>
            <h3 className="font-semibold">Order Summary</h3>
            <p>Total Price: ${order?.totalPrice?.toFixed(2)}</p>
            <p>
              Status:{" "}
              <Badge
                variant={order?.status === "Pending" ? "outline" : "default"}
              >
                {order?.status}
              </Badge>
            </p>
          </div>
          <div className="">
            <h3 className="font-semibold">Products</h3>
            <ul>
              {order?.products?.map((product: any, i: any) => (
                <li key={i}>
                  Product ID: {product?.product}, Quantity: {product?.quantity}
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="font-semibold">Transaction Details</h3>
            <p>Transaction ID: {order?.transaction?.id}</p>
            <p>Payment Method: {order?.transaction?.method}</p>
            <p>Transaction Date: {order?.transaction?.date_time}</p>
            <p>Transaction Status: {order?.transaction?.bank_status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
