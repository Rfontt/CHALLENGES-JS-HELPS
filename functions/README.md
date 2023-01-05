# Funções

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions

Funções são blocos de códigos separados que podem ser chamados para o reaproveitamento do mesmo, além de realizar uma ação quando o mesmo é chamado, podendo retornar ou não algo para quem o chama.

```js
// Função que não retorna nada
function log() {
    console.log('My name is...');
}

// Função que retorna true ou false
function log(name) {
    if (name === "Test") {
        return true;
    }

    return false;
}
```