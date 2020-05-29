# Animate
Classe em JavaScript feita para facilitar o trabalho com animações básicas em HTML e CSS.

## Introdução
Para a classe executar as animações, você não precisa manipular nada do seu CSS. Dentro do próprio script, as regras CSS para as animações já estão configuradas.

## Como utilizar
Para usar o script, você deve adicioná-lo a pasta do seu projeto e seguir os passos abaixo:
 
  1. Como essa classe é um módulo, para você conseguir utilizá-la em seu projeto precisará utilizar o import do JavaScript. 
     Esse recurso está presente na linguagem desde o ES2016. 
     
     **Você pode ler mais sobre na documentação da MDN: [Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import). :smile: :+1:**
     
     Ou seja, adicione o `type="module"` na tag HTML do script que você irá importar a classe Animate.
     
     `<script type="module" src="js/exemplo.js"></script>`
     
 2. Agora é seu script já está pronto para receber imports. Seguindo o exemplo acima, dentro do nosso arquivo `exemplo.js` vamos importar a classe animate.
 
    `import Animate from "Animate.js";`
    
3. Pronto! Agora você já pode instanciar a classe Animate em algum objeto do seu script e utilizar suas funcionalidades :v:
