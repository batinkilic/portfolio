# Sitenizi GitHub'da Yayınlama Kılavuzu

Siteniz şu an yerel bilgisayarınızda hazır. Bunu internette yayınlamak (GitHub Pages) için şu adımları izleyin:

## 1. GitHub Deposu (Repository) Oluşturma
1. [GitHub.com](https://github.com) adresine gidin ve giriş yapın.
2. Sağ üstteki **+** ikonuna tıklayıp **"New repository"** deyin.
3. **Repository name** kısmına bir isim verin (örneğin: `portfolio` veya `adiniz-portfolio`).
4. **Public** seçeneğinin işaretli olduğundan emin olun.
5. "Add a README file" vb. kutucukları **işaretlemeyin** (zaten projemizde var).
6. **"Create repository"** butonuna basın.

## 2. Kodu GitHub'a Gönderme
Repo oluşturulduktan sonra size bazı kodlar verecek. Aşağıdaki komutları **Terminal** uygulamasında sırasıyla yapıştırıp çalıştırın (Terminal'in şu an proje klasöründe olduğundan emin olun):

```bash
# Ana dalın (branch) ismini 'main' olarak ayarlayın
git branch -M main

# Projenizi GitHub deposuna bağlayın 
# (NOT: Aşağıdaki 'KULLANICI_ADINIZ' ve 'REPO_ADINIZ' kısımlarını kendi bilgilerinizle değiştirin!)
git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADINIZ.git

# Kodları gönderin
git push -u origin main
```

> **İpucu:** GitHub size `https://github.com/...` ile başlayan bir link verecektir. `git remote add...` satırı için o linki kullanın.

## 3. GitHub Pages'i Açma
1. Kodları gönderdikten sonra GitHub'daki depo sayfanıza geri dönün.
2. Üst menüden **Settings** (Ayarlar) sekmesine tıklayın.
3. Sol menüden **Pages** kısmına tıklayın.
4. **Build and deployment** altında **Source** kısmını `Deploy from a branch` olarak seçin.
5. **Branch** kısmında `main` seçin ve yanındaki klasör kısmını `/(root)` olarak bırakın.
6. **Save** butonuna basın.

Birkaç dakika içinde siteniz `https://kullaniciadiniz.github.io/repo-adiniz/` adresinde yayına girecektir!
