import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Header.module.scss";
import classNames from "classnames"
import { useState } from "react";
import { RootState } from "../store/store";
import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';     

import useMediaQuery from "../hooks/useMediaQuery";

const Header = () => {

  const isMobile = useMediaQuery("(max-width: 1024px");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
 const cartCount = useSelector((state: RootState) =>
    state.products.cart.reduce((total, item) => total + item.count, 0)
  );

  const showBadge = useMemo(() => cartCount > 0, [cartCount]);

  const handleMouseEnter = () => setMenuOpen(true);
  const handleMouseLeave = () => setMenuOpen(false);

  

  return (
    <header className={styles.header}>
      <nav className={classNames({
          [styles.navbar]: true,
          [styles.mobileNavbar]: isMobile,
          
        })}>
        {!isMobile && (
          <>
          <div className={styles.logo}>
          <Image src="/images/Logo.svg" alt="Beije Logo" width={56.39} height={24} />
          </div>
          <div className={styles.navLinks}>
          <div className={styles.dropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link href="/packets">Ürünler</Link>
            <AnimatePresence>
            {isMenuOpen && <Menu isMobileMenuOpen={false} setMobileMenuOpen={() => {}} />}

            </AnimatePresence>
            
            </div>
            <Link href="/about">Biz Kimiz?</Link>
            <Link href="/donation">Bağış Kültürü</Link>
            <Link href="/test">Regl Testi!</Link>
            <Link href="/custom-package">Kendi Paketini Oluştur</Link>
          </div>

          <div className={styles.leftIcons}>
            <div className={styles.cartIcon}>
              <Image src="/images/CartButton.svg" width={24} height={24} alt="cart" />
              {showBadge && <span className={styles.badge}>{cartCount}</span>}
            </div>
            <Image src="/images/ProfileButton.svg" width={24} height={24} alt="user" />
          </div>
          </>
        )}
        {isMobile && (
          <div className={styles.mobileHeader}>
            <div className={styles.logo}>
              <Image src="/images/Logo.svg" alt="Beije Logo" width={56.39} height={24} />
            </div>
            <div className={styles.mobileIcon}>
              <Image src="/images/CartButton.svg" width={24} height={24} alt="cart" />
              <Image src="/images/ProfileButton.svg" width={24} height={24} alt="user" />
              
              <button className={styles.menuButton} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <CloseIcon className={styles.closeIcon} /> : <MenuIcon className={styles.MenuIcon} />}
              </button>
            </div>
          </div>
        )}
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && <Menu isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />}
      </AnimatePresence>
      
    </header>
  );
};

export default Header;