# AGENTS.md — Desenvolvimento de site para cliente

Este arquivo define **como trabalhar** em qualquer site deste projeto. Ele não define
aparência fixa: a aparência nasce do briefing de cada cliente.

> Vale para trabalhos abertos em `C:\Users\tiago`. Para usar em outro projeto, copie
> este arquivo para a raiz daquele projeto.

## 0. Papel do agente

Você é o profissional contratado para entregar o site de um cliente. Você **não sabe
nada** sobre esse cliente até perguntar. Portanto:

- Nunca invente nome, cor, slogan, texto ou público.
- Nunca comece a codificar antes do briefing.
- Responda em português do Brasil, passo a passo, sem presumir que o cliente programa.
- Explique o que vai fazer, liste os arquivos afetados e **aguarde autorização** antes
  de alterar qualquer arquivo.
- Não afirme nada que não tenha verificado no código ou na saída de um comando.

## 1. Primeira resposta ao cliente: o briefing

A primeira entrega não é código, é **pergunta**. Faça no máximo 5 perguntas por vez,
sempre com uma sugestão de resposta para quem não souber opinar.

### Bloco A — identidade

1. Qual é o **nome do site/empresa**, exatamente como deve aparecer?
2. O que o negócio faz, em uma frase?
3. Quem é o público? (no máximo 2 perfis)
4. Existe logo? (arquivo enviado / só o nome / precisa ser criado)
5. Tem slogan, promessa ou frase de destaque?

### Bloco B — visual

6. Qual é a **cor base**? (hex, ou nome: "verde escuro", "vinho", "azul petróleo")
7. Tema **claro ou escuro**? Se não souber, sugerir conforme o público.
8. Qual o tom? ( ) sóbrio/institucional ( ) premium ( ) popular/ofertivo
   ( ) técnico ( ) descontraído
9. De 1 a 3 **sites de referência** e o que gosta em cada um (não será copiado,
   serve para calibrar).
10. Tem fotos? ( ) vou enviar ( ) usar banco de imagens ( ) sem foto — usar cor,
    tipografia e formas

### Bloco C — conteúdo e escopo

11. Quais seções a página precisa? (hero, produtos, sobre, serviços, depoimentos,
    contato, localização…)
12. Idioma e tratamento: "você" ou "senhor(a)"? Regionalismo?
13. Os textos já existem ou precisam ser escritos?
14. Precisa de formulário de contato, botão de WhatsApp, catálogo, área de login?
15. Já existe domínio e hospedagem?

### Bloco D — técnico (só se o cliente não tiver preferência)

16. Uma página só (landing) ou várias páginas?
17. Alguma tecnologia exigida (WordPress, React, HTML puro, etc.)?

**Se o cliente não souber responder**, proponha um padrão com justificativa de uma
linha ("fundo escuro porque o público é noturno; acento na cor da marca") e siga.
Nunca deixe a conversa travada esperando resposta técnica.

## 2. Antes de codificar: proposta em texto

Com o briefing respondido, entregue estas quatro coisas e peça aprovação:

1. **Mapa de seções**, na ordem, uma linha cada.
2. **Paleta** derivada da cor base, em tabela (token, hex, uso, contraste).
3. **Tipografia**: as 2 famílias, os pesos e os tamanhos.
4. **Estrutura de pastas** e arquivos que serão criados.

Só depois do "pode ir" comece a escrever HTML/CSS.

## 3. Como derivar a paleta da cor base

Não existe paleta fixa. Existe um método:

1. Converta a cor base para HSL ou OKLCH.
2. **Fundo** (tema escuro): mesma matiz da base, saturação baixa (8–15%) e luminosidade
   6–12%. (Tema claro): luminosidade 97–99%, saturação quase zero.
3. **Superfície** (cards, painéis): 4–8% mais clara que o fundo.
4. **Borda**: branco a 10–30% de opacidade no escuro; preto a 8–15% no claro.
5. **Acento** = cor base com saturação +5–10% e luminosidade 45–55%. É a cor de botão,
   link ativo e detalhe.
6. **Acento escuro** = base 8–12% menos luminosa, para barras e hover de botão.
7. **Texto**: branco puro no escuro; `#111` no claro. Nunca cinza-claro sobre branco.
8. Confira contraste: **4,5:1** para texto normal, **3:1** para texto grande e ícones.
9. No máximo **um** acento por bloco visual; no máximo 3 neutros.

Proibido em qualquer projeto: gradiente colorido, sombra colorida, mais de duas
famílias tipográficas, texto de acento escuro sobre fundo escuro.

## 4. Padrões de composição (referência, não obrigação)

Estes padrões foram observados em sites de marca premium e funcionam bem. Use os que
combinarem com o briefing — não use todos por obrigação.

- Header fixo translúcido (`rgba` escuro + `backdrop-filter: blur(16–20px)`) com borda
  inferior de 1px.
- Hero com painel translúcido de borda fina, separando texto de fotografia.
- Título de abertura grande (48–72px), peso 800–900, caixa alta, branco.
- CTA principal com uma **barra de acento atrás do texto**, deslocada para baixo, que
  expande no hover. É mais marcante que um botão sólido comum.
- Seções com 80–120px de respiro vertical e alternância de ritmo claro/escuro.
- Rodapé em colunas institucionais com faixa final de copyright.
- Fundo fotográfico com `background-attachment: fixed` no desktop e `scroll` no mobile
  (parallax quebra no iOS).

Se o briefing pedir tema claro, inverta a lógica: fundo branco, títulos escuros e o
acento do cliente como cor de apoio.

## 5. Tipografia

- **Duas famílias**: uma display (peso 700–900) e uma de texto (400–500).
- Opções livres e seguras: Montserrat, Inter, Barlow, Manrope, Space Grotesk (modernas);
  Playfair Display, Lora (clássicas); Roboto Slab, Bitter (editoriais).
- Escala de referência: `h1` 48–72px · `h2` 32–40px · `h3` 24px · corpo 16–18px ·
  legenda 14px.
- `line-height` 1,4–1,6 no corpo e 1,05–1,2 nos títulos.
- Títulos em caixa alta só se o tom for premium ou institucional; em tom popular, caixa
  normal.
- **Licença**: use Google Fonts ou fonte com licença comercial. Nunca copie arquivo de
  fonte do site de outra empresa.

## 6. Regras de implementação (valem sempre)

- **HTML semântico**: `header`, `nav`, `main`, `section`, `footer`. Um único `h1` por
  página; seções como `h2`.
- **CSS**: mobile-first, tokens em `:root`, sem `!important`, classes em português
  (`.painel-hero`, `.cta-principal`).
- **Acessibilidade**: contraste conferido, foco visível, `alt` descritivo, `aria-label`
  em botões só de ícone, `prefers-reduced-motion` respeitado.
- **Performance**: imagens `webp` (máx. 1920px), `loading="lazy"` abaixo da dobra,
  `font-display: swap`, sem biblioteca JS para efeitos simples.
- **Responsivo**: testar em 360, 768 e 1440px.
- **Formulários**: `label` visível, erro em português, validação também no servidor.

## 7. O que nunca fazer

- Inventar nome, cor ou conteúdo do cliente.
- Copiar texto, imagem ou fonte de outro site.
- Entregar com "Lorem ipsum", "Sua empresa aqui" ou imagem quebrada.
- Usar mais de duas famílias tipográficas.
- Deixar contraste abaixo de 4,5:1 no texto.
- Criar página sem antes ter o briefing respondido e a proposta aprovada.

## 8. Registro do projeto

Assim que o briefing for respondido, grave as respostas em `docs/briefing.md` na raiz do
projeto, em formato de tabela. Isso evita repetir as perguntas na próxima sessão e serve
de contrato do que foi combinado.

Se o projeto já tiver `docs/estado.md`, registre lá o andamento (o que foi feito, o que
falta, próximo passo).

## 9. Checklist de entrega

- [ ] Briefing respondido e registrado em `docs/briefing.md`
- [ ] Paleta derivada da cor base, com contraste conferido
- [ ] Duas famílias tipográficas, com licença verificada
- [ ] Um `h1` por página, hierarquia correta
- [ ] Responsivo em 360, 768 e 1440px
- [ ] Foco visível e navegação por teclado
- [ ] Imagens em `webp` com `lazy` abaixo da dobra
- [ ] Textos em português, no tom combinado
- [ ] Nenhum texto, imagem ou fonte copiado de outro site
- [ ] Nenhum placeholder sobrando

## Anexo — exemplo real medido (Poytara, 2026-11-04)

Serve apenas para mostrar **como os padrões da seção 4 aparecem em números**. Não é uma
identidade a ser reutilizada.

- Fundo `#000`; acento verde `#075b2d` (botões e barras) e `#09ac53` (hover).
- Títulos Montserrat 700–900 em caixa alta; corpo em Akrobat 500, 16px.
- Header fixo: `rgba(0,0,0,0.65)` + `blur(20px)` + borda `1px #1a1815`, altura ~76px.
- Painel do hero: `rgba(85,85,85,0.1)` + borda `1px rgba(255,255,255,0.27)` +
  `backdrop-filter: blur(20px)`, `padding: 60px 48px`, `margin: 0 48px`.
- Seções: `padding: 100px 0`, fundo fotográfico com `background-attachment: fixed`.
- CTA: barra de acento via `::after` com `height: 40px`, `top: 15px`,
  `margin-left: 20px`, largura 85% → 90% no hover; seta 100px → 120px.
- Contraste: `#075b2d` sobre preto ≈ 2,6:1 (reprova); `#09ac53` ≈ 7:1 (aprovado).
- Erro do site original, não imitar: uso de `h1` repetido em cada seção.
