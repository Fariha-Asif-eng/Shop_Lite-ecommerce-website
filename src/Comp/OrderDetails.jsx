import React from 'react';
import { useParams } from 'react-router-dom';
import products from './ProductList';
import { DataBases, VITE_APPWRITE_DB_ID, VITE_APPWRITE_OrderCollection_ID, account } from '../Auth/Config';
import { ID } from 'appwrite';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Toaster, toast } from 'sonner';

function OrderDetails() {
  const { id } = useParams();
  const product = products.find(item => item.id === parseInt(id));

  if (!product) {
    return <div className="p-6 text-center text-red-500">Product not found!</div>;
  }

  const total = product.price + product.deliveryFee;

  // ✅ Validation schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Full name is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10,15}$/, 'Invalid phone number')
      .required('Phone number is required'),
    address: Yup.string()
      .min(10, 'Address is too short')
      .required('Address is required'),
  });

  // ✅ Handle order submission
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const user = await account.get();

      await DataBases.createDocument(
        VITE_APPWRITE_DB_ID,
        VITE_APPWRITE_OrderCollection_ID,
        ID.unique(),
        {
          userId: user.$id,
          productId: product.id,
          quantity: product.qty || 1,
          total: total,
          address: `${values.name}, ${values.phone}, ${values.address}`,
          status: 'pending',
          createdAt: new Date().toISOString(),
        }
      );

      toast.success('Order placed successfully!');
      resetForm();
    } catch (error) {
      console.error('Error saving order:', error);
      toast.error('Failed to place order.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center mt-12 py-8">
      <div className="w-full max-w-4xl bg-white rounded-md shadow-md p-6 space-y-6">
        <Toaster position="top-center" />

        <h2 className="text-xl font-semibold mb-3 text-center">Shipping & Billing</h2>

        {/* ✅ Formik Wrapper */}
        <Formik
          initialValues={{ name: '', phone: '', address: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4">
              {/* Name Field */}
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-0"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Phone Field */}
              <div>
                <Field
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-0"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Address Field */}
              <div>
                <Field
                  as="textarea"
                  name="address"
                  placeholder="Shipping Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-0"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Product Display */}
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
                      <span className="line-through text-gray-400 ml-2 text-sm">
                        Rs. {product.originalPrice}
                      </span>
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
                  className="w-full mt-4 cursor-pointer bg-orange-500 text-white py-2 rounded-md font-medium text-lg hover:bg-orange-600"
                >
                  Proceed to Pay
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default OrderDetails;
