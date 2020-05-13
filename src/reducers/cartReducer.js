import {
  ADD_PRODUCT_CART,
  GET_NUMBERS_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
} from "../actions/types";

const initialState = {
  cartNumber: 0,
  cartCost: 0,
  products: {
    1: {
      id: 1,
      name: "Vince Carter Retro Jersey",
      price: 209,
      image:
        "https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3808000/ff_3808910-adfe3ffe0c8ed168b19a_full.jpg&w=340",
      numbers: 0,
      inCart: false,
    },
    2: {
      id: 2,
      name: "Raptors Championship Hat",
      price: 25,
      image:
        "https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3578000/ff_3578275-606ca6f9725a7f4ed385_full.jpg&w=340",
      numbers: 0,
      inCart: false,
    },
    3: {
      id: 3,
      name: "Raptors Championship Ring",
      price: 35,
      image:
        "https://thejewelerblog.files.wordpress.com/2019/10/raptorsring1.jpg?resize=575%2C581",
      numbers: 0,
      inCart: false,
    },
    4: {
      id: 4,
      name: "Kawhi Leonard Finals Shirt",
      price: 40,
      image:
        "https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3556000/ff_3556228-4074bc117a1d17bf8b12_full.jpg&w=340",
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  let addQuantity = "";
  switch (action.type) {
    case ADD_PRODUCT_CART:
      addQuantity = { ...state.products[action.payload] };
      addQuantity.numbers += 1;
      addQuantity.inCart = true;
      return {
        cartNumber: state.cartNumber + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: addQuantity,
        },
      };
    case GET_NUMBERS_CART:
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      addQuantity = { ...state.products[action.payload] };
      addQuantity.numbers += 1;

      return {
        ...state,
        cartNumber: state.cartNumber + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: addQuantity,
        },
      };
    case DECREASE_QUANTITY:
      addQuantity = { ...state.products[action.payload] };
      let newCartCost = 0;

      if (addQuantity.numbers === 0) {
        addQuantity.numbers = 0;
        newCartCost = state.cartCost;
        state.cartNumber += 1;
      } else {
        addQuantity.numbers -= 1;
        newCartCost = state.cartCost - state.products[action.payload].price;
      }
      return {
        ...state,
        cartNumber: state.cartNumber - 1,
        cartCost: newCartCost,
        products: {
          ...state.products,
          [action.payload]: addQuantity,
        },
      };
    case CLEAR_PRODUCT:
      addQuantity = { ...state.products[action.payload] };
      let numbersBefore = addQuantity.numbers;
      addQuantity.numbers = 0;
      addQuantity.inCart = false;
      return {
        ...state,
        cartNumber: state.cartNumber - numbersBefore,
        cartCost: state.cartCost - numbersBefore * addQuantity.price,
        products: {
          ...state.products,
          [action.payload]: addQuantity,
        },
      };

    default:
      return state;
  }
};
