import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Menu.module.scss";
import useMediaQuery from "../hooks/useMediaQuery";
import { products, packages, menuItems } from "../constants/menuData";
interface MenuProps {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}
const Menu :React.FC<MenuProps> = ({ isMobileMenuOpen }) => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [currentMenu, setCurrentMenu] = useState("main");

  return (
    <>
      {!isMobile && (
        <motion.div
          className={styles.subMenu}
          initial={{ opacity: 0, scaleY: 0.2 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0.2 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        >
          <div>
            <h3 className={styles.subMenuHeader}>Ürünler</h3>
            <div className={styles.submenuItem}>
              {products.map((product, index) => (
                <Link key={index} href={product.link} className={styles.subMenuItem}>
                  <Image src={product.image} alt={product.title} width={172} height={135} />
                  <div className={styles.product}>
                    <div className={styles.title}>
                      <Image src={product.icon1} alt={`${product.title} icon 1`} width={20} height={20} />
                      <h4>{product.title}</h4>
                    </div>
                    <Image src={product.icon2} alt={`${product.title} icon 2`} width={6} height={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.packageLinks}>
              <h3 className={styles.subMenuHeader}>Paketler</h3>
              <Link className={styles.packages} href="/packets">
                Tüm Paketler <Image src="/images/arrow-right.svg" alt="" width={20} height={20} />
              </Link>
            </div>
            <div className={styles.submenuItem}>
              {packages.map((packet, index) => (
                <Link key={index} href={packet.link} className={styles.subMenuItem}>
                  <Image src={packet.image} alt={packet.title} width={211} height={135} />
                  <div className={styles.product}>
                    <div className={styles.title}>
                      <Image src={packet.icon1} alt={`${packet.title} icon 1`} width={20} height={20} />
                      <h4>{packet.title}</h4>
                    </div>
                    <Image src={packet.icon2} alt={`${packet.title} icon 2`} width={6} height={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}

<AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          className={styles.mobileMenu}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.menuHeader}>
            {currentMenu !== "main" && (
              <button className={styles.backButton} onClick={() => setCurrentMenu("main")}>
                ← Geri
              </button>
            )}
          </div>

          <ul className={styles.menuList}>
            {currentMenu === "main"
              ? menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={styles.menuItem}
                    onClick={() => item.hasSubMenu && setCurrentMenu("submenu")}
                  >
                    {item.title}
                    {item.icon1 && (
                        <Image src={item.icon1} alt={`${item.title} icon`} width={16} height={16} />
                      )}
                  </li>
                ))
              : products.map((product, index) => (
                  <li key={index} className={styles.menuItem}>
                    {product.title}
                  </li>
                ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Menu;
