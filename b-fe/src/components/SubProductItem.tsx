import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/productsSlice";
import { useState } from "react";
import styles from "../styles/SubProductItem.module.scss";
import { productIcons } from "../types/productIcons";
import Image from "next/image";

interface SubProduct {
  _id: string;
  name: string;
  price: number;
}

const SubProductItem = ({ subProduct }: { subProduct: SubProduct }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0); 
  const iconSrc = productIcons[subProduct.name] || "/images/frame.svg";

  const handleIncrease = () => {
    setCount(count + 1);
    dispatch(addToCart({ 
      _id: subProduct._id,
      name: subProduct.name,
      price: subProduct.price, 
      count: 1 
    }));
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
      dispatch(addToCart({ 
        _id: subProduct._id,  
        name: subProduct.name, 
        price: subProduct.price, 
        count: -1 
      }));
    }
  };

  return (
    <div className={styles.subProductItem}>
      <div className={styles.productIcons}>
        <Image src={iconSrc} alt={subProduct.name} width={52} height={52} unoptimized/>
      <span>{subProduct.name}</span>
      </div>
      
      <div>
      <button onClick={handleDecrease}><Image src="/images/minus.svg" alt="" width={24} height={24}/></button>
      <span>{count}</span>
      <button onClick={handleIncrease}><Image src="/images/plus.svg" alt="" width={24} height={24}/></button>
      </div>
      
    </div>
  );
};

export default SubProductItem;
