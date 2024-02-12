const sweetNonCoffee = [
    {
        name: "Baileys Latte",
        price: 35
    },
    {
        name: "Matcha Latte",
        price: 35
    },
    {
        name: "Nutella Milk",
        price: 35
    },
    {
        name: "Taro Latte",
        price: 28
    },
    {
        name: "Lotus Biscoff",
        price: 32
    },
    {
        name: "Lychee Yakult",
        price: 30
    },
    {
        name: "Raspberry Tea",
        price: 30
    },
    {
        name: "Strawberry Milk",
        price: 32
    }
];

let htmlSweetMenu = '';
let htmlSweetPrice = '';
sweetNonCoffee.forEach((product) => {
    htmlSweetMenu += `
    <li class="menu-item">${product.name} </li>
    `
    htmlSweetPrice += `
    <li class="menu-price">${product.price} </li>
    `
})
document.querySelector('.menu-sweet-name'). innerHTML = htmlSweetMenu;
document.querySelector('.menu-sweet-price'). innerHTML = htmlSweetPrice;

const whiteCoffee = [
    {
        name: "Affogato",
        price: 28
    },
    {
        name: "Cappuccino",
        price: 35
    },
    {
        name: "Caramel Machiato",
        price: 32
    },
    {
        name: "Chiang Mai Latte",
        price: 35
    },
    {
        name: "Latte (Vanilla/Hazelnut)",
        price: 32
    },
    {
        name: "Flat White",
        price: 35
    },
    {
        name: "Magic",
        price: 32
    },
    {
        name: "Piccolo",
        price: 32
    },
    {
        name: "Snday Coffee",
        price: 30
    }
];
let htmlWhiteMenu = '';
let htmlWhitePrice = '';
whiteCoffee.forEach((product) => {
    htmlWhiteMenu += `
    <li class="menu-item">${product.name} </li>
    `
    htmlWhitePrice += `
    <li class="menu-price">${product.price} </li>
    `
})
document.querySelector('.menu-white-name'). innerHTML = htmlWhiteMenu;
document.querySelector('.menu-white-price'). innerHTML = htmlWhitePrice;


const coffeeBased = [
    {
        name: "Summer BIH",
        price: 32
    },
    {
        name: "Pillow Talk",
        price: 28
    },
    {
        name: "Walk in Dream",
        price: 30
    }
];

let htmlCoffeeMenu = '';
let htmlCoffeePrice = '';
coffeeBased.forEach((product) => {
    htmlCoffeeMenu += `
    <li class="menu-item">${product.name} </li>
    `
    htmlCoffeePrice += `
    <li class="menu-price">${product.price} </li>
    `
})
document.querySelector('.menu-coffee-name'). innerHTML = htmlCoffeeMenu;
document.querySelector('.menu-coffee-price'). innerHTML = htmlCoffeePrice;

const nonCoffee = [
    {
        name: "Did U Sleep Well",
        price: 30
    },
    {
        name: "Pink Skies",
        price: 28
    },
    {
        name: "Sleep Tight",
        price: 28
    },
    {
        name: "Sleep Tight",
        price: 30
    }
]

let htmlNonCoffeeMenu = '';
let htmlNonCoffeePrice = '';
nonCoffee.forEach((product) => {
    htmlNonCoffeeMenu += `
    <li class="menu-item">${product.name} </li>
    `
    htmlNonCoffeePrice += `
    <li class="menu-price">${product.price} </li>
    `
})
document.querySelector('.menu-nonCoffee-name'). innerHTML = htmlNonCoffeeMenu;
document.querySelector('.menu-nonCoffee-price'). innerHTML = htmlNonCoffeePrice;