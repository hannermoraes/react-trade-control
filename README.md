# Gerenciador de Trades

![image](https://github.com/hannermoraes/trade-control/assets/101107412/c9aec853-9c6d-4e44-8192-d0ea6e45c4d8)


O Gerenciador de Trades é uma aplicação que permite aos usuários controlar e calcular suas operações de trading de forma eficiente. Com esta aplicação, os usuários podem informar o valor inicial de margem, a porcentagem desejada como objetivo a cada dia e o número de dias que desejam manter esse controle.

## Funcionalidades

- **Entrada de Valor Inicial de Margem**: Os usuários podem inserir o valor inicial de margem para suas operações de trading.
- **Porcentagem Diária**: Os usuários podem especificar a porcentagem que desejam buscar em suas operações de trading a cada dia.
- **Número de Dias**: Os usuários podem informar o número de dias que desejam manter o controle de suas operações.
- **Cálculo Automático**: Com base nas informações fornecidas, a aplicação calcula e exibe os resultados, incluindo o aumento diário e o valor final de margem.

## Tecnologias Utilizadas

- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Shadcn-ui](https://ui.shadcn.com/)

## Componentes Principais

### MainForm Component

O componente `MainForm` é o principal da aplicação. Ele permite aos usuários inserir o valor inicial de margem, a porcentagem diária desejada e o número de dias. A partir dessas informações, a aplicação calcula os resultados e os exibe para o usuário.

### CurrencyInput Component

O componente `CurrencyInput` é responsável pela entrada do valor inicial de margem. Ele exibe um campo de entrada de texto que permite aos usuários inserir valores monetários de forma intuitiva.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
