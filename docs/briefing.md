# Briefing — Patricia Rodrigues Nutricionista

Registrado em: 2026-11-05
Atualizado em: 2026-11-07
Contrato do que foi combinado. Alterações aqui devem ser combinadas antes de ir ao código.

## Identidade (Bloco A)

| Item | Resposta |
|---|---|
| Nome | Patricia Rodrigues Nutricionista |
| O que faz | Atendimento nutricional acolhedor e individualizado, com escuta ativa e atenção às necessidades, dificuldades e objetivos de cada paciente. Planejamento alimentar baseado na ciência, respeitando rotina, preferências e realidade de cada pessoa, para promover saúde, autonomia e resultados sustentáveis. |
| Público | Mulheres em cada fase da vida (foco do atendimento); homens também são atendidos; pessoas que querem emagrecer; pessoas que treinam (academia) |
| Logo | Enviado pelo cliente (arquivos na raiz do projeto) |
| Frase de destaque | "Nutrição é mais combinação, adequação e inclusão" |
| Título / posicionamento | "Nutrição para a saúde da mulher, em cada fase da vida" (pedido em 2026-11-05) |

## Visual (Bloco B)

| Item | Resposta |
|---|---|
| Tema | Claro |
| Tom | Acolhedor + profissional |
| Referências | physicus.com.br (estrutura: header com CTA, abertura, cards, sobre, seção de contato e rodapé em colunas); Poytara (respiro das seções e hierarquia de títulos — sem reutilizar a paleta verde/preto); siteinspire (galeria, usada só como calibragem) |
| Fotos | Sem foto no hero (autorizado). Retrato existente tem 200x200 px, insuficiente para uso grande. Banco de imagens dispensado. |
| Cores do kit | `#f4f2f2` (off-white), `#8ca296` (verde sálvia), `#912525` (vinho) |
| Tipografia do kit | Autography (manuscrita) + Modern sans light |
| Tipografia escolhida | Parisienne (Google Fonts, OFL) no lugar da Autography; Jost (Google Fonts, OFL) no lugar da sans |

## Conteúdo e escopo (Bloco C)

| Item | Resposta |
|---|---|
| Seções pedidas | Sobre mim; Como funciona o atendimento; Contato |
| Tratamento | "Você", português neutro |
| Textos | Escritos pelo agente, a partir dos dados reais do LinkedIn enviados pelo cliente |
| Conversão | Botão de WhatsApp — (15) 99611-0107 (formulário removido a pedido em 2026-11-07) |
| Atendimento | Presencial em Ibiúna/SP ou online por vídeo (confirmado em 2026-11-05) |
| Blog | Aprovado. Área de artigos com edição pela cliente, integrada ao site (artigos próprios e comentários sobre artigos lidos). Implementado com Eleventy + Decap CMS no Netlify (login por e-mail/senha). Custo R$ 0 além do domínio. |
| Edição do site | A cliente edita os textos da home e os dados de contato (telefone, WhatsApp, endereço, horário) pelo painel `/admin/`, sem tocar no código. Implementado em 2026-11-07 com as coleções "Página inicial" e "Configurações". |
| Vocabulário | Usar "agendar", nunca "marcar" (pedido em 2026-11-05) |
| Contato | Botão direto para o WhatsApp, sem formulário e sem backend |
| Domínio / hospedagem | Site publicado no Netlify; domínio próprio ainda não registrado |
| Valor da consulta | R$ 260,00 — **não publicar** (decisão do cliente) |

## Técnico (Bloco D)

| Item | Resposta |
|---|---|
| Páginas | Home institucional + blog (listagem e posts) |
| Tecnologia | HTML + CSS puro; JS mínimo (menu e ano). Site gerado com Eleventy 3 (Nunjucks/Markdown) para permitir o blog editável; painel Decap CMS no Netlify. Cliente autoriza otimizar com outra linguagem se necessário. |

## Dados reais para o site (fonte: prints do LinkedIn enviados pelo cliente)

- CRN: **84548/P**
- Graduação em Nutrição — Cruzeiro do Sul Virtual (2020–2023)
- Pós-graduação em Nutrição Clínica — Pratiensino (fev/2024–fev/2026)
- Responsável técnica — Casa de Santa Rita (ILPI), Ibiúna/SP, desde abr/2024
- Nutricionista autônoma desde dez/2023 (presencial em Ibiúna e online por vídeo)
- Nutricionista clínica — Hospital e Maternidade São Francisco, São Roque/SP (ago/2024–jan/2025)
- Cursos: doenças genéticas; nutrição nas doenças crônicas não transmissíveis; fisiologia aplicada à nutrição clínica; estudos de caso em nutrição clínica VII; colóquio científico sobre qualidade das evidências
- Endereço: Rua 15 de Novembro, Nº 15 — Centro, Ibiúna/SP, CEP 18150-045
- Horário: segunda a sexta, das 9h às 18h, com horário agendado
- Instagram: não possui — o site não tem esse link
- Áreas: saúde da mulher, emagrecimento, hipertrofia, planos alimentares personalizados, reeducação alimentar, avaliação física
- App de acompanhamento: Amplinutri

## Fora do escopo

- Publicar preço.
- Área de login para pacientes e catálogo (o login do `/admin/` é só da cliente).
- Blog: implementado como parte da entrega (ver acima). A edição é feita pela cliente no painel; a publicação dispara a reconstrução do site.
- Domínio próprio: ainda não registrado; o site já está publicado no Netlify.
- Uso de imagem gerada por IA ou banco de imagens.
