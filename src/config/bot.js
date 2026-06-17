import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT DURUMU (kullanıcıların bot adının altında gördüğü kısım)
  // =========================
  // `status` seçenekleri:
  // - "online"    = yeşil nokta
  // - "idle"      = sarı ay
  // - "dnd"       = kırmızı rahatsız etmeyin
  // - "invisible" = çevrimdışı (görünmez) görünür
  presence: {
    // Discord üzerinde gösterilen mevcut çevrimiçi durumu.
    status: "online",

    // Bot adının altında gösterilen etkinlik satırları.
    // Discord'dan alınan `type` numara eşlemesi:
    // 0 = Oynuyor
    // 1 = Yayınlıyor
    // 2 = Dinliyor
    // 3 = İzliyor
    // 4 = Özel
    // 5 = Yarışıyor
    activities: [
      {
        // Kullanıcıların göreceği metin (örnek: "/help Oynuyor | Titan Bot").
        name: "motoaki ile yapıldı",
        // Etkinlik türü numarası (0 = Oynuyor).
        type: 2,
      },
    ],
  },

  // =========================
  // KOMUT DAVRANIŞI
  // =========================
  commands: {
    // Bot sahibi kullanıcı ID'leri (OWNER_IDS ortam değişkeninde virgülle ayrılmış olmalı).
    // Sahipler, sahip/yönetici düzeyindeki bot komutlarına erişebilir.
    owners: process.env.OWNER_IDS?.split(",") || [],

    // Komut kullanımları arasındaki varsayılan bekleme süresi (saniye cinsinden).
    defaultCooldown: 3,

    // Doğruysa (true), eski komutlar yeniden kaydedilmeden önce kaldırılır.
    deleteCommands: false,

    // Eğik çizgi (slash) komutlarını hızlıca test etmek için kullanılan isteğe bağlı sunucu ID'si.
    testGuildId: process.env.TEST_GUILD_ID,

    // Metin tabanlı komutlar için komut ön eki (ör. "!ping" için "!").
    // Hem eğik çizgi komutlarını hem de ön ek komutlarını destekler.
    prefix: process.env.PREFIX || "!",
  },

  // =========================
  // BAŞVURU SİSTEMİ
  // =========================
  applications: {
    // Birisi başvuru formunu doldurduğunda gösterilen varsayılan sorular.
    defaultQuestions: [
      { question: "Adınız nedir?", required: true },
      { question: "Kaç yaşındasınız?", required: true },
      { question: "Neden katılmak istiyorsunuz?", required: true },
    ],

    // Başvuru durumuna göre embed renkleri.
    statusColors: {
      pending: "#FFA500",
      approved: "#00FF00",
      denied: "#FF0000",
    },

    // Kullanıcıların başka bir başvuru göndermeden önce ne kadar beklemesi gerektiği (saat).
    applicationCooldown: 24,

    // Reddedilen başvuruları şu kadar gün sonra otomatik sil.
    deleteDeniedAfter: 7,

    // Onaylanan başvuruları şu kadar gün sonra otomatik sil.
    deleteApprovedAfter: 30,

    // Başvuruları yönetmesine izin verilen rol ID'leri. // Ortamdan veya veritabanından doldurulacak
    managerRoles: [], 
  },

  // =========================
  // EMBED RENKLERİ VE MARKALAMA
  // =========================
  // ÖNEMLİ: Bu bölüm tüm bot renkleri için TEK DOĞRU KAYNAKTIR
  embeds: {
    colors: {
      // Ana marka renkleri.
      primary: "#336699",
      secondary: "#2F3136",

      // Başarı/hata/uyarı/bilgi mesajları için standart durum renkleri.
      success: "#57F287",
      error: "#ED4245",
      warning: "#FEE75C",
      info: "#3498DB",

      // Nötr yardımcı renkler.
      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",

      // Discord tarzı palet kısayolları.
      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#000000",

      // Özelliğe özel renkler.
      giveaway: {
        active: "#57F287",
        ended: "#ED4245",
      },
      ticket: {
        open: "#57F287",
        claimed: "#FAA61A",
        closed: "#ED4245",
        pending: "#99AAB5",
      },
      economy: "#F1C40F",
      birthday: "#E91E63",
      moderation: "#9B59B6",

      // Bilet (destek talebi) öncelik renk eşlemesi.
      priority: {
        none: "#95A5A6",
        low: "#3498db",
        medium: "#2ecc71",
        high: "#f1c40f",
        urgent: "#e74c3c",
      },
    },
    footer: {
      // Bot embed'lerinde kullanılan varsayılan altbilgi (footer) metni.
      text: "Titan Bot",
      // Altbilgi simgesi URL'si (null = simge yok).
      icon: null,
    },
    // Embed'ler için varsayılan küçük resim (thumbnail) URL'si (null = küçük resim yok).
    thumbnail: null,
    author: {
      // İsteğe bağlı varsayılan embed yazar (author) bloğu.
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // EKONOMİ AYARLARI
  // =========================
  economy: {
    currency: {
      // Para birimi görünen adı.
      name: "jeton",
      // Çoğul görünen ad.
      namePlural: "jeton",
      // Bakiyelerde gösterilen para birimi sembolü.
      symbol: "$",
    },

    // Yeni kullanıcılar için başlangıç bakiyesi.
    startingBalance: 0,

    // Yükseltmelerden önceki maksimum banka kapasitesi (eğer yükseltmeler kullanılıyorsa).
    baseBankCapacity: 100000,

    // Günlük ödül miktarı.
    dailyAmount: 100,

    // Work (çalışma) komutu rastgele ödeme aralığı.
    workMin: 10,
    workMax: 100,

    // Beg (dilenme) komutu rastgele ödeme aralığı.
    begMin: 5,
    begMax: 50,

    // Soygun (rob) yaparken başarılı olma şansı (0.4 = %40).
    robSuccessRate: 0.4,

    // Başarısız soygundan sonra hapis süresi (milisaniye).
    // 3600000 = 1 saat.
    robFailJailTime: 3600000,
  },

  // =========================
  // MAĞAZA AYARLARI
  // =========================
  // Gerektiğinde buraya mağaza varsayılanlarını ekleyebilirsiniz.
  shop: {

  },

  // =========================
  // BİLET (DESTEK TALEBİ) SİSTEMİ
  // =========================
  tickets: {
    // Yeni biletlerin oluşturulduğu kategori ID'si (null = zorunlu kategori yok).
    defaultCategory: null,

    // Biletleri yönetmesine/desteklemesine izin verilen rol ID'leri.
    supportRoles: [],

    // Kullanıcıların/yetkililerin atayabileceği öncelik seçenekleri.
    priorities: {
      none: {
        emoji: "⚪",
        color: "#95A5A6",
        label: "Yok",
      },
      low: {
        emoji: "🟢",
        color: "#2ECC71",
        label: "Düşük",
      },
      medium: {
        emoji: "🟡",
        color: "#F1C40F",
        label: "Orta",
      },
      high: {
        emoji: "🔴",
        color: "#E74C3C",
        label: "Yüksek",
      },
      urgent: {
        emoji: "🚨",
        color: "#E91E63",
        label: "Acil",
      },
    },

    // Yeni biletler için varsayılan öncelik.
    defaultPriority: "none",

    // Kapatılan biletlerin arşivlendiği kategori ID'si.
    archiveCategory: null,

    // Bilet günlüklerinin (log) gönderildiği kanal ID'si.
    logChannel: null,
  },

  // =========================
  // ÇEKİLİŞ AYARLARI
  // =========================
  giveaways: {
    // Milisaniye cinsinden varsayılan çekiliş süresi.
    // 86400000 = 24 saat.
    defaultDuration: 86400000,

    // İzin verilen kazanan sayısı aralığı.
    minimumWinners: 1,
    maximumWinners: 10,

    // Milisaniye cinsinden izin verilen çekiliş süresi aralığı.
    // 300000 = 5 dakika.
    minimumDuration: 300000,
    // 2592000000 = 30 gün.
    maximumDuration: 2592000000,

    // Çekiliş düzenlemesine izin verilen rol ID'leri.
    allowedRoles: [],

    // Çekiliş kısıtlamalarını atlayan rol ID'leri.
    bypassRoles: [],
  },

  // =========================
  // DOĞUM GÜNÜ AYARLARI
  // =========================
  birthday: {
    // Doğum günlerinde kullanıcılara verilen rol ID'si.
    defaultRole: null,

    // Doğum günü duyurularının yayınlandığı kanal ID'si.
    announcementChannel: null,

    // Doğum günü tarihlerini hesaplamak için kullanılan saat dilimi.
    timezone: "UTC",
  },

  // =========================
  // DOĞRULAMA AYARLARI
  // =========================
  verification: {
    // Doğrulama paneli gönderildiğinde gösterilen mesaj.
    defaultMessage: "Sunucuya erişim sağlamak ve kendinizi doğrulamak için aşağıdaki butona tıklayın!",

    // Doğrulama butonundaki metin.
    defaultButtonText: "Doğrula",

    // Otomatik doğrulama davranışı.
    autoVerify: {
      // Otomatik doğrulamanın kimin otomatik olarak onaylanacağına nasıl karar verdiği:
      // - "none"        = herkes anında otomatik olarak doğrulanır
      // - "account_age" = hesap belirlenen günden daha eski olmalıdır
      // - "server_size" = yalnızca küçük sunuculardaki herkesi otomatik olarak doğrula
      defaultCriteria: "none",

      // `defaultCriteria`, `account_age` olduğunda kullanılan gün sayısı.
      defaultAccountAgeDays: 7,

      // `defaultCriteria`, `server_size` olduğunda kullanılan üye sayısı sınırı.
      // Örnek: 1000, sunucuda 1000'den az üye varsa otomatik doğrula anlamına gelir.
      serverSizeThreshold: 1000,

      // Hesap yaşı gereksinimleri için izin verilen güvenlik sınırları.
      // 1 = minimum gün, 365 = maksimum gün.
      minAccountAge: 1,
      maxAccountAge: 365,

      // Eğer true ise, doğrulamanın ardından kullanıcı bir DM alır.
      sendDMNotification: true,

      // Her bir kriter modu için insanlar tarafından okunabilir açıklamalar.
      criteria: {
        account_age: "Hesap belirtilen günlerden daha eski olmalıdır",
        server_size: "Sunucu 1000 üyeden azsa tüm kullanıcılar",
        none: "Tüm kullanıcılar anında"
      }
    },

    // Doğrulama denemeleri arasındaki minimum süre (milisaniye).
    // 5000 = 5 saniye
