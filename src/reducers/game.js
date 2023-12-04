import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    id: 1,
    name: "Smartphone",
    co2: 18,
    img: "../assets/smartphone.svg",
    hidden: true,
  },
  {
    id: 2,
    name: "Jeans",
    co2: 22,
    img: "../assets/jeans.svg",
    hidden: true,
  },
  {
    id: 3,
    name: "T-shirt",
    co2: 6,
    img: "../assets/t-shirt.svg",
    hidden: true,
  },
  {
    id: 4,
    name: "Bicycle",
    co2: 7.5,
    img: "../assets/bicycle.svg",
    hidden: true,
  },
  {
    id: 5,
    name: "Sneakers",
    co2: 11.5,
    img: "../assets/sneakers.svg",
    hidden: true,
  },
  {
    id: 6,
    name: "Air travel within Europe",
    co2: 150,
    img: "../assets/flight.svg",
    hidden: true,
  },
  {
    id: 7,
    name: "Travel by bus",
    co2: 0.2,
    img: "../assets/bus.svg",
    hidden: true,
  },
  {
    id: 8,
    name: "Travel by train",
    co2: 0.1,
    img: "../assets/train.svg",
    hidden: true,
  },
  {
    id: 9,
    name: "Travel by car",
    co2: 0.3,
    img: "../assets/car.svg",
    hidden: true,
  },
  {
    id: 10,
    name: "Coffee consumption",
    co2: 1.5,
    img: "../assets/coffee.svg",
    hidden: true,
  },
  {
    id: 11,
    name: "Vegetarian diet",
    co2: 48,
    img: "../assets/vegetarian.svg",
    hidden: true,
  },
  {
    id: 12,
    name: "Meat based diet",
    co2: 77,
    img: "../assets/meat.svg",
    hidden: true,
  },
];

const initialState = {
  products,
};

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    moveCard: (state, action) => {
      const { from, to } = action.payload;
      const updatedProducts = [...state.products];
      const [moveCard] = updatedProducts.splice(from, 1);
      updatedProducts.splice(to, 0, moveCard);

      return {
        ...state,
        products: updatedProducts,
      };
    },

    updateCards: (state, action) => {
      state.products = action.payload;
    },

    restart: () => {
      return initialState;
    },
  },
});

export const { moveCard, updateCards } = game.actions;
export default game.reducer;
