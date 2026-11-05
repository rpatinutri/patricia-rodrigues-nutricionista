module.exports = {
  layout: "post.njk",
  tags: ["posts"],
  ogType: "article",
  eleventyComputed: {
    permalink: (data) => (data.draft ? false : `/blog/${data.page.fileSlug}/`),
    metaTitle: (data) => `${data.title} — Patricia Rodrigues Nutricionista`,
    description: (data) =>
      data.resumo || "Leituras e comentários da nutricionista Patricia Rodrigues.",
    assetBase: () => "/",
    home: () => "/",
  },
};
