# Publicação — Patricia Rodrigues Nutricionista

Guia passo a passo para colocar o site no ar, com o blog editável, em hospedagem gratuita.

## Antes de começar

- Conta de e-mail da cliente (será usada para Netlify e para o painel).
- Conta no GitHub no nome dela (gratuita).
- Conta no Netlify no nome dela (gratuita).
- Domínio .com.br no Registro.br (R$ 40/ano), se quiser endereço próprio.
- Os arquivos do projeto (esta pasta) já prontos.

Custo total: R$ 0 de hospedagem + R$ 40/ano de domínio.

## 1. Criar o repositório no GitHub

1. Acesse github.com e crie uma conta com o e-mail da cliente.
2. Clique em New repository.
3. Nome sugerido: patricia-rodrigues-nutricionista.
4. Visibilidade: private (o Netlify acessa mesmo assim).
5. Branch padrão: main.
6. Envie todos os arquivos da pasta do projeto para esse repositório (pela interface web: Add file > Upload files; ou pelo Git, se preferir).

Importante: o arquivo netlify.toml já está na raiz e define o build.

## 2. Criar o site no Netlify

1. Acesse app.netlify.com e crie a conta com o mesmo e-mail.
2. Add new site > Import an existing project.
3. Escolha GitHub e autorize o acesso ao repositório criado.
4. Selecione o repositório.
5. Configurações de build (já vêm do netlify.toml, confira):
   - Build command: npm run build
   - Publish directory: _site
   - Node version: 22
6. Clique em Deploy site.
7. Aguarde o build. O site fica em um endereço temporário (algo.netlify.app).

## 3. Habilitar o Netlify Identity

1. No painel do site no Netlify: Site configuration > Identity (ou Identity no menu).
2. Clique em Enable Identity.
3. Em Registration preferences, escolha Invite only (só quem for convidado entra).
4. Em External providers, deixe desmarcado (login por e-mail e senha).
5. (Opcional) Em Email templates, personalize a mensagem de convite.

## 4. Convidar a cliente

1. Na página Identity, clique em Invite users.
2. Digite o e-mail da cliente.
3. Ela recebe um e-mail com link para criar a senha.
4. Ela clica no link, define a senha e é redirecionada para /admin/.

## 5. Habilitar o Git Gateway

1. Ainda em Identity, abra a aba Services (ou Git Gateway).
2. Clique em Enable Git Gateway.
3. Isso permite que o painel grave os artigos no repositório do GitHub sem a cliente precisar de conta no GitHub.

## 6. Testar o painel

1. Acesse https://seu-site.netlify.app/admin/.
2. Faça login com o e-mail e a senha da cliente.
3. Clique em Novo Artigo.
4. Preencha título, data, tipo, resumo e o comentário.
5. Deixe Rascunho marcado para testar sem publicar.
6. Salve. O artigo deve aparecer na listagem do painel.
7. Desmarque Rascunho e salve: em 1 a 2 minutos o artigo aparece no site e na seção Últimos artigos da home.

## 7. Domínio próprio (.com.br)

1. No Registro.br, registre o domínio (ex.: patriciarodriguesnutri.com.br). Custo R$ 40/ano.
2. No Netlify: Domain management > Add custom domain > digite o domínio.
3. O Netlify mostra os registros DNS necessários (normalmente dois servidores de nome).
4. No Registro.br, em DNS, informe os servidores de nome do Netlify (ou crie os registros A/CNAME indicados).
5. Aguarde a propagação (até 24 horas). O HTTPS é ativado automaticamente.

## 8. Atualizar o endereço do site nos metadados

Depois que o domínio estiver ativo:

1. Abra src/_data/site.json.
2. Troque siteUrl para https://patriciarodriguesnutri.com.br (ou o domínio escolhido).
3. Faça commit/push. O Netlify reconstrói o site e as imagens dos artigos passam a ter endereço absoluto correto.

## 9. Checklist final

- [ ] Site abre no domínio com HTTPS.
- [ ] /admin/ abre o painel e o login funciona.
- [ ] Criar, editar e despublicar um artigo funciona.
- [ ] Imagens enviadas pelo painel aparecem no site.
- [ ] Lighthouse 100/100/100 na home, no blog e em um post.
- [ ] Botão do WhatsApp abre a conversa com a mensagem preenchida.

## Avisos importantes

- A cliente não precisa de conta no GitHub: o Git Gateway grava por ela.
- Não compartilhe a senha do painel. Se perder, use a recuperação de senha do Netlify Identity.
- O artigo de demonstração (modelo-artigo-comentado) está como rascunho. Apague-o pelo painel quando criar o primeiro artigo real.
- Imagens de artigos: use fotos próprias ou imagens com licença livre. Não reaproveite imagem de artigo de terceiros.
- Conteúdo de saúde é responsabilidade profissional da cliente: o site inclui aviso de que o conteúdo é informativo e não substitui consulta.

## Se algo der errado

- Painel não carrega: confira se o Git Gateway está ativo e se o branch é main.
- Login não abre: confira se o Netlify Identity está ativo e se o convite foi aceito.
- Imagem não aparece: confira se a pasta assets/img/blog foi criada no repositório após o upload.
- Build falha no Netlify: veja o log em Deploys; a causa mais comum é Node version diferente de 22.
