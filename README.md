# União Pinturas — Site Institucional

Site estático da União Pinturas (pintura predial e grandes obras no Sudoeste do Paraná).

## Como publicar no GitHub + Vercel

### 1. Repositório já criado
Este repositório já contém o código do site.

### 2. Adicionar as imagens
Crie a pasta `images/` na raiz do repositório e adicione os arquivos com estes nomes exatos:

- `images/hero.jpg`
- `images/servicos.jpg`
- `images/processo.jpg`
- `images/sobre.jpg`
- `images/cta.jpg`

Você pode arrastar e soltar as imagens diretamente no GitHub (botão "Add file" → "Upload files").

### 3. Publicar na Vercel
1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub.
2. Clique em **Add New… → Project**.
3. Importe o repositório `uniao-pinturas`.
4. Deixe as configurações padrão (Framework Preset: Other / sem build).
5. Clique em **Deploy**.

Pronto. O site estará no ar em poucos segundos.

### 4. Ajustar domínio e SEO
Depois de publicar, abra os arquivos e substitua `SEU-DOMINIO` pelo domínio real da Vercel (ou domínio próprio):

- `index.html` → meta `og:url`, `og:image` e o JSON-LD
- `robots.txt` → linha do Sitemap
- `sitemap.xml` → URL da página

## Como trocar textos ou imagens depois

- **Textos**: edite o arquivo `index.html`.
- **Estilos**: edite `css/style.css`.
- **Comportamento (menu, FAQ, animações)**: edite `js/main.js`.
- **Imagens**: substitua os arquivos na pasta `images/` mantendo os mesmos nomes.

## Contato
WhatsApp: +55 46 9911-1071  
Responsável: Marcos Antonio Valkarenghi
