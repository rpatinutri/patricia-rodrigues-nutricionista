module.exports = function (eleventyConfig) {
  /* Data legível em português, sem depender do fuso do servidor. */
  eleventyConfig.addFilter("dataBR", (valor) => {
    if (!valor) return "";
    const data = valor instanceof Date ? valor : new Date(valor);
    if (Number.isNaN(data.getTime())) return "";
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(data);
  });

  eleventyConfig.addFilter("limite", (lista, quantidade) =>
    Array.isArray(lista) ? lista.slice(0, quantidade) : []
  );

  eleventyConfig.addFilter("urlencode", (valor) =>
    encodeURIComponent(valor || "")
  );

  /* Artigos publicados, do mais novo para o mais antigo. Rascunhos ficam fora. */
  eleventyConfig.addCollection("postsPublicados", (api) =>
    api
      .getFilteredByTag("posts")
      .filter((post) => !post.data.draft)
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.setServerOptions({
    port: 8123,
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
