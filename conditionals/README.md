# IF / ELSE / SWITCH

https://www.devmedia.com.br/javascript-if-else-criando-scripts-com-estruturas-condicionais/39686

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch

São estruturas condicionais, as quais nos ajudam a verificar determinadas situações que podem ocorrer no nosso site.

# Exemplo

```js
const name = "Kaue";
const age = 20;

if (name === "Kauê" && age === 20) {
    console.log('true');
} else {
    console.log('false');
}

switch (age) {
    case 20:
        console.log(`${name} has 20 years`);
        break;
    case 10:
        console.log(`${name} has 10 years`);
    default:
        console.log('false');
}
```