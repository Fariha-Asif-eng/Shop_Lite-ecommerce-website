import { DataBases, VITE_APPWRITE_OrderCollection_ID, VITE_APPWRITE_DB_ID, account } from '../Auth/Config';
import { ID } from 'appwrite';

// const DATABASE_ID = 'your_database_id';
// const COLLECTION_ID = 'orders';

async function handlePlaceOrder(product, total, address) {
  try {
    const user = await account.get(); // Get logged-in user info

    const order = await DataBases.createDocument(
      VITE_APPWRITE_DB_ID,
      VITE_APPWRITE_OrderCollection_ID,
      ID.unique(),
      {
        userId: user.$id,
        productId: product.id,
        quantity: product.qty || 1,
        total: total,
        address: `${address.name}, ${address.phone}, ${address.address}`,
        status: 'pending',
        createdAt: new Date().toISOString(),
      }
    );

    console.log(' Order saved:', order);
    alert('Order placed successfully!');
  } catch (error) {
    console.error('Error saving order:', error);
    alert('Failed to place order.');
  }
}
