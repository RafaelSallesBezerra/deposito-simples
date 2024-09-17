# Depósito Simples

**Depósito Simples** é um aplicativo React desenvolvido para gerenciar vendas, controlar o estoque e gerar relatórios para depósitos de materiais de construção. O sistema oferece funcionalidades para facilitar o gerenciamento diário do depósito, como a atualização automática de estoque após vendas e a visualização de relatórios de vendas e lucro.

## Funcionalidades

- **Login**: Interface para autenticação de usuários.
- **Controle de Vendas**: Registro de vendas com cálculo automático do valor total com base na quantidade e preço dos produtos.
- **Controle de Estoque**: Gerenciamento do estoque com atualização automática após cada venda.
- **Relatórios**: Geração de relatórios com informações detalhadas sobre vendas realizadas, estoque atualizado e lucro gerado.

## Como Usar

1. Faça o **login** para acessar as funcionalidades do sistema.
2. Na **tela principal**, navegue entre as opções de controle de vendas, controle de estoque e relatórios.
3. Em **Controle de Vendas**, registre as vendas com o nome do produto, quantidade e valor unitário. O estoque será atualizado automaticamente.
4. Em **Controle de Estoque**, visualize os produtos e seus respectivos níveis de estoque atualizados, junto com o valor de cada item.
5. Em **Relatórios**, consulte as vendas realizadas no dia, o estoque atualizado e o lucro gerado, calculado com base nas vendas e no valor unitário dos produtos.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção da interface do usuário.
- **React Router**: Para navegação entre as páginas.
- **Context API**: Para gerenciar o estado global do aplicativo (vendas e estoque).

## Como Executar o Projeto Localmente

### Pré-requisitos

- Node.js (>= 14.x)
- npm (>= 6.x)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/RafaelsallesBezerra/deposito-simples.git

Navegue até o diretório do projeto:

bash

cd deposito-simples

Instale as dependências:

bash

  - npm install

Inicie o aplicativo:

bash

 - npm start

O aplicativo será executado no navegador em http://localhost:3000.

Estrutura do Projeto

deposito-simples/
├── public/                 # Arquivos públicos
├── src/                    # Código fonte
│   ├── App.js              # Componente principal do aplicativo
│   ├── AppContext.js       # Contexto global para gerenciamento de estado
│   ├── pages/              # Páginas do aplicativo
│   │   ├── Login.js        # Tela de login
│   │   ├── Main.js         # Tela principal
│   │   ├── SalesControl.js # Controle de vendas
│   │   ├── StockControl.js # Controle de estoque
│   │   └── Reports.js      # Relatórios
├── package.json            # Configurações do npm e dependências
└── README.md               # Documentação do projeto


Contribuindo

Contribuições são bem-vindas! Se você tiver alguma sugestão, sinta-se à vontade para abrir uma issue ou enviar um pull request.
Licença

Este projeto é licenciado sob a MIT License. Consulte o arquivo LICENSE para mais detalhes.

Esse texto oferece uma visão clara do projeto e orientações sobre como executá-lo localmente. Você pode adaptá-lo conforme necessário!

