📘 Pokedex React com PokeAPI
Uma Pokédex simples, moderna e leve, feita com React, TypeScript, Vite, Axios e React Router, que consome dados diretamente da PokeAPI.

EXPERIMENTE AQUI: https://pokedex-thales.netlify.app/ 

Explore o mundo Pokémon de forma divertida e prática! ✨

🚀 O que esse projeto faz?
Essa Pokédex foi desenvolvida como um projeto de aprendizado, mas já traz diversas funcionalidades bacanas:

✅ Funcionalidades
🔎 Listagem de Pokémons em formato de grade

🌀 Scroll infinito para carregar mais Pokémons conforme você desce a página

📄 Página de detalhes ao clicar em um Pokémon

📊 Informações completas, como:

Nome, ID, imagem oficial

Tipos, altura, peso

Habilidades e estatísticas base

🌐 Navegação com React Router DOM

⚡ Carregamento sob demanda (Lazy Loading) para melhor performance

🔐 Tipagem segura com TypeScript

⚙️ Projeto moderno com Vite para desenvolvimento rápido

🧰 Tecnologias utilizadas
Ferramenta	Descrição
React 18+	Biblioteca para construir UIs
TypeScript	Superset do JS com tipagem estática
Vite	Bundler ultra-rápido
Axios	Cliente HTTP para requisições
React Router	Navegação entre páginas
PokeAPI	Fonte oficial de dados dos Pokémons
CSS Modular	Estilização separada por componente
🧑‍💻 Como rodar o projeto localmente
📦 Pré-requisitos
Antes de tudo, certifique-se de ter instalado:

Node.js (recomendo a versão LTS)

npm ou yarn

📁 Passo a passo
bash
Copy
Edit
# 1. Clone o repositório
git clone https://github.com/thalesleall/Desenvolvimento-Web-1.git
cd Desenvolvimento-Web-1
cd TRAB

# 2. Instale as dependências
npm install
# ou
yarn install

# 3. Rode o servidor de desenvolvimento
npm run dev
# ou
yarn dev
Abra seu navegador e vá até http://localhost:5173

🗂️ Estrutura do projeto
php
Copy
Edit
.
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/         # Componentes reutilizáveis (se houver)
│   ├── pages/              # Páginas principais
│   │   ├── Home.tsx        # Página inicial (lista de Pokémons)
│   │   ├── Home.css        # Estilos da página Home
│   │   ├── Pokemon.tsx     # Página de detalhes do Pokémon
│   │   └── PokemonDetail.css # Estilos da página de detalhes
│   ├── types/              # Tipos TypeScript
│   │   └── pokemon.ts      # Tipos relacionados a Pokémon
│   ├── App.tsx             # Rotas da aplicação
│   ├── main.tsx            # Ponto de entrada do React
│   └── index.css           # Estilos globais
├── index.html              # HTML base
├── package.json            # Scripts e dependências
├── tsconfig.json           # Configuração do TypeScript
└── vite.config.ts          # Configuração do Vite
📡 Fonte de Dados
Utilizamos a incrível PokeAPI v2 – uma API pública e gratuita que fornece todos os dados do mundo Pokémon!

💡 Ideias para melhorias futuras
🔍 Busca por nome ou ID

🧩 Filtros por tipo, geração, etc.

📑 Paginação tradicional

🔁 Exibição da cadeia de evolução

🎨 UI/UX mais elaborada (animações, responsividade)

📦 Gerenciador de estado (ex: Zustand ou Redux Toolkit)

🧪 Testes automatizados

🌆 Imagens:

![image](https://github.com/user-attachments/assets/c905ed43-c38f-49af-832f-6b6be600d79d)

![image](https://github.com/user-attachments/assets/f7c68905-9243-45a4-ada6-03debdadf0bc)


🤝 Contribuindo
Fique à vontade para abrir issues, sugerir melhorias ou mandar aquele pull request. Toda ajuda é bem-vinda! 🧡

📃 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e compartilhar!

Feito com 💙 por THALES LEAL

