import { useEffect, useState } from "react";
import { Query } from "appwrite";
import { account, DataBases } from "../Auth/Config";

export default function FeedbackPage({ productId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
     await account.get()
      const res = await DataBases.createDocument(
        import.meta.env.VITE_APPWRITE_DB_ID,
        import.meta.env.VITE_APPWRITE_FeedbacksTable,
        [Query.equal("productId", productId)]
      );
      setReviews(res);
    };

    fetchReviews();
  }, [productId]);

  return (
    <div className="product-reviews">
      <h3>Customer Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        reviews.map((r) => (
          <div key={r.$id} className="review">
            <div>{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</div>
            <p>{r.comments}</p>
            <small>{new Date(r.createdAt).toLocaleString()}</small>
            <p>{}</p>
          </div>
        ))
      )}
    </div>
  );
}
