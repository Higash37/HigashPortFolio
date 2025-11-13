// Reactフック
import { useEffect } from "react";

// SEOコンポーネントのProps型定義
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

// SEOメインコンポーネント
const SEO = ({
  title = "東恩納良 ポートフォリオ - React / React Native / Excel 開発者",
  description = "React、React Native、Excelを使う大学生 東恩納良のポートフォリオサイト。Web・モバイル・業務効率化のソリューションを提供。",
  keywords = "React, React Native, Excel, 大学生, 東恩納良, Ryo Higashionna, ポートフォリオ, Web開発, モバイルアプリ開発, 業務効率化",
  image = "/icon-512.svg",
  url = "https://ryo-higashionna-portfolio.vercel.app",
  type = "website",
}: SEOProps) => {
  useEffect(() => {
    // タイトルを設定
    document.title = title;

    // メタタグを設定/更新
    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: "東恩納良 (Ryo Higashionna)" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "ja" },
      { name: "revisit-after", content: "7 days" },

      // Open Graph tags
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:site_name", content: "東恩納良 ポートフォリオ" },
      { property: "og:locale", content: "ja_JP" },

      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:creator", content: "@ryo_higashionna" },

      // Additional SEO tags
      { name: "theme-color", content: "#2563eb" },
      { name: "msapplication-TileColor", content: "#2563eb" },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name
        ? `meta[name="${name}"]`
        : `meta[property="${property}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        if (name) meta.name = name;
        if (property) meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }

      meta.content = content;
    });

    // 構造化データ (JSON-LD) を追加
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "東恩納良",
      alternateName: "Ryo Higashionna",
      jobTitle: "大学生",
      description: description,
      url: url,
      image: image,
      sameAs: [
        "https://github.com/Higash37",
        "https://ryo-higashionna-portfolio.vercel.app",
      ],
      knowsAbout: [
        "React",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Excel VBA",
        "Web Development",
        "Mobile App Development",
      ],
      address: {
        "@type": "PostalAddress",
        addressRegion: "沖縄県",
        addressCountry: "JP",
      },
    };

    // 既存の構造化データスクリプトを削除
    const existingScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // 新しい構造化データを追加
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // クリーンアップは特に必要なし（ページ遷移時に自動的にクリアされる）
    };
  }, [title, description, keywords, image, url, type]);

  return null; // このコンポーネントは何もレンダリングしない
};

export default SEO;
