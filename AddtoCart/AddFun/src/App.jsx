import React, { useState } from 'react'
import BOx from './Parts/BOx'
import Cart from './Parts/Cart'

function App() {

  const [cartItems, setCartItems] = useState([])

  // ✅ Fixed: prevent duplicates, handle quantity directly here
  const onAddBtn = (item) => {
    setCartItems((items) => {
      const exists = items.find((it) => it.id === item.id);
      if (exists) {
        return items.map((it) =>
          it.id === item.id ? { ...it, qty: it.qty + 1 } : it
        );
      }
      return [...items, { ...item, qty: 1 }];
    });
  };

  // ✅ Updated: remove item by id
  const removeItem = (id) => {
    setCartItems((items) => items.filter((it) => it.id !== id));
  };

  // ✅ New: update item quantity
  const updateQty = (id, delta) => {
    setCartItems((items) =>
      items.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it
      )
    );
  };

  return (
    <div className="flex justify-center gap-2 items-center bg-gray-800 w-full min-h-screen">
      <BOx clickAddBtn={onAddBtn} />
      <Cart productListItems={cartItems} removeBtn={removeItem} updateQty={updateQty} />
    </div>
  )
}

export default App
