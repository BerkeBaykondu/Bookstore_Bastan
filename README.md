#Proje hakkındaki deneyimlerim :

Yapılanlar ve Öğrenilenler
Bu projede, birçok teknik konuda deneyim kazandım ve öğrendim. İşte bazı başlıklar:

Docker Kullanımı: Projeyi Docker ile çalıştırmak beni zorladı, ancak bu süreçte Docker'ın gücünü ve avantajlarını anladım. mongodb:// localhost ile mongodb://mongodb arasındaki farkı çok daha iyi anladım.

Pagination: Sayfalama işlemleri kolayca uygulanabildi ve kullanıcı deneyimini artırmak için önemliydi.

JWT (JSON Web Token): JWT kullanarak, güvenli bir kimlik doğrulama ve yetkilendirme sistemi oluşturmayı öğrendim. Middleware kullanımı başta düşünüldü, ancak gerekli olmadığını fark ettim.

Şema Oluşturma: Veritabanı şemalarını oluşturmak oldukça kolaydı ve projenin temelini sağladı.

Google OAuth: Kullanıcıları Google hesaplarıyla doğrulamak için Google OAuth entegrasyonunu başarıyla tamamladım.

Refresh Token ve Access Token: OAuth kullanırken refresh token ve access token konseptini anlamak, güvenlik açısından önemliydi.

Bcrypt: Şifreleme için bcrypt kullanarak, kullanıcı şifrelerini güvenli bir şekilde saklamak çok tercih edilmesi gereken bir yöntem

Proje Özeti:

Proje kullanıcıların kitaplar hakkında yorum yapıp puanlayabildiği ve adminlerin kullanıcı yetkisini değiştirebildiği bir uygulama ( hafif yarıda kaldı).

## Postman Sorguları

### Kullanıcı İşlemleri

- **Kullanıcı Kaydı (Register):**
  - **Endpoint:** `/auth/register`
  - **Açıklama:** Kullanıcı, bu endpoint üzerinden kayıt olabilir.

- **Kullanıcı Girişi (Login):**
  - **Endpoint:** `/auth/login`
  - **Açıklama:** Kullanıcı, bu endpoint üzerinden giriş yapabilir.

- **Google OAuth ile Kullanıcı Girişi:**
  - **Endpoint:** `/auth/google/login`
  - **Açıklama:** OAuth 2.0 protokolü kullanılarak Google hesabı ile kullanıcı girişi sağlanır ve veritabanına kaydedilir.

- **Admin Yetkisi Değiştirme:**
  - **Endpoint:** `/auth/adminchange`
  - **Açıklama:** Admin, bu endpoint ile kullanıcının yetkisini değiştirebilir. `isActive` değeri true'dan false'a veya false'dan true'ya çevrilebilir.

### Admin İşlemleri

- **Admin Kaydı:**
  - **Endpoint:** `/admin/register`
  - **Açıklama:** Admin, bu endpoint üzerinden kayıt olabilir.

- **Admin Girişi:**
  - **Endpoint:** `/admin/login`
  - **Açıklama:** Admin, bu endpoint üzerinden giriş yapabilir.

### Kitap İşlemleri

- **Kitap Ekleme:**
  - **Endpoint:** `/books/add`
  - **Açıklama:** Admin, bu endpoint ile veritabanına yeni bir kitap ekleyebilir.

- **Kitap Bilgisi Güncelleme:**
  - **Endpoint:** `/books/update`
  - **Açıklama:** Admin, bu endpoint ile mevcut kitap bilgilerini güncelleyebilir.

- **Kitap Silme:**
  - **Endpoint:** `/books/delete`
  - **Açıklama:** Admin, bu endpoint ile bir kitabı veritabanından silebilir.

- **Sayfalı Kitap Listesi:**
  - **Endpoint:** `/books/paginate`
  - **Açıklama:** Kitaplar sayfalı bir şekilde listelenir. Bunu jwt yetkisi olmasada herkes görebilir (Puana göre sıralama işlemi şu an için yapılmamıştır, ilerleyen süreçte eklenebilir.)

- **Kitap Yorum ve Puanlama:**
  - **Endpoint:** `/books/comment`
  - **Açıklama:** Kullanıcı, bu endpoint ile bir kitaba yorum yazabilir ve puan verebilir.


