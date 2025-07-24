const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_CART":
      // check if product already exist
      const exist = state.find((item) => item.id === product.id);
      if (exist) {
        // if exist, increase quantity
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // if not exist, add new product with qty 1
        const product = action.payload;
        return [...state, { ...product, qty: 1 }];
      }

    case "DEL_CART":
      const existItem = state.find((item) => item.id === product.id);
      if (existItem.qty === 1) {
        // if qty is 1, remove item from cart
        return state.filter((item) => item.id !== product.id);
      } else {
        // if qty is more than 1, decrease qty
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};
export default handleCart;
