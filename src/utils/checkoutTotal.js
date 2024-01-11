/**
 * Calculates total price of a set of products
 * @param {Array} products 
 * @returns {number} Total Price
 */
export function calculateTotalPrice(products){
    let totalPrice = 0
    products.forEach(product => {
        totalPrice += product.price
    });
    return totalPrice
}