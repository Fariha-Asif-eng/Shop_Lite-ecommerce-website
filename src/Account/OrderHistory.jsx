import React, { useEffect, useState } from 'react';
import { DataBases, account } from '../Auth/Config';
import { Query } from 'appwrite';
import { Toaster, toast } from 'sonner';

const databaseId = import.meta.env.VITE_APPWRITE_DB_ID;
const collectionId = import.meta.env.VITE_APPWRITE_OrderCollection_ID;

function OrderList({isDark}) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = await account.get(); // current logged-in user
        const response = await DataBases.listDocuments(
          databaseId,
          collectionId,
          [
            Query.equal('userId', parseInt(user?.$id)),    // fetch only their orders
            Query.orderDesc('$createdAt'),     // latest first
          ]
        );
        setOrders(response.documents);
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error('Failed to load your order history');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading your orders...</p>;

  if (orders.length === 0)
    return <p className="text-center mt-10 text-gray-500">No orders found.</p>;

  return (
    <div className={`bg-transparent max-w-3xl mx-auto mt-10 shadow-md rounded-md p-6`}>
      <Toaster position="top-center" />
      <ul className="divide-y divide-gray-200">
        {orders.map((order) => (
          <li key={order.$id} className="py-3 flex justify-between items-center">
            <div>
              <p className="font-medium">Order ID: {order.$id}</p>
              <p className="text-sm text-gray-500">
                Date: {new Date(order.$createdAt).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">
                Quantity: {order.quantity} | Total: Rs. {order.total}
              </p>
              <p
                className={`text-sm font-semibold ${
                  order.status === 'pending'
                    ? 'text-yellow-600'
                    : order.status === 'completed'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                Status: {order.status}
              </p>
            </div>
            <button className="px-3 py-1 text-sm bg-orange-500 text-white rounded hover:bg-orange-600">
              View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
