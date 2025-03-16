import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.curveWrapper}>
        <Image
          src="/images/Curves wrapper.png"
          alt="Curved Divider"
          width={1440}
          height={32}
          layout="responsive"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src="/images/footerlogo.svg" alt="Beije Logo" width={100} height={40} />
          <h3>Arayı açmayalım!</h3>
          <p>
            beije’deki yeni ürün ve gelişmeleri sana haber verelim & aylık e-gazetemiz döngü’ye abone ol!
          </p>
          <div className={styles.subscription}>
            <input type="email" placeholder="E-mail Adresin" />
            <button>Gönder</button>
          </div>
          <p className={styles.privacy}>
            Abone olarak, beije <Link className={styles.footerkvkk} href="/privacy">KVKK ve Gizlilik Politikası</Link>&apos;nı kabul ediyorum.
          </p>
        </div>

        <div className={styles.center}>
          <div className={styles.linksColumn}>
            <h4>Ürünler</h4>
            <Link href="/">beije Ped</Link>
            <Link href="/">beije Günlük Ped</Link>
            <Link href="/">beije Tampon</Link>
          </div>
          <div className={styles.linksColumn}>
            <h4>Bilgiler</h4>
            <Link href="/about">Biz Kimiz?</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">Sıkça Sorulan Sorular</Link>
            <Link href="/career">Ekibimize Katıl</Link>
          </div>
        </div>

        <div className={styles.right}>
          <h4>Sosyal Medya</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank">
              <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank">
              <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} />
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank">
              <Image src="/images/twitter.svg" alt="Twitter" width={24} height={24} />
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank">
              <Image src="/images/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              LinkedIn
            </a>
            <a href="https://spotify.com" target="_blank">
              <Image src="/images/spotify.svg" alt="Spotify" width={24} height={24} />
              Spotify
            </a>
          </div>
        </div>
      </div>

      <div className={styles.legal}>
        <p>© 2024 Beije. Tüm hakları saklıdır.</p>
        <div>
          <Link href="/kvkk">KVKK</Link>
          <Link href="/terms">Üyelik Sözleşmesi</Link>
          <Link href="/privacy">Gizlilik Politikası</Link>
          <Link href="/cookies">Çerez Politikası</Link>
        </div>
        <div className={styles.paymentIcons}>
          <Image src="/images/2.svg" alt="Mastercard" width={40} height={24} />
          <Image src="/images/Payment Icons.svg" alt="Visa" width={40} height={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
