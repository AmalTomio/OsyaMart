// Add item to cart
export const addCart = (product) => {
    return {
        type: "ADD_CART",
        payload: product,
    };
}
// Delete item to cart
export const delCart = (product) => {
    return {
        type: "DEL_CART",
        payload: product,
    };
}
