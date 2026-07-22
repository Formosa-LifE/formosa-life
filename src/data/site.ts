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
  linkLabel?: string; // 卡片按鈕文字（不填則預設「前往雲端資料夾」）
  slug?: string;      // 有填則卡片連到站內內嵌頁 /resources/<slug>
  embedUrl?: string;  // 要內嵌的 Google 試算表「發佈到網路」網址（含 pubhtml?widget=true&headers=false）
}

export const resourceCategories: ResourceCategory[] = [
  {
    title: '教學講義',
    description: '各主題的學習講義。',
    emoji: '📖',
    slug: 'handouts',
    linkLabel: '開啟講義',
    driveUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSHPwp53sszrhSo56Lar8fwJQF66zN48RiiLgcA1fifmj50ihxJCFQDi4bKT3WLvVzju3wiDzeAFW32/pubhtml',
    embedUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSHPwp53sszrhSo56Lar8fwJQF66zN48RiiLgcA1fifmj50ihxJCFQDi4bKT3WLvVzju3wiDzeAFW32/pubhtml?widget=true&headers=false',
  },
  {
    title: '數位工具',
    description: '數位學習或教學工具',
    emoji: '🖥️',
    slug: 'tools',
    linkLabel: '開啟資源',
    driveUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTyrWaYZZbFGoepN6gyXM9l10LxZFXwG-jBgHTCb2cEgUGIsaIbYzSkc0G5t_jzgtgfP6O7UCoaqCoF/pubhtml',
    embedUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTyrWaYZZbFGoepN6gyXM9l10LxZFXwG-jBgHTCb2cEgUGIsaIbYzSkc0G5t_jzgtgfP6O7UCoaqCoF/pubhtml?widget=true&headers=false',
  },
  {
    title: '學習資源',
    description: '各領域學習資源整理。',
    emoji: '✏️',
    slug: 'learning',
    linkLabel: '開啟資源',
    driveUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7XAC-vUrlc0sQvKgCMTme-4BTALHxwcvhDTJg2zvIU2LEN77rgaV8hQwIZXts-_sNyglTofo9BfU_/pubhtml',
    embedUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7XAC-vUrlc0sQvKgCMTme-4BTALHxwcvhDTJg2zvIU2LEN77rgaV8hQwIZXts-_sNyglTofo9BfU_/pubhtml?widget=true&headers=false',
  },
  {
    title: '科學新知',
    description: '時事科普的補充閱讀資料。',
    emoji: '🔬',
    slug: 'news',
    linkLabel: '開啟資源',
    driveUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSN3hK6Aqig7mAkTg6QVtfzWJcXBbvb3F2f5mRE1wEl7s-nDQcqdezn9uqJ2__iHXYZhFTRsj2jssDa/pubhtml',
    embedUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSN3hK6Aqig7mAkTg6QVtfzWJcXBbvb3F2f5mRE1wEl7s-nDQcqdezn9uqJ2__iHXYZhFTRsj2jssDa/pubhtml?widget=true&headers=false',
  },
  {
    title: '生命科學音典',
    description: '高中生命科學英文名詞的臺灣雙語注音符號、Merriam-Webster 真人發音（單字與片語）與中英解釋，可依音節或主題查詢。',
    driveUrl: '/tools/sci-life-dictionary.html',
    emoji: '🗣️',
    linkLabel: '開啟音典',
  },
  {
    title: '雙母語音標組字查詢器',
    description: '輸入任一英文單字，即時查 Merriam-Webster 音標，並自動以臺灣雙語注音符號堆疊成音節積木，附發音與字義。',
    driveUrl: '/tools/word-builder.html',
    emoji: '🧩',
    linkLabel: '開啟查詢器',
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
