const fruits = [
    {
        name: "apple",
        price: 1.50
    },

    {
        name: "orange",
        price: 2.50
    },

    {
        name: "grape",
        price: 4.00
    }
];

const fruitWrapper = document.getElementById("fruitWrapper");
function renderFruit(){
    for (let i = 0; i < fruits.length; i++) {
        const fruit = fruits[i];
        const fruitCard = document.createElement("div");
        fruitCard.style.border = "1px black solid";
        fruitCard.style.marginTop = "4px";

        const fruitName = document.createElement("h3");
        fruitName.innerText = fruit.name;
        fruitCard.appendChild(fruitName);

        const fruitCost = document.createElement("p");
        fruitCost.innerText = "Cost: $" + fruit.price;
        fruitCard.appendChild(fruitCost);

        const fruitButtons = document.createElement("div");
        fruitCard.appendChild(fruitButtons);

        const deleteFruit = document.createElement("button");
        deleteFruit.innerText = "Delete Fruit";
        fruitButtons.appendChild(deleteFruit);

        deleteFruit.addEventListener("click", () =>{
            fruits.splice(i, 1);
            fruitWrapper.removeChild(fruitCard);
        })

        const changePrice = document.createElement("button")
        changePrice.innerText = "Change Price";
        fruitButtons.appendChild(changePrice);
        fruitWrapper.appendChild(fruitCard);

        changePrice.addEventListener("click", () =>{
            const price = 4 * (Math.random() + 1);
            fruit.price = price;
            fruitCost.innerText = "Cost: $" + price;
        })
    }
}
renderFruit();