Projeto Formulário de Contato
Este projeto é um formulário de contato simples, criado utilizando HTML e CSS. Também será incorporado JavaScript para funcionalidades adicionais, como validação de formulário e interatividade.

Visão Geral do Projeto
O formulário de contato inclui os seguintes campos:

Nome (obrigatório)
Sobrenome (obrigatório)
Email (obrigatório)
Tipo de Consulta (botões de rádio: Consulta Geral ou Solicitação de Suporte)
Mensagem (obrigatório)
Checkbox de Consentimento (o usuário deve concordar em ser contatado)
O formulário utiliza uma estilização básica com CSS para garantir uma aparência limpa e moderna. As cores são projetadas para transmitir calma e profissionalismo, com o verde como a cor principal. O layout é responsivo, proporcionando uma melhor experiência ao usuário.

Estrutura
HTML
A estrutura do projeto é composta por um <form> dentro da tag <main>, e os campos de entrada estão organizados em divs para facilitar o layout e o espaçamento. Cada campo possui rótulos com validação básica, utilizando o atributo required e mensagens de validação através do title.

CSS
Os estilos estão definidos em uma folha de estilos externa (styles.css). Os principais elementos de estilo incluem:

Uso da fonte Karla (bold e regular).
Um fundo branco limpo para o formulário, com acentos em verde nas bordas, títulos e botões.
Flexbox é utilizado para o layout, especialmente para organizar os campos de nome e sobrenome lado a lado.
Efeitos de hover nos botões para melhorar a interatividade.
JavaScript (a ser adicionado)
O JavaScript será integrado para:

Melhorar a validação do formulário (por exemplo, verificar o formato de email).
Adicionar interatividade, como fornecer feedback em tempo real para as entradas dos usuários.
Gerenciar o envio do formulário, potencialmente enviando os dados para uma API de backend.
Arquivos
index.html: Contém a estrutura HTML do formulário.
styles.css: Define os estilos e o layout para o formulário de contato.
assets/: Contém os arquivos necessários, como imagens e fontes.
Como Executar
Faça o download ou clone o repositório.
Abra o arquivo index.html em qualquer navegador para visualizar o formulário.
(Opcional) Modifique ou estenda a funcionalidade em JavaScript, adicionando um arquivo script.js para comportamentos personalizados.
Melhorias Futuras
Adicionar validação e interatividade com JavaScript.
Implementar funcionalidade de backend para processar o envio do formulário.