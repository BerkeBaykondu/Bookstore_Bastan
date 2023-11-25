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

Postman Sorgularım:
auth/register => kullanıcı  kaydolur
auth/ login => kullanıcı login olur
auth/google/login -> oauth 2.0 ile kullanıcı giriş yapar ve verisetine girişi kaydedilir.
auth/adminchange -> admin kullanıcının yetkisini değiştirir. isActiveyi true den false, false den true yapar.
admin/register -> admin kayıt olur
admin/login -> admin login yapar
books/add -> admin verisetine kitap ekler.
books/update -> admin kitap infosunu listeler
books/delete -> admin kitap siler
books/paginate -> kitaplar paginate bir biçimde listelenir.
books/comment -> kullanıcı kitaba yorum yazıp puan verir
(puana göre sıralama işlemini yapmadım ama ilerde ekleyebilirim)


