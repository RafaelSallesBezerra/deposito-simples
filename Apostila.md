Apostila de Instalação e Uso do Aplicativo Depósito Simples
Sumário
   
    1. Requisitos do Sistema
    2. Instalação
        ◦ Clonando o Repositório
        ◦ Instalando Dependências
    3. Configurando o Ambiente
    4. Executando o Aplicativo
    5. Funcionalidades do Sistema
        ◦ Login
        ◦ Controle de Vendas
        ◦ Controle de Estoque
        ◦ Relatórios
    6. Considerações Finais

1. Requisitos do Sistema

Para instalar e rodar o aplicativo Depósito Simples, você precisa dos seguintes requisitos:
    • Node.js (versão 12 ou superior)
    • NPM (Node Package Manager)
    • Git (para clonar o repositório)
    • Navegador atualizado (Google Chrome, Firefox, etc.)
    
2. Instalação

Clonando o Repositório
Primeiro, você deve clonar o repositório do aplicativo Depósito Simples para a sua máquina. Abra o terminal e execute o seguinte comando:
bash
- git clone https://github.com/RafaelsallesBezerra/deposito-simples.git

Instalando Dependências
Depois de clonar o repositório, navegue até o diretório do projeto e instale as dependências necessárias com o seguinte comando:
cd deposito-simples
npm install

Este comando instalará todas as bibliotecas e pacotes necessários para rodar o aplicativo. 

3. Configurando o Ambiente

Certifique-se de que o Node.js e o NPM estão instalados corretamente no seu sistema. Você pode verificar a versão deles com os comandos:
bash
- node -v
- npm -v


Se tudo estiver correto, a instalação está pronta para seguir. 

4. Executando o Aplicativo

Para rodar o aplicativo em ambiente de desenvolvimento, utilize o seguinte comando no diretório raiz do projeto:
bash 

- npm start

Isso iniciará o servidor de desenvolvimento e abrirá o aplicativo no seu navegador padrão no endereço http://localhost:3000. 

5. Funcionalidades do Sistema

Login

Quando o aplicativo é iniciado, a primeira tela que aparece é a de Login. Nela, você deve autenticar o usuário para acessar as funcionalidades principais do sistema. O login é simples, e uma vez autenticado, você será redirecionado para a Tela Principal.

Controle de Vendas

Na tela de Controle de Vendas, você pode:
    • Adicionar vendas de produtos.
    • Informar o nome do produto, a quantidade vendida e o preço de venda.
    • As vendas realizadas atualizam automaticamente o estoque.

Controle de Estoque

Na tela de Controle de Estoque, é possível:
    • Ver os produtos cadastrados no estoque.
    • Visualizar a quantidade disponível e o preço unitário de cada produto.
    • O estoque é atualizado automaticamente conforme as vendas são realizadas.

Relatórios

Na tela de Relatórios, você pode:
    • Visualizar um resumo das vendas realizadas.
    • Ver o estoque atualizado dos produtos após as vendas.
    • O relatório mostra a diferença entre o valor da venda e o custo do produto no estoque, apresentando o lucro obtido.

6. Considerações Finais

O aplicativo Depósito Simples é uma ferramenta voltada para o gerenciamento de vendas e controle de estoque de forma eficiente. Para quaisquer dúvidas ou contribuições, consulte o código fonte ou entre em contato com o desenvolvedor.
