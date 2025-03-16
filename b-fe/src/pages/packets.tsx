import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productsSlice";
import type { AppDispatch, RootState } from "../store/store";
import ProductCategory from "../components/ProductCategory";
import CartSummary from "../components/CartSummary";
import styles from "../styles/PacketsPage.module.scss";

const PacketsPage = () => {
  const [activeTab, setActiveTab] = useState("Menstrual");
  const dispatch = useDispatch<AppDispatch>();
  const { status, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div className={styles.container}>
      <div className={styles.productsContainer}>
        <h1>Kendi Paketini Oluştur</h1>
        <p>Döngünüzün uzunluğuna, kanamanızın yoğunluğuna ve kullanmak istediğiniz ürünlere göre tamamen kendinize özel bir paket oluşturabilirsiniz.</p>

        <div className={styles.tabs}>
          <button
            className={activeTab === "Menstrual" ? styles.active : ""}
            onClick={() => setActiveTab("Menstrual")}
          >
            Menstrual Ürünler
          </button>
          <button
            className={activeTab === "Other" ? styles.active : ""}
            onClick={() => setActiveTab("Other")}
          >
            Destekleyici Ürünler
          </button>
        </div>

        {status === "loading" && <p>Yükleniyor...</p>}
        {status === "failed" && <p>Hata: {error}</p>}
        {status === "succeeded" && (
          activeTab === "Menstrual" ? (
            <ProductCategory category="Menstrual" />
          ) : (
            <ProductCategory category="Other" />
          )
        )}
      </div>
      <CartSummary />
    </div>
  );
};

export default PacketsPage;
