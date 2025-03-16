import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { verifyPacket } from "../store/slices/productsSlice";
import { useState } from "react";
import styles from "../styles/CartSummary.module.scss";
import SuccessMessage from "./SuccessMessage";
 
const CartSummary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cart, totalPrice } = useSelector((state: RootState) => state.products);
  const token = useSelector((state: RootState) => state.auth.token) || "";
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Sepetiniz boş!");
      return;
    }

    setLoading(true);
    try {
      await dispatch(verifyPacket({ 
        packet: cart.map(({ _id, count }) => ({ _id, count })), 
        totalPrice, 
        token 
      })).unwrap();
      
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className={styles.cartSummary}>
      <h2>Paketin</h2>
      <p>Kişisel ihtiyacına yönelik istediğin miktarda ped, günlük ped, tampon veya destekleyici ürünler ekleyerek kendine özel paket oluşturabilirsin.</p>
      {cart.length === 0 ? (
        <p className={styles.emptyCart}>Sepetiniz boş</p>
      ) : (
        <ul className={styles.cartList}>
          {cart.map((item) => (
            <li key={item._id} className={styles.cartItem}>
              <span>{item.name} x {item.count}</span>
              <span>{item.price * item.count}₺</span>
            </li>
          ))}
        </ul>
      )}

      <button 
        className={styles.cartButton} 
        onClick={handleCheckout} 
        disabled={loading}
      >
        {loading ? "Processing..." : `Add to cart ${totalPrice}₺`}
      </button>

      <SuccessMessage message="Your order has been received successfully !" show={showSuccess} />
    </div>
  );
};

export default CartSummary;
