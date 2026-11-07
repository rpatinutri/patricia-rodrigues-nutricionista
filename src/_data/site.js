const config = require("./config.json");

const digitos = String(config.telefoneDigitos || "").replace(/\D/g, "");
const mensagem = encodeURIComponent(config.mensagemWhatsapp || "");

module.exports = {
  ...config,
  telefoneLink: `https://wa.me/${digitos}`,
  whatsapp: `https://wa.me/${digitos}?text=${mensagem}`,
};
