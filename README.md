

# b-frontend
 Proje Tanımı
Bu proje, Redux Toolkit ve Redux Thunk kullanarak bir e-ticaret sepeti uygulamasıdır. Kullanıcılar kategoriler arasından seçim yaparak kendi paketlerini oluşturabilirler. Eklenen ürünlerin tutarları hesaplanır ve paket doğrulama işlemi yapılır.

- Kullanılan Teknolojiler
Next.js 15.2.2 (Frontend Framework)
React 19.0.0 (UI Kütüphanesi)
Redux Toolkit (State Yönetimi)
Redux Thunk (Asenkron İşlemler)
MSW (Mock Service Worker) (Testlerde API Çağrılarını Simüle Etmek İçin)
Jest & React Testing Library (Test Yazımı)
TypeScript (Tip Güvenliği)
SCSS & TailwindCSS (Stil Yönetimi)
Axios (HTTP İstekleri)



- ## API Entegrasyonu
| **İstek Türü** | **Endpoint** | **Açıklama** |
|--------------|------------|--------------|
| `POST` | `/sign-in-request` | Kullanıcı giriş isteği |
| `GET` | `/profile` | Kullanıcı profili getirir |
| `GET` | `/packets-and-products` | Ürünleri ve paketleri çeker |
| `POST` | `/verify-packet-price` | Sepet içeriğini doğrular |

---

## Kurulum & Çalıştırma

Projeyi klonladıktan sonra:
```sh
git clone https://github.com/kullanici-adi/beije-frontend.git
cd beije-frontend
npm install
