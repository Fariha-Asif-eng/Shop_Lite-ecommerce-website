// src/Account/OrderHistory.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../Comp/ProductList';
import {
  DataBases,
  account,
  VITE_APPWRITE_DB_ID,
  VITE_APPWRITE_OrderCollection_ID,
} from '../Auth/Config';
import { ID, Permission, Role } from 'appwrite';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Toaster, toast } from 'sonner';

function OrderHistory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className=" flex items-center justify-center">
        <div className="text-center p-6">
          <h2 className="text-xl font-semibold mb-2">Order not found!</h2>
          <p className="text-gray-500">Please go back and place an order.</p>
        </div>
      </div>
    );
  }

  const total = (product.price || 0) + (product.deliveryFee || 0);

  const validationSchema = Yup.object({
    name: Yup.string().required('Full name is required'),
    phone: Yup.string()
      .matches(/^[0-9]{7,15}$/, 'Invalid phone number')
      .required('Phone number is required'),
    address: Yup.string().min(5, 'Address is too short').required('Address is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      
      const user = await account.get();

      const orderId = `ORD-${Date.now()}`;

      await DataBases.createDocument(
        VITE_APPWRITE_DB_ID,
        VITE_APPWRITE_OrderCollection_ID,
        ID.unique(),
        {
          orderId,
          userId: user.$id,
          productId: product.id,
          orderDate: new Date().toISOString(),
          quantity: product.qty || 1,
          totalPrice: total,
          status: 'pending',
        },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );

      toast.success('Order placed successfully!');
      resetForm();
      navigate('/profilepage'); 
    } catch (error) {
      console.error('Error saving order:', error);
     
      if (error?.message?.toLowerCase?.().includes('unauthorized') || error?.code === 401) {
        toast.error('You must be logged in to place an order.');
        navigate('/login');
      } else {
        toast.error('Failed to place order. Try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center mt-12 py-8">
      <Toaster position="top-center" />
      <div className="w-full max-w-4xl bg-white rounded-md shadow-md p-6 space-y-6">
        <h2 className="text-xl font-semibold mb-3 text-center">Shipping & Billing</h2>

        <Formik
          initialValues={{ name: '', phone: '', address: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-0"
                  required
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Field
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-0"
                  required
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Field
                  as="textarea"
                  name="address"
                  placeholder="Shipping Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-0"
                  required
                />
                <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Product Summary */}
              <div className="border border-gray-300 p-4 rounded-md flex items-start space-x-4">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex flex-col justify-between">
                  <p className="text-sm font-medium">{product.title}</p>
                  <div>
                    <span className="text-orange-600 font-semibold text-lg">Rs. {product.price}</span>
                    {product.originalPrice && (
                      <span className="line-through text-gray-400 ml-2 text-sm">Rs. {product.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">Qty: {product.qty || 1}</p>
                </div>
              </div>

              {/* Order Summary */}
              <div className="border border-gray-300 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
                <div className="flex justify-between mb-1">
                  <span>Item Total</span>
                  <span>Rs. {product.price}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Delivery Fee</span>
                  <span>Rs. {product.deliveryFee}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>Rs. {total}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full mt-4 cursor-pointer py-2 rounded-md font-medium text-lg ${
                    isSubmitting ? 'bg-orange-300 text-white' : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}
                >
                  {isSubmitting ? 'Processing...' : 'Proceed to Pay'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default OrderHistory