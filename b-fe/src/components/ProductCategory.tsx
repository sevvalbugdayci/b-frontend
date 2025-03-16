import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ProductItem from "./ProductItem";
import styles from "../styles/ProductCategory.module.scss";

const ProductCategory = ({ category }: { category: "Menstrual" | "Other" }) => {
  const { products } = useSelector((state: RootState) => state.products);

  const filteredProducts = products.filter((product) => product.type === category);

  return (
    <div className={styles.productCategory}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => <ProductItem key={product._id} product={product} />)
      ) : (
        <p>Bu kategoride ürün bulunamadı.</p>
      )}
    </div>
  );
};

export default ProductCategory;