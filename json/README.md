# O que ver antes de resolver desafios referentes a JSON?

- ARRAY
- OBJETO
- LOOPS (MAP, FOREACH)

# JSON

https://rockcontent.com/br/blog/json/#:~:text=JSON%2C%20que%20significa%20JavaScript%20Object,servidor%20ou%20em%20aplicativos%20m%C3%B3veis.

JSON é uma estrutura de dados que armazena objetos com CHAVE-VALOR (KEY-VALUE).

# Exemplo

> Os objetos ficam dentro de um array

**nesse caso as chaves são: name, age... e os valores são: Kauê, 20 | Nathan, 21 | Sávio, 20
```json
[
    { 
        "name": "Kauê",
        "age": 20
    },

    { 
        "name": "Nathan",
        "age": 21
    },

    { 
        "name": "Sávio",
        "age": 20
    }
]
```

> Para pegar todos os nomes que existem nesse JSON usamos os métodos de loop, podendo ser eles: map, forEach, filter, entre outros.

```js
const json = [
    { 
        "name": "Kauê",
        "age": 20
    },

    { 
        "name": "Nathan",
        "age": 21
    },

    { 
        "name": "Sávio",
        "age": 20
    }
]

// Examplo com o forEach
json.forEach ((item) => console.log(item.name));

// output:
// Kauê
// Nathan
// Sávio
```

# Dica

Estude sobre:

- forEach;
- map;
- filter;
- reduce.