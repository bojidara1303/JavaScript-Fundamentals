function orders(product, quality) {
    let price = 0;
    if (product === "coffee") {
        price = quality * 1.50;
    } else if (product === "water") {
        price = quality * 1.00;
    } else if (product === "coke") {
        price = quality * 1.40;
    } else if (product === "snack") {
        price = quality * 2.00
    }
    console.log(price.toFixed(2))
}

orders("water", 5)
orders("coffee", 2)