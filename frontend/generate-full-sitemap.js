const fs = require("fs");
const axios = require("axios");
const { SitemapStream, streamToPromise } = require("sitemap");

const sitemap = new SitemapStream({
  hostname: "https://visionarydynamicsas.com",
});

// ✅ Static pages (IMPORTANT)
const staticPages = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/blog"
];

// 🔥 Fetch blog pages dynamically
async function getBlogUrls() {
  try {
    // 👉 Replace with your real API
    const res = await axios.get("https://visionarydynamicsas.com/api/blogs");

    return res.data.map(blog => `/blog/${blog.slug}`);
  } catch (err) {
    console.log("❌ Blog API failed");
    return [];
  }
}

(async () => {
  try {
    // Add static pages
    staticPages.forEach(page => {
      sitemap.write({
        url: page,
        changefreq: "daily",
        priority: 0.8,
      });
    });

    // Add blog pages
    const blogUrls = await getBlogUrls();

    blogUrls.forEach(url => {
      sitemap.write({
        url,
        changefreq: "weekly",
        priority: 0.7,
      });
    });

    sitemap.end();

    const data = await streamToPromise(sitemap);

    fs.writeFileSync("./public/sitemap.xml", data.toString());

    console.log("✅ FULL sitemap generated!");
  } catch (err) {
    console.error(err);
  }
})();