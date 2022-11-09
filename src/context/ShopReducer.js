export const actionType = {
  SET_USER: 'SET_USER',
  SET_FOOD: 'SET_FOOD',
  SET_CART_ITEM: 'SET_CARD_ITEM',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  SET_SHOW_CART: 'SET_SHOW_CART',
  CLEAR_CART: 'CLEAR_CART',
};

const ShopReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_FOOD:
      return {
        ...state,
        foodItems: action.foodItems,
      };
    case actionType.SET_SHOW_CART:
      return {
        ...state,
        cartShow: action.cartShow,
      };
    case actionType.ADD_TO_CART:
      return {
        ...state,
        cartItems: action.cartItems,
      };
    case actionType.SET_CART_ITEM:
      return {
        ...state,
        cartItems: action.cartItems,
      };
    default:
      return state;
  }
};

export default ShopReducer;
