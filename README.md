# 🚀 Projeto 02 - Busca de Perfil no GitHub

Este é um projeto React que permite buscar e visualizar informações de perfis públicos do GitHub. O aplicativo consome a API do GitHub para exibir dados como nome, foto de perfil e bio do usuário, seguindo o design proposto no Figma.

---

## 📝 Objetivo

O desafio consiste em desenvolver uma aplicação React que permita buscar perfis do GitHub e exibir informações do usuário conforme o layout fornecido.

---

## 🔗 Link do Layout no Figma

Acesse o layout do projeto no Figma clicando no link abaixo:

[Layout no Figma](https://www.figma.com/proto/DqtFxC6312M32mLt8FpJjq/inovation-class?page-id=22%3A2864&node-id=22-4293&viewport=359%2C115%2C0.25&t=SHsEqEgaMrXGMKwv-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=22%3A4293&show-proto-sidebar=1)

---

## 🎯 Funcionalidades

- **Campo de Busca**: O usuário digita o nome de um perfil do GitHub para buscar informações.
- **Exibição de Dados**: Mostra o nome, foto de perfil e bio do usuário.
- **Mensagens de Erro**: Exibe mensagens apropriadas caso o perfil não seja encontrado.
- **Design Personalizado**: Interface estilizada conforme o layout do Figma.
- **Experiência do Usuário (opcional)**: Melhorias como spinner de carregamento e efeitos visuais.

---

## ✅ Requisitos para o Desenvolvimento

1. Criar um campo de busca para o usuário digitar o nome de um perfil do GitHub.
2. Consumir a API do GitHub e exibir os seguintes dados do usuário:
    - Nome do usuário.
    - Foto de perfil.
    - Bio.
3. Exibir mensagens de erro caso o perfil não seja encontrado.
4. Estilizar a aplicação conforme o design do Figma.
   - É permitido o uso de frameworks CSS como **Bootstrap**, **TailwindCSS** ou outros.
5. (Opcional) Melhorar a experiência do usuário com:
    - Efeitos visuais.
    - Indicador de carregamento durante a requisição.

---

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **CSS/TailwindCSS (opcional)**: Estilização personalizada para a interface.
- **API do GitHub**: Fonte de dados do projeto.

---

## 📁 Estrutura do Projeto

```
src/
├── assets/
│   └── images/         # Imagens utilizadas no projeto
├── components/
│   └── Loading.jsx     # Componente de carregamento (opcional)
│   └── ProfileCard.jsx # Componente para exibir informações do perfil
├── App.jsx             # Componente principal da aplicação
├── App.css             # Estilos globais
└── index.js            # Ponto de entrada do React
```

---

## 🔧 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- Gerenciador de pacotes (npm ou yarn)

### Passos

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/jveiiga/api-github-avanti.git
   cd api-github-avanti
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Abra o navegador** e acesse:
   ```
   http://localhost:5173
   ```

---

## 🐛 Tratamento de Erros

- **Usuário não encontrado**: Exibe uma mensagem amigável caso o nome de usuário não exista.
- **Limite de requisições excedido**: Caso a API do GitHub retorne um erro 403, sugere ao usuário tentar novamente mais tarde.

---

## 📧 Contato

Feito com 💻 por [Jeferson Veiga](https://github.com/jveiiga).  
**Email:** jeferson.veiiga@icloud.com