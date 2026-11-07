/* Patricia Rodrigues Nutricionista — comportamentos do site */
(function () {
  "use strict";

  /* Menu mobile --------------------------------------------------------- */
  var botao = document.querySelector(".menu-botao");
  var navegacao = document.getElementById("menu-principal");

  if (botao && navegacao) {
    var fecharMenu = function () {
      navegacao.classList.remove("esta-aberta");
      botao.setAttribute("aria-expanded", "false");
      botao.setAttribute("aria-label", "Abrir menu");
    };

    botao.addEventListener("click", function () {
      var aberto = botao.getAttribute("aria-expanded") === "true";
      if (aberto) {
        fecharMenu();
      } else {
        navegacao.classList.add("esta-aberta");
        botao.setAttribute("aria-expanded", "true");
        botao.setAttribute("aria-label", "Fechar menu");
      }
    });

    navegacao.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", fecharMenu);
    });

    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape") {
        fecharMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 900) {
        fecharMenu();
      }
    });
  }

  /* Ano do rodapé ------------------------------------------------------- */
  var ano = document.getElementById("ano");
  if (ano) {
    ano.textContent = String(new Date().getFullYear());
  }
})();
