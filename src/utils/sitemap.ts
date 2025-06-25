// サイトマップ生成用の設定
export const sitemapConfig = {
  baseUrl: "https://ryo-higashionna-portfolio.vercel.app",
  pages: [
    {
      url: "/",
      changefreq: "weekly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/#about",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/#skills",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/#projects",
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/#contact",
      changefreq: "monthly",
      priority: 0.7,
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
