const json = [
    { product: "notebook", category: "technology"}, 
    { product: "iphone", category: "technology"},
    { product: "tenis", category: "clother"},
];

json.forEach((item) => console.log(item.product));

const itemsTechnologies = json.filter((item) => item.category === "technology");

console.log(itemsTechnologies);

const changeProductName = itemsTechnologies.map((item) => {
    if (item.category === "technology") {
        item.product = "technology"
    }

    return item;
});

console.log(changeProductName);