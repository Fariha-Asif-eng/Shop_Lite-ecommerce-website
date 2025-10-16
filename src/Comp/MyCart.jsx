import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';

function MyCart({ cartItems, setCartItems, darkMode }) {
  const { user, isAuthenticated } = useAuth();
  let navigateTo = useNavigate();

  const upQty = (id, d) => {
    setCartItems((pre) =>
      pre
        .map((i) =>
          i.id === id ? { ...i, qty: Math.max(1, i.qty + d) } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((i) => i.id !== id));
  };

  const handlePlaceOrder = () => {
    if (!isAuthenticated) {
      alert('Please login to place an order');
      window.location.href = '/login';
      return;
    }
    
    alert(`Order placed successfully! Thank you, ${user.name}`);
    setCartItems([]);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (!isAuthenticated) {
    return (
      <div className={`${darkMode ? 'bg-gradient-to-t from-[#3c3f88cb] via-[#0B1059] to-[#3c3f88cb] text-gray-100' : 'bg-gradient-to-br from-blue-200 via-purple-200 to-pink-300 text-gray-500'} min-w-[50%] sm:w-[30%] shadow-lg h-[88vh] mr-2 top-16 rounded-md p-2 right-0 fixed flex flex-col z-101`}>
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold  mb-4">
              Please Login to View Cart
            </h3>
            <p className=" mb-6">
              You need to be logged in to access your shopping cart.
            </p>
            <a 
              href="/login"
              className="bg-[#fd366e] text-white px-6 py-2 rounded-md hover:bg-[#ed366e] transition cursor-pointer"
            >
              Login Now
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={` min-w-[50%] sm:w-[30%] shadow-lg h-[88vh] mr-2 top-16 rounded-md  p-1 md:p-2 right-0 fixed flex flex-col z-101 ${
      darkMode 
        ? 'bg-gradient-to-b  from-[#070F2B] to-[#1B1A55] text-gray-100' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-800'
    }`}>
      {/* User welcome message */}
      <div className={`p-3 rounded-md mb-3 shadow-zinc-500 shadow-2xl
       
        `}>
        <p className="text-sm ">
          Welcome, <span className="font-semibold">{user.name}</span>!
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-1 md:p-4 space-y-3">
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="mb-2">Your cart is empty</p>
            <p className="text-sm">Start shopping to add items!</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className={`${darkMode ? 'bg-[#1b1a55] text-gray-100' : 'bg-gray-200 text-gray-800'} flex gap-1 md:gap-3 items-center shadow-2xl rounded p-1 md:p-2`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 rounded"
              />
              <div className="flex-1 text-sm md:text-lg">
                <h3 className="font-semibold">{item.title}</h3>
                <span>${item.price}</span>
              </div>
              <div className=''>
                <button
              onClick={() => navigateTo(`/itemdetails/${item.id}`)}
              className={` mx-4 text-sm p-[3px] rounded-md cursor-pointer shadow-2xl  transition-all duration-500 bg-[#fd366e] text-white  hover:bg-[#ed366e] font-semibold flex items-center space-x-2 
                `}
            >
              <span>View</span>
              {/* <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg> */}
            </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-2 bg-[#fd366e] rounded cursor-pointer hover:bg-[#ed366e] text-white transition"
                  onClick={() => upQty(item.id, -1)}
                >
                  -
                </button>
                <span>{item.qty < 10 ? `0${item.qty}` : item.qty}</span>
                <button
                  className="px-2 bg-[#fd366e] rounded cursor-pointer hover:bg-[#ed366e] text-white transition"
                  onClick={() => upQty(item.id, 1)}
                >
                  +
                </button>
              </div>
              <button
                className="text-[#fd366e] text-sm ml-2 cursor-pointer hover:text-red-700 transition"
                onClick={() => removeItem(item.id)}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
      <div className="p-4 border-t">
        <div className="flex justify-between mb-3">
          <span className="font-semibold">Total:</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
        <button 
          className={`w-full font-semibold py-2 rounded transition cursor-pointer ${
            cartItems.length === 0 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-500 hover:bg-green-600'
          } text-white`}
          onClick={handlePlaceOrder}
          disabled={cartItems.length === 0}
        >
          {cartItems.length === 0 ? 'Cart is Empty' : 'Place Order'}
        </button>
      </div>
    </div>
  );
}

export default MyCart;