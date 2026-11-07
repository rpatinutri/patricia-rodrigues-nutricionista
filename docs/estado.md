# Patricia Rodrigues Nutricionista — estado do trabalho

Atualizado: 2026-11-05

## Objetivo

Site institucional de uma página para nutricionista em Ibiúna/SP, com foco em gerar
contato por WhatsApp e formulário. Tom acolhedor e profissional, tema claro.

## Escopo

- Briefing (contrato): `docs/briefing.md`
- Proposta aprovada: mapa de seções, paleta medida, tipografia e estrutura de pastas
  (registrada nesta sessão, em conversa).

## Stack e comandos

- Stack: site estático gerado com Eleventy 3 (Nunjucks/Markdown) + CSS/JS puros; painel
  Decap CMS no Netlify (git-gateway + Netlify Identity). Sem backend próprio.
- Rodar local: `npm run dev` (porta 8123) ou `npm run build` + `python -m http.server 8123`
  dentro de `_site`.
- Testar: larguras 360, 768, 912 e 1440 px; navegação por teclado; contraste; Lighthouse.
- Publicar: Netlify (build `npm run build`, publish `_site`). Ver `docs/publicar.md`.

## Estado atual

- **Site institucional pronto e conferido** em `src/` (gera `_site/`).
- Blog integrado implementado e conferido com artigo de demonstração (rascunho):
  - Listagem em `/blog/` com estado vazio quando não há posts publicados.
  - Post em `/blog/<slug>/` com fonte, resumo, "Meu comentário" e link de volta.
  - Seção "Últimos artigos" e link "Artigos" no menu/rodapé aparecem só com posts
    publicados.
  - Painel `/admin/` carrega o Decap CMS com login Netlify Identity (sem erros).
- Testado em 360, 768, 912 e 1440 px, sem rolagem horizontal.
- Lighthouse (home, blog, post): acessibilidade 100, boas práticas 100, SEO 100.
- Contato por botão direto no WhatsApp (formulário removido em 2026-11-07, a pedido
  do cliente); o link `wa.me` abre com a mensagem pronta.
- Menu mobile abre/fecha, fecha no Esc, no clique do link e ao passar de 900 px.
- Cliente visualizou a prévia em 2026-11-05 e pediu para registrar o estado na memória.
- Textos atualizados em 2026-11-05: posicionamento em saúde da mulher, "Quem sou eu" em
  primeira pessoa, 3 passos da consulta, modalidades presencial/online e "agendar" no
  lugar de "marcar". Testado de novo em 360, 768, 912 e 1440 px; Lighthouse 100/100/100.

## Decisões

- Tema claro → o logo é vinho/sálvia e sumiria em fundo escuro.
- Sálvia (`#8ca296`) só em formas e faixas; nunca como cor de texto (2,44:1 no fundo).
- Texto vinho `#912525` sobre off-white = 7,55:1 (aprovado).
- Parisienne (nome/assinatura) + Jost (texto), no lugar de Autography + "Modern sans
  light": a Autography é fonte paga, sem licença disponível. Ambas são Google Fonts (OFL).
- Títulos grandes em Jost 500, não na manuscrita: legibilidade em 360 px.
- Assinatura horizontal (`marca d aggua-02.png`) não usada: texto off-white, invisível
  no fundo claro. Cabeçalho usa o monograma (`-03`) + nome em tipografia.
- Preço não publicado (decisão do cliente).
- Linguagem neutra em gênero: a chamada final diz "Vamos começar?" (antes "Pronta para
  começar?"), porque o atendimento é para homens e mulheres.
- Posicionamento (2026-11-05): "Nutrição para a saúde da mulher, em cada fase da vida" no
  `h1`, no `<title>` e na meta description. Homens continuam citados em "Quem sou eu" e
  no "O que atendo" (nada de linguagem que os exclua).
- Consulta em 3 passos (texto do cliente): conversa → plano possível → acompanhamento.
  "Montamos juntas" virou "Montamos": o site também fala com homens.
- Modalidades: presencial em Ibiúna/SP e online por vídeo (cards após os passos e item
  "Online" no contato).
- Vocabulário: "agendar" em todo o site; nenhuma ocorrência de "marcar".
- Card "App Amplinutri" trocado por "Saúde da mulher" no "O que atendo"; o app continua
  citado no passo 3.
- `text-wrap: balance` no `h1`/`h2`: evita a palavra órfã na última linha do título.
- Sem formulário de contato: a seção de contato mostra os dados e um botão direto
  para o WhatsApp. Menos atrito e menos campo para a cliente manter.
- Uma única chamada de WhatsApp na parte de baixo da página: a faixa "Vamos começar?"
  foi removida para não repetir o botão que já existe na seção de contato (2026-11-07).
- Hero sem foto. Selo aparece a partir de 640 px (240 px) e em 2 colunas a partir de 900 px.
- Rodapé claro (não escuro) para manter o vinho legível.
- `@charset "UTF-8"` no topo do CSS: sem ele, servidores que não informam charset
  decodificam a seta "→" como Latin-1 e ela aparece quebrada.

## Arquivos importantes

- `src/index.njk`: home (Nunjucks), inclui seção "Últimos artigos" condicional.
- `src/_includes/base.njk`: head/meta, cabeçalho/rodapé, nav condicional, convite Netlify Identity.
- `src/_includes/post.njk`: layout do artigo (fonte, resumo, "Meu comentário", voltar).
- `src/posts/posts.11tydata.js`: padrões dos posts, permalink, rascunho, metaTitle.
- `src/posts/modelo-artigo-comentado.md`: artigo de demonstração (rascunho).
- `src/blog/index.njk`: listagem do blog com estado vazio.
- `eleventy.config.js`: filtros `dataBR`/`limite`, coleção `postsPublicados`, passthrough.
- `admin/index.html` e `admin/config.yml`: painel Decap CMS.
- `netlify.toml`: build `npm run build`, publish `_site`, Node 22.
- `assets/css/estilo.css`: tokens da paleta + blocos `.artigos`, `.artigo-card`, `.post*`.
- `assets/js/script.js`: menu, validação e link do WhatsApp.
- `assets/img/logo-selo.webp` (480 px): selo circular — abertura.
- `assets/img/logo-simbodo.webp` (160 px): monograma — cabeçalho e rodapé.
- `assets/img/padrao-pr.webp` (420 px, 87 KB): textura da abertura a 5% de opacidade.
- `assets/img/favicon-32.png`, `assets/img/apple-touch-icon.png`.
- `src/_data/site.json`: telefone, WhatsApp, endereço, `siteUrl` (placeholder até o domínio).
- Originais do cliente (`marca d aggua-*.png`, `Logotipo-*.jpg`, `1779754621338.jpg`)
  permanecem intactos na raiz.
- `index.html` na raiz é o arquivo antigo, não usado após a migração; pode ser removido
  quando o cliente confirmar. A fonte agora é `src/`.

## Próximo passo

1. Cliente criar as contas no Netlify e no GitHub (no nome dela) e convidar o agente.
2. Seguir `docs/publicar.md` (passo a passo de publicação, Identity, Git Gateway e domínio).
3. Cliente enviar o primeiro artigo real para substituir o modelo de demonstração.
4. Revisar os textos de "Quem sou eu" e "Como funciona a consulta".

## Pendências

- [ ] Revisão dos textos pelo cliente.
- [x] Lista de condições (SOP, endometriose, gestação, pós-parto, menopausa): cliente
      decidiu deixar o texto como está, sem a lista (2026-11-05).
- [x] Blog/artigos com edição pela cliente: implementado (Eleventy + Decap CMS).
- [ ] Primeiro artigo real da cliente (o modelo de demonstração deve ser apagado).
- [ ] Foto em alta resolução, se o cliente quiser usar mais tarde (a atual tem 200x200 px).
- [ ] Domínio e hospedagem: criar contas e publicar (ver `docs/publicar.md`).
- [ ] Instagram: cliente não possui.
- [ ] Limpeza opcional: remover o `index.html` antigo da raiz (a fonte agora é `src/`).

## Publicação

- Site é 100% estático gerado (sem backend, sem banco): qualquer host estático serve.
- Caminho escolhido: Netlify + Decap CMS + Netlify Identity (git-gateway). Custo R$ 0
  além do domínio; domínio `.com.br` R$ 40/ano no Registro.br.
- GitHub Pages descartado pela cláusula de uso comercial na documentação oficial.
- Passo a passo completo em `docs/publicar.md`.

## Histórico

- 2026-11-04: leitura do `AGENTS.md`; pasta continha apenas o arquivo de regras.
- 2026-11-04: briefing Bloco A respondido; kit de marca recebido; contrastes medidos.
- 2026-11-05: blocos B, C e D respondidos; arquivos de logo e retrato conferidos por medição.
- 2026-11-05: proposta entregue; dados do LinkedIn recebidos; CRN 84548/P informado.
- 2026-11-05: `docs/briefing.md` e `docs/estado.md` criados.
- 2026-11-05: imagens recortadas e convertidas para webp; `index.html`, CSS e JS escritos.
- 2026-11-05: testado em 360/768/912/1440; formulário e menu validados; Lighthouse 100/100/100.
- 2026-11-05: cliente visualizou a prévia e pediu para guardar o estado. Nada pendente de
  código; aguardando revisão dos textos e definição de domínio/hospedagem.
- 2026-11-05: cliente apontou linguagem de gênero na chamada final; trocado "Pronta para
  começar?" por "Vamos começar?" e briefing atualizado (atende homens e mulheres).
- 2026-11-05: cliente perguntou sobre custo de publicar; respondido (domínio R$ 40/ano,
  hospedagem estática gratuita) e sobre GitHub Pages, com a ressalva de uso comercial.
  Aguardando a escolha da plataforma.
- 2026-11-05: cliente enviou o novo posicionamento (saúde da mulher, em cada fase da vida)
  e o texto de "Quem sou eu"/"Como funciona a consulta"; aplicado no site, com a lista de
  condições mantida fora até confirmação. Testes refeitos; Lighthouse 100/100/100.
- 2026-11-05: cliente confirmou o atendimento online e decidiu deixar o texto sem a lista
  de condições. Chamada final trocada para "Me chame no WhatsApp para agendarmos sua
  primeira consulta." Cliente pediu avaliação de um blog editável — não implementado.
- 2026-11-05: blog integrado aprovado e implementado (Eleventy 3 + Decap CMS + Netlify
  Identity). Páginas home/blog/post conferidas; `/admin/` carrega o login. Lighthouse
  100/100/100 nas três. Artigo de demonstração mantido como rascunho.
- 2026-11-07: formulário de contato removido a pedido do cliente; a seção de contato
  agora mostra os dados e um botão direto para o WhatsApp. JS de validação e CSS do
  formulário removidos; site reconstruído e conferido.
- 2026-11-07: faixa "Vamos começar?" removida para deixar uma única chamada de WhatsApp
  na parte de baixo; o botão fica na seção de contato, ao lado dos dados.
- 2026-11-07: conta `tiagoj-prog` liberada como colaboradora no repositório
  `rpatinutri/patricia-rodrigues-nutricionista`; commits do formulário e do botão único
  enviados para a branch `main`. Netlify deve reconstruir automaticamente.
