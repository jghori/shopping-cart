import { GET_NUMBERS_CART } from "./types";

export const getNumber = () => {
  return (dispatch) => {
    dispatch({
      type: GET_NUMBERS_CART,
    });
  };
};
