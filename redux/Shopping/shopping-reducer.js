import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  cart: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      return {
        ...state,
        cart: [...state.cart, { ...item }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default shopReducer;
