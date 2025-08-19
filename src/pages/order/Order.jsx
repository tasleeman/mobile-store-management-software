import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid;
  const context = useContext(myContext);
  const { mode, loading, order } = context;

  const sortedorder = order
    .slice() // Create a copy of the original array to avoid mutation
    .filter(obj => obj.userid === userid)
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort order based on date in descending order

  return (
    <Layout>
      {loading && <Loader />}
      <div className="h-full pt-10">
        <div className="max-w-3xl mx-auto">
          {sortedorder.length > 0 ? (
            sortedorder.map((allorder, index) => (
              <div key={index} className="mb-8 bg-gray-100 rounded-lg p-4">
                  <h2 className="text-2xl text-center mb-4">Order ID: {allorder.paymentId}</h2>
                  <div className="mb-4">
                    <p>Date: {allorder.date}</p>
                    <p>User Name: {allorder.addressInfo.name}</p>
                    <p>Address: {allorder.addressInfo.address}</p>
                    <p>Pincode: {allorder.addressInfo.pincode}</p>
                    <p>Phone Number: {allorder.addressInfo.phoneNumber}</p>
                    <p>Email: {allorder.email}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {allorder.cartItems.map((item, i) => (
                      <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                          src={item.imageUrl}
                          alt="product-image"
                          className="w-32 h-32 object-contain"
                          style={{ minWidth: '8rem', maxWidth: '8rem' }}
                        />
                        <div className="p-4">
                          <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                          <h3 className="mt-1 text-xs text-gray-700">{item.brand}</h3>
                          <p className="mt-1 text-xs text-gray-700">{item.description}</p>
                          <p className="mt-1 text-xs text-gray-700">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            ))
          ) : (
            <h2 className="text-center text-2xl text-white">No order</h2>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Order;