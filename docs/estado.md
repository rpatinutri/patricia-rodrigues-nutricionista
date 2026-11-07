# Patricia Rodrigues Nutricionista — estado do trabalho

Atualizado: 2026-11-07

## Objetivo

Site institucional de uma página para nutricionista em Ibiúna/SP, com foco em gerar
contato por WhatsApp. Tom acolhedor e profissional, tema claro. A cliente edita os
textos da home e os dados de contato pelo painel `/admin/`, sem mexer no código.

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
  - Seção "Últimos assuntos" e link "Assuntos" no menu/rodapé aparecem só com posts
    publicados.
  - Painel `/admin/` carrega o Decap CMS com login Netlify Identity (sem erros).
- Testado em 360, 768, 912 e 1440 px, sem rolagem horizontal.
- Lighthouse (home, blog, post): acessibilidade 100, boas práticas 100, SEO 100.
- Contato por botão direto no WhatsApp (formulário removido em 2026-11-07, a pedido
  do cliente); o link `wa.me` abre com a mensagem pronta.
- **Painel `/admin/` com três coleções**: Artigos, Página inicial (textos da home) e
  Configurações (telefone, WhatsApp, endereço, horário e URL do site). Testado com o
  backend local do Decap: os campos carregam preenchidos, a edição é salva e o JSON
  mantém a estrutura (listas de parágrafos, credenciais, passos, modalidades e serviços).
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
- Linguagem neutra em gênero: a chamada final dizia "Vamos começar?" (antes "Pronta para
  começar?"), porque o atendimento é para homens e mulheres. Em 2026-11-07 a faixa foi
  removida; resta a chamada única "Prefere falar direto?" na seção de contato.
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

- `src/index.njk`: home (Nunjucks) lendo os textos de `conteudo.json`; seção "Últimos
  assuntos" condicional.
- `src/_includes/base.njk`: head/meta, cabeçalho/rodapé, nav condicional; usa `site.*`.
- `src/_includes/post.njk`: layout do artigo (fonte, resumo, "Meu comentário", voltar).
- `src/posts/posts.11tydata.js`: padrões dos posts, permalink, rascunho, metaTitle.
- `src/posts/modelo-artigo-comentado.md`: artigo de demonstração (rascunho).
- `src/blog/index.njk`: listagem do blog com estado vazio.
- `eleventy.config.js`: filtros `dataBR`/`limite`/`urlencode`, coleção `postsPublicados`,
  passthrough.
- `admin/index.html` e `admin/config.yml`: painel Decap CMS com as coleções Artigos,
  Página inicial e Configurações.
- `netlify.toml`: build `npm run build`, publish `_site`, Node 22.
- `assets/css/estilo.css`: tokens da paleta + blocos `.artigos`, `.artigo-card`, `.post*`.
- `assets/js/script.js`: menu mobile e ano do rodapé (sem formulário).
- `assets/img/logo-selo.webp` (480 px): selo circular — abertura.
- `assets/img/logo-simbodo.webp` (160 px): monograma — cabeçalho e rodapé.
- `assets/img/padrao-pr.webp` (420 px, 87 KB): textura da abertura a 5% de opacidade.
- `assets/img/favicon-32.png`, `assets/img/apple-touch-icon.png`.
- `src/_data/conteudo.json`: textos editáveis da home (abertura, sobre, atendimento,
  artigos e contato).
- `src/_data/config.json`: nome, CRN, telefone, WhatsApp, endereço, horário e `siteUrl`
  (placeholder até o domínio).
- `src/_data/site.js`: lê `config.json` e monta `telefoneLink` e `whatsapp`.
- Originais do cliente (`marca d aggua-*.png`, `Logotipo-*.jpg`, `1779754621338.jpg`)
  permanecem intactos na raiz.
- A fonte do site é `src/`; o `index.html` antigo da raiz foi removido.

## Próximo passo

1. Registrar o domínio `.com.br` e apontar para o Netlify (ver `docs/publicar.md`).
2. Depois do domínio ativo, atualizar "Endereço do site (URL)" em `/admin/` >
   Configurações.
3. Substituir o artigo de demonstração pelo primeiro artigo real.
4. Revisar os textos de "Quem sou eu" e "Como funciona a consulta".

## Pendências

- [ ] Revisão dos textos pelo cliente.
- [x] Lista de condições (SOP, endometriose, gestação, pós-parto, menopausa): cliente
      decidiu deixar o texto como está, sem a lista (2026-11-05).
- [x] Blog/artigos com edição pela cliente: implementado (Eleventy + Decap CMS).
- [x] Textos da home e dados de contato editáveis pelo painel: implementado e testado.
- [x] Publicação no Netlify: site no ar em endereço temporário `.netlify.app`.
- [ ] Primeiro artigo real da cliente (o modelo de demonstração deve ser apagado).
- [ ] Foto em alta resolução, se o cliente quiser usar mais tarde (a atual tem 200x200 px).
- [ ] Domínio próprio: registrar no Registro.br e configurar no Netlify.
- [ ] Instagram: cliente não possui.

## Publicação

- Site é 100% estático gerado (sem backend, sem banco): qualquer host estático serve.
- Caminho escolhido: Netlify + Decap CMS + Netlify Identity (git-gateway). Custo R$ 0
  além do domínio; domínio `.com.br` R$ 40/ano no Registro.br.
- GitHub Pages descartado pela cláusula de uso comercial na documentação oficial.
- Publicado no Netlify em endereço temporário; domínio próprio ainda pendente.
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
- 2026-11-07: painel ampliado para editar os textos da home e os dados de contato.
- 2026-11-07: seção de artigos renomeada para "Assuntos" na interface (nav, home, blog
  e painel). URL `/blog/` e nomes internos mantidos.
  Criados `src/_data/conteudo.json`, `src/_data/config.json` e `src/_data/site.js`;
  `src/index.njk` e `base.njk` passaram a ler esses dados; duas novas coleções no
  `admin/config.yml`. Testado com o backend local do Decap: formulário preenchido,
  edição salva e estrutura do JSON preservada; home conferida em 360/768/1440 px e
  Lighthouse 100/100/100 na home, no blog e no post.
