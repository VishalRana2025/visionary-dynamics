const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const sitemap = new SitemapStream({
  hostname: "https://visionarydynamicsas.com",
});

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
  // add all your pages here
];

(async () => {
  for (const link of links) {
    sitemap.write(link);
  }
  sitemap.end();

  const data = await streamToPromise(sitemap);

  fs.writeFileSync("./public/sitemap.xml", data.toString());
  console.log("✅ Sitemap generated successfully!");
})();