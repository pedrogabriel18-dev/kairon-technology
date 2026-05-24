# Kairon Technology — Site Institucional

Site institucional premium para a **Kairon Technology**, empresa fictícia internacional de segurança e inteligência.

Feito por Pedro Gabriel, com a ajuda da Claude Code IA.
#believeinyourself #acrediteemsimesmo

---

## Como instalar e rodar localmente

1. Baixe o arquivo `.zip` do projeto
2. Extraia a pasta em qualquer lugar do seu computador
3. Abra o arquivo `index.html` no navegador

Não precisa de servidor, instalação, Node.js ou build. Abre direto.

---

## Como fazer deploy no Vercel

### Opção A — Via GitHub (recomendado, deploy automático)

1. Crie uma conta em [github.com](https://github.com) se não tiver
2. Crie um repositório novo (pode ser privado)
3. Faça upload de todos os arquivos do projeto para o repositório
4. Crie uma conta em [vercel.com](https://vercel.com)
5. Clique em **Add New Project**
6. Conecte sua conta do GitHub e selecione o repositório da Kairon
7. Clique em **Deploy**
8. Pronto — o site fica online em poucos segundos

A partir daí, toda vez que você atualizar um arquivo no GitHub, o Vercel republica automaticamente.

### Opção B — Upload direto no Vercel

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Na dashboard, clique em **Add New Project**
3. Escolha **Browse** e selecione a pasta do projeto no seu computador
4. Clique em **Deploy**

---

## Estrutura de arquivos

```
kairon-technology/
│
├── index.html                  ← Página inicial
├── about.html                  ← Sobre a empresa
├── services.html               ← Serviços
├── operations.html             ← Hub de operações
├── operation-sentinel.html     ← Operação Sentinel
├── project-atlas.html          ← Projeto Atlas
├── black-shield.html           ← Black Shield Initiative
├── team.html                   ← Hub de divisões
├── sentinel-unit.html          ← Divisão Sentinel
├── vanguard-unit.html          ← Divisão Vanguard
├── cipher-division.html        ← Divisão Cipher
├── phantom-division.html       ← Divisão Phantom (tema vermelho)
├── atlas-support-command.html  ← Divisão Atlas (tema dourado)
├── orion-intelligence-cell.html← Divisão Orion (tema verde)
├── technology.html             ← Plataforma tecnológica
├── careers.html                ← Carreiras
├── newsroom.html               ← Notícias
├── contact.html                ← Contato
├── privacy.html                ← Política de privacidade
├── terms.html                  ← Termos de uso
├── security.html               ← Padrões de segurança
├── accessibility.html          ← Acessibilidade
│
├── css/
│   ├── style.css               ← Estilos principais
│   ├── responsive.css          ← Responsividade (mobile/tablet)
│   └── images.css              ← Tratamento de imagens
│
├── js/
│   ├── cursor.js               ← Cursor tático (mira)
│   ├── favicon.js              ← Favicon centralizado
│   ├── theme-toggle.js         ← Modo claro/escuro
│   ├── language-switcher.js    ← Troca de idioma (7 idiomas)
│   ├── components.js           ← Navbar e footer compartilhados
│   └── main.js                 ← Interações gerais
│
└── assets/
    └── images/                 ← Todas as imagens e logos
```

---

## Imagens necessárias

Coloque todas as imagens dentro de `assets/images/` com os nomes exatos abaixo.

### Logos
| Arquivo | Uso |
|---|---|
| `logokaironbranco.jpg` | Logo branca — tema claro (navbar/footer) |
| `logokaironpreto.jpg` | Logo preta — tema escuro (navbar/footer) |
| `logokaironvermelha.jpg` | Logo vermelha — Phantom Division |
| `logokaironamarela.jpg` | Logo amarela — Atlas Support Command |
| `logokaironverde.jpg` | Logo verde — Orion Intelligence Cell |
| `logokaironcinza.jpg` | Logo cinza — elementos neutros |
| `logokaironfavicon.jpg` | Favicon |

### Fotos das páginas (01–58)
| Arquivo | Onde aparece |
|---|---|
| `01-home-hero-operator.png` | Hero da página inicial |
| `02-about-headquarters-belfast.png` | Sede Belfast — About |
| `03-services-physical-security.png` | Serviço Physical Security |
| `04-services-executive-protection.png` | Serviço Executive Protection |
| `05-services-cyber-intelligence.png` | Serviço Cyber Intelligence |
| `06-services-tactical-operations.png` | Serviço Tactical Operations |
| `07-services-psychological-security.png` | Serviço Psychological Security |
| `08-operations-sentinel-why.png` | Operação Sentinel — Mandato |
| `09-operations-sentinel-how.png` | Operação Sentinel — Abordagem |
| `10-operations-sentinel-result.png` | Operação Sentinel — Resultado |
| `11-operations-atlas-why.png` | Project Atlas — Mandato |
| `12-operations-atlas-how.png` | Project Atlas — Abordagem |
| `13-operations-atlas-result.png` | Project Atlas — Resultado |
| `14-operations-black-shield-why.png` | Black Shield — Mandato |
| `15-operations-black-shield-how.png` | Black Shield — Abordagem |
| `16-operations-black-shield-result.png` | Black Shield — Resultado |
| `17-team-sentinel-unit.png` | Card Sentinel Unit — Team |
| `18-team-vanguard-unit.png` | Card Vanguard Unit — Team |
| `19-team-cipher-division.png` | Card Cipher Division — Team |
| `20-technology-drone.png` | Drones — Technology |
| `21-technology-command-center.png` | Command Centre — Technology |
| `22-technology-server-infrastructure.png` | Servidores — Technology |
| `23-technology-monitoring-station.png` | Monitoramento — Technology |
| `24-contact-office-entrance.png` | Entrada do escritório — Contact |
| `25-home-secondary-banner.jpg` | Banner secundário — Home |
| `26-about-banner.jpg` | Banner — About |
| `27-services-banner.jpg` | Banner — Services |
| `28-operations-banner.jpg` | Banner — Operations |
| `29-team-banner.png` | Banner — Team |
| `30-technology-banner.jpeg` | Banner — Technology |
| `31-careers-banner.jpeg` | Banner — Careers |
| `32-newsroom-banner.jpeg` | Banner — Newsroom |
| `33-contact-banner.jpeg` | Banner — Contact |
| `34-office-london.jpeg` | Escritório Londres — About |
| `35-office-washington.jpeg` | Escritório Washington — About |
| `36-office-berlin.jpeg` | Escritório Berlim — About |
| `37-office-paris.jpeg` | Escritório Paris — About |
| `38-office-dubai.jpeg` | Escritório Dubai — About |
| `39-office-riyadh.jpeg` | Escritório Riad — About |
| `40-office-singapore.jpeg` | Escritório Singapura — About |
| `41-office-tokyo.jpeg` | Escritório Tóquio — About |
| `42-office-sydney.jpeg` | Escritório Sydney — About |
| `43-office-sao-paulo.jpeg` | Escritório São Paulo — About |
| `44-office-cape-town.jpeg` | Escritório Cidade do Cabo — About |
| `45-office-mumbai.jpeg` | Escritório Mumbai — About |
| `46-office-toronto.jpeg` | Escritório Toronto — About |
| `47-office-zurich.jpeg` | Escritório Zurique — About |
| `48-office-warsaw.jpeg` | Escritório Varsóvia — About |
| `49-office-seoul.jpeg` | Escritório Seoul — About |
| `50-office-lagos.jpeg` | Escritório Lagos — About |
| `51-office-mexico-city.jpeg` | Escritório Cidade do México — About |
| `52-team-phantom-division.jpeg` | Phantom Division — Team + página |
| `53-jonathan-reeves.jpeg` | Jonathan Reeves — Leadership |
| `54-adriana-souza.jpeg` | Adriana Sousa — Leadership |
| `55-dr-marcus-yoon.jpeg` | Dr. Marcus Yoon — Leadership |
| `56-belfast-map.jpeg` | Mapa Belfast — Contact |
| `57-phantom-nightvision.jpeg` | Phantom — visão noturna |
| `58-phantom-breach.jpeg` | Phantom — operação de entrada |
| `59-security-architecture-map.jpeg` | Arquitetura de segurança — Technology |
| `60-office-oslo.jpeg` | Escritório Oslo — About |
| `61-office-hongkong.jpeg` | Escritório Hong Kong — About |
| `62-team-atlas-support.jpeg` | Atlas Support Command — Team + página |
| `63-team-orion-intelligence.jpeg` | Orion Intelligence Cell — Team + página |
| `64-news-seoul-office.jpeg` | Notícia Seoul — Newsroom |

---

## Funcionalidades

| Funcionalidade | Arquivo |
|---|---|
| Cursor tático (mira) | `js/cursor.js` |
| Modo claro/escuro | `js/theme-toggle.js` |
| Troca de idioma | `js/language-switcher.js` |
| Navbar + footer automáticos | `js/components.js` |
| Cookie banner | `js/components.js` |
| Modais e lightbox | `js/main.js` |
| Modo Phantom/Atlas/Orion no formulário | `js/main.js` |
| Favicon centralizado | `js/favicon.js` |

### Idiomas disponíveis
English · 中文 · हिंदी · Español · العربية · Português (Brasil) · Português (Portugal)

### Temas de divisão (formulário de contato)
Ao selecionar uma divisão no formulário, o esquema de cores muda automaticamente:
- **Phantom Division** → vermelho `#B22222`
- **Atlas Support Command** → dourado `#C9A227`
- **Orion Intelligence Cell** → verde `#1F7A1F`

---

## Para atualizar o favicon

Edite apenas `js/favicon.js` e troque o nome do arquivo:
```js
link.href = 'assets/images/SEU-NOVO-FAVICON.jpg';
```

---

## Suporte a navegadores

Chrome · Firefox · Safari · Edge — desktop e mobile.
O cursor tático não aparece em dispositivos touch (comportamento esperado).

---

*Kairon Technology — Protecting Tomorrow*
