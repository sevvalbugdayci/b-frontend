import { useState } from "react";
import SubProductItem from "./SubProductItem";
import Image from "next/image";
import styles from "../styles/ProductItem.module.scss";
import { motion } from "framer-motion";
import { Product } from "../types/productsTypes";
import { productIcons } from "../types/productIcons";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const iconSrc = productIcons[product.title] || "/images/frame.svg";

  return (
    <div className={styles.productItem}>
      <button className={styles.productButton} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.productIcons}>
          <Image src={iconSrc} alt={product.title} width={32} height={32} />
        <span>{product.title}</span>
        </div>
       
        <span>{isOpen ? <Image src="/images/chevron-down.svg" width={32} height={32} alt=""/> : <Image src="/images/chevron-up.svg" width={32} height={32}  alt=""/>}</span>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={styles.subProducts}
      >
        {product.subProducts.map((subProduct) => (
          <SubProductItem key={subProduct._id} subProduct={subProduct} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProductItem;