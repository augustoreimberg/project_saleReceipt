function saleReceipt(product, price, discount) {
    let productPrice = product.map((product, index) => {
        return { [product]: price[index] };
    });
    let totalSum = price.reduce((acumulator, value) => acumulator + value);

    const result = {
        priceProduct: productPrice,
        totalSum: totalSum,
        discountPrice: totalSum - discount,
    };
    console.log(result);
}
let product = ["car", "motocycle", "truck"];
let price = [30000, 15000, 60000];
let discount = 2500;

saleReceipt(product, price, discount);
