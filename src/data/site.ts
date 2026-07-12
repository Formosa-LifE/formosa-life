// ============================================================
// 網站內容設定檔 —— 日常維護只需要改這一個檔案！
// 改完存檔、推上 GitHub，Vercel 會自動重新部署。
// ============================================================

export const site = {
  name: 'Formosa LifE',
  tagline: '每一個分享，都是一種傳承',
  description:
    '我們為好學的心靈築起棲息地，透過學習與教學的分享，陪伴您在探索的道路上，綻放美麗的花朵，享受成長的喜悅。',
  email: 'mei@cysh.cy.edu.tw',
  // 首頁背景影片網址（可換成自己的影片連結）
  heroVideo: 'https://pub-b23f8ff0e2504b738cf07bf005293e7e.r2.dev/hero-video.mp4',
};

// ------------------------------------------------------------
// 「資源」頁的分類卡片
// 新增一個 Google Drive 資料夾的步驟：
// 1. 在 Google Drive 對資料夾按右鍵 →「共用」→「知道連結的任何人」→「檢視者」
// 2. 複製連結，貼到下面的 driveUrl
// 3. 之後往該資料夾丟檔案，網站連結會自動看到最新內容，不必再改網站
// ------------------------------------------------------------
export interface ResourceCategory {
  title: string;
  description: string;
  driveUrl: string;
  emoji: string;
}

export const resourceCategories: ResourceCategory[] = [
  {
    title: '教學講義',
    description: '各章節學習講義。',
    driveUrl: 'https://drive.google.com/drive/folders/1IpUJzBQLaeU7ZsyQYIcrA3n_YifoJkZw?usp=drive_link',
    emoji: '📖',
  },
  {
    title: '數位工具',
    description: '自製的數位學習或教學工具',
    driveUrl: 'https://drive.google.com/drive/folders/1pZ6Ugzp9y-YBta4I09ddkcHlGKQpOJzu?usp=drive_link',
    emoji: '🖥️',
  },
  {
    title: '學習資源',
    description: '各種學習資源整理。',
    driveUrl: 'https://drive.google.com/drive/folders/1wg_ku517N7Rzc__mfMndcjcHl26SloR2?usp=drive_link',
    emoji: '✏️',
  },
  {
    title: '科學新知',
    description: '時事科普與最新科學研究的補充閱讀資料。',
    driveUrl: 'https://drive.google.com/drive/folders/1Y7J3i0YI_ypG6wjO__VkuOy3PvWQ5zzc?usp=drive_link',
    emoji: '🔬',
  },
];

// ------------------------------------------------------------
// 「隨筆」頁的文章：最新的放最上面
// ------------------------------------------------------------
export interface Essay {
  date: string; // 例：'2026-07-12'
  title: string;
  content: string; // 支援多段落，用 \n\n 分段
}

export const essays: Essay[] = [
  {
    date: '2026-07-12',
    title: '網站啟用：關於分享這件事',
    content:
      '這個網站終於上線了。\n\n多年來累積的講義、資源、工具整理，一直散落在雲端硬碟的各個角落。現在，它們有了一個家。\n\n每一個分享，都是一種傳承。希望這裡的資源，能陪伴更多好學的心靈。',
  },
];

// ------------------------------------------------------------
// 「關於」頁
// ------------------------------------------------------------
export const about = {
  title: '關於 Formosa LifE',
  paragraphs: [
    '您好，我是 LifE。',
    'Formosa LifE 是我用來分享教學資源與學習心得的園地。這裡有多年累積的教學講義、數位工具、學習資源整理，以及我對生活的隨筆。',
    '「分享」是這裡的核心精神——透過分享延續傳承。歡迎自由取用這些資源，也歡迎與我交流。',
  ],
};

// ------------------------------------------------------------
// 「交流」頁
// ------------------------------------------------------------
export const contact = {
  intro: '無論是教學上的交流、資源的建議，或只是想說聲哈囉，都歡迎與我聯繫。',
  // 建議做一份 Google 表單，把「傳送」後取得的連結貼在這裡；留空字串則不顯示表單按鈕
  googleFormUrl: '',
};
