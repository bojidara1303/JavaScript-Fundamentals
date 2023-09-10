function orders(product, quality) {
    let price = 0;
    switch (product) {
        case 'coffee': price = quality * 1.5; break;
        case 'water': price = quality * 1; break;
        case 'coke': price = quality * 1.40; break;
        case 'snack': price = quality * 2; break;
    }
    console.log(price.toFixed(2))
}

orders("water", 5)
orders("coffee", 2)