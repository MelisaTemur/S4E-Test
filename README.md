# S4E Free Security Tools Test Otomasyonu

Bu proje, https://s4e.io/free-security-tools sayfasının fonksiyonel ve edge case testlerini Playwright kullanarak otomatikleştirmek için hazırlanmıştır.

## Gereksinimler

- Node.js (v16+)
- NPM

## Kurulum

```bash
git clone https://github.com/kullanici/s4e-tests.git
cd s4e-tests
npm install
npx playwright install
 s4e-tests Projesi

Bu proje, **S4E** adlı güvenlik aracının çeşitli işlevlerini test etmek için **Playwright** kullanarak yazılmıştır. Playwright, modern web uygulamaları üzerinde otomatik testler yazmak için güçlü bir araçtır. Bu testler, uygulamanın işlevselliğini doğrulamak ve olası hata durumlarını tespit etmek için kullanılır.

Projede Bulunan Dosyalar:

# **1. `tests` Klasörü:**

Projenin ana test dosyalarını içerir. Bu dosyalar Playwright kullanılarak yazılmıştır ve üç ana test dosyasına sahiptir:

*`edge-cases.spec.ts`**: Bu dosya, uygulamanın bazı özel ve kenar (edge) durumlarını test eder. Testler, geçersiz sayfa URL'leri, ağ bağlantısı kesildiğinde alınan hata mesajları gibi durumları içerir.

*`homepage.spec.ts`**: Bu dosya, uygulamanın ana sayfasındaki başlık ve butonların görünürlüğünü kontrol eder. "Full Scan" butonunun görünür olup olmadığını ve sayfa başlığının doğruluğunu test eder.

*`scan.spec.ts`**: Bu dosya, kullanıcıların "scan" işlemini başlattıklarında doğru sayfaya yönlendirilip yönlendirilmediklerini ve doğru IP adresi bilgisi alınıp alınmadığını kontrol eder. Ayrıca, sayfanın 200 statü koduyla başarılı şekilde yüklendiğinden emin olur.

# 2.`playwright.config.ts`:

Bu dosya, tüm testler için ortak ayarları içerir. Örneğin:

* Test dizini, zaman aşımı süreleri ve kullanılan tarayıcılar gibi global ayarları belirler.
* Farklı tarayıcılarda (Chromium, Firefox, Safari) testlerin çalıştırılması sağlanır.
* Test sonuçlarını HTML formatında raporlar.

# 3. `package.json`:

Bu dosya, projenin bağımlılıklarını ve kullanılan npm komutlarını içerir. Playwright bağımlılığı ve testlerin başlatılması için gerekli scriptler burada yer alır. Aşağıda bulunan komutlar ile testler başlatılabilir:

* `npm test`: Testlerin başlatılmasını sağlar.
* `npm run test:headed`: Testleri başlatırken tarayıcıyı görünür şekilde çalıştırır.
* `npm run test:report`: Test sonuçlarını HTML rapor formatında gösterir.

# 4. `.gitignore`:

Bu dosya, Git'e dahil edilmemesi gereken dosya ve klasörleri belirtir. Aşağıdaki dosyalar ve klasörler `.gitignore` dosyasında yer alır:

* `node_modules/`: Projede kullanılan bağımlılıkları içerir, bu klasör genellikle her ortamda yeniden oluşturulabilir.
* `playwright-report/`, `test-results/`: Test sonuçları ve raporları içeren klasörler.
* `.env`: Çevresel dosyalar, genellikle gizli bilgiler içerir.
* IDE'ye özgü dosyalar (örneğin, `.vscode/`, `.idea/`).
* Platforma özel dosyalar (örneğin, `.DS_Store` veya `Thumbs.db`).

# 5. `README.md`:

Projenin kullanımına dair bilgi sağlayan dosyadır. Bu dosya, projeyi nasıl başlatacağınız ve testleri nasıl çalıştıracağınız hakkında adım adım yönergeler içerir.

# Projeyi Çalıştırmak İçin Adımlar:

1. Bağımlılıkları Yükleyin:

   ```bash
   npm install
   ```

2. Testleri Çalıştırın (Çoklu):

   ```bash
   npm test
   ```

   Testlerin başlatılmasıyla birlikte Playwright, farklı tarayıcılarda belirtilen testleri çalıştıracaktır. Test sonuçları, terminalde görüntülenebilir.

3. Test Raporlarını Görüntüleyin:
   Test sonuçlarını HTML formatında görmek için:

   ```bash
   npm run test:report
   ```

4. Başka Tarayıcılarda Test Çalıştırma:
   Tarayıcıları değiştirmek için `playwright.config.ts` dosyasındaki `projects` bölümünde belirtilen tarayıcılardan birini seçebilirsiniz.



Bu proje, S4E güvenlik aracının çeşitli testlerini otomatikleştirmenize olanak tanır ve uygulamanın doğru çalıştığını doğrulamak için hızlı ve verimli bir yol sunar. Testler, olası fonksiyonel durumlar ,edge cases, ağ kesintileri ve hatalı sayfa yönlendirmeleri gibi durumları kapsamaktadır.
