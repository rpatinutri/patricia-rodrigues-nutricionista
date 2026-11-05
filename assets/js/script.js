/* Patricia Rodrigues Nutricionista — comportamentos do site */
(function () {
  "use strict";

  var WHATSAPP = "5515996110107";

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

  /* Formulário → WhatsApp ----------------------------------------------- */
  var formulario = document.getElementById("formulario-contato");

  if (formulario) {
    var status = document.getElementById("status-formulario");
    var campos = ["nome", "telefone", "email", "mensagem"];

    var mostrarErro = function (id, mensagem) {
      var campo = document.getElementById(id);
      var aviso = formulario.querySelector('[data-erro-de="' + id + '"]');
      if (campo) {
        campo.setAttribute("aria-invalid", mensagem ? "true" : "false");
      }
      if (aviso) {
        aviso.textContent = mensagem || "";
        aviso.hidden = !mensagem;
      }
    };

    var validar = function () {
      var nome = formulario.nome.value.trim();
      var telefone = formulario.telefone.value.trim();
      var email = formulario.email.value.trim();
      var mensagem = formulario.mensagem.value.trim();
      var valido = true;

      if (nome.length < 2) {
        mostrarErro("nome", "Escreva seu nome, por favor.");
        valido = false;
      } else {
        mostrarErro("nome", "");
      }

      var digitos = telefone.replace(/\D/g, "");
      if (digitos.length < 10 || digitos.length > 11) {
        mostrarErro("telefone", "Informe o telefone com DDD, por exemplo (15) 99999-9999.");
        valido = false;
      } else {
        mostrarErro("telefone", "");
      }

      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        mostrarErro("email", "Confira o e-mail: parece faltar algo.");
        valido = false;
      } else {
        mostrarErro("email", "");
      }

      if (mensagem.length < 10) {
        mostrarErro("mensagem", "Conte um pouco mais, com pelo menos 10 caracteres.");
        valido = false;
      } else {
        mostrarErro("mensagem", "");
      }

      return valido;
    };

    campos.forEach(function (id) {
      var campo = document.getElementById(id);
      if (campo) {
        campo.addEventListener("input", function () {
          if (campo.getAttribute("aria-invalid") === "true") {
            mostrarErro(id, "");
          }
        });
      }
    });

    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();

      if (!validar()) {
        var primeiro = formulario.querySelector('[aria-invalid="true"]');
        if (primeiro) {
          primeiro.focus();
        }
        if (status) {
          status.textContent = "Confira os campos destacados antes de enviar.";
        }
        return;
      }

      var nome = formulario.nome.value.trim();
      var telefone = formulario.telefone.value.trim();
      var email = formulario.email.value.trim();
      var mensagem = formulario.mensagem.value.trim();

      var texto = "Olá, Patricia! Meu nome é " + nome + ".";
      texto += "\nTelefone: " + telefone;
      if (email) {
        texto += "\nE-mail: " + email;
      }
      texto += "\n\n" + mensagem;

      var url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto);
      window.open(url, "_blank", "noopener");

      if (status) {
        status.textContent = "Abrimos o WhatsApp em outra aba com a sua mensagem. Confirme o envio por lá.";
      }
    });
  }
})();
