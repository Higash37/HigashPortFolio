// サイトマップ生成用の設定

// SEO優先度の定数定義
const PRIORITY = {
  HIGHEST: 1.0, // メインページ
  HIGH: 0.9, // プロジェクト一覧
  MEDIUM: 0.8, // スキル・自己紹介
  LOW: 0.7, // お問い合わせ
} as const;

export const sitemapConfig = {
  baseUrl: "https://ryo-higashionna-portfolio.vercel.app",
  pages: [
    {
      url: "/",
      changefreq: "weekly",
      priority: PRIORITY.HIGHEST,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/#about",
      changefreq: "monthly",
      priority: PRIORITY.MEDIUM,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/#skills",
      changefreq: "monthly",
      priority: PRIORITY.MEDIUM,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/#projects",
      changefreq: "weekly",
      priority: PRIORITY.HIGH,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/#contact",
      changefreq: "monthly",
      priority: PRIORITY.LOW,
      lastmod: new Date().toISOString(),
    },
  ],
};

export const generateSitemap = () => {
  const { baseUrl, pages } = sitemapConfig;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return sitemap;
};
