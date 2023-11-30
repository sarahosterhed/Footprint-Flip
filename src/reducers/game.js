import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    id: 1,
    name: "Smartphone",
    co2: "18kg",
    img: "../assets/smartphone.svg",
  },
  {
    id: 2,
    name: "Jeans",
    co2: "22kg",
    img: "../assets/jeans.svg",
  },
  {
    id: 3,
    name: "Cotton T-shirt",
    co2: "6kg",
    img: "../assets/tShirt.svg",
  },
  {
    id: 4,
    name: "Bicycle",
    co2: "7.5kg",
    img: "../assets/bicycle.svg",
  },
  {
    id: 5,
    name: "Sneakers",
    co2: "11.5kg",
    img: "../assets/sneakers.svg",
  },
  {
    id: 6,
    name: "European Flight",
    co2: "150kg",
    img: "../assets/flight.svg",
  },
  {
    id: 7,
    name: "Bus",
    co2: "0.2kg",
    img: "../assets/bus.svg",
  },
  {
    id: 8,
    name: "Train",
    co2: "0.1kg",
    img: "../assets/train.svg",
  },
  {
    id: 9,
    name: "Car",
    co2: "0.2kg",
    img: "../assets/car.svg",
  },
  {
    id: 10,
    name: "Coffee Consumption",
    co2: "1.5kg",
    img: "../assets/coffee.svg",
  },
  {
    id: 11,
    name: "Vegetarian Food",
    co2: "48kg",
    img: "../assets/vegetarian.svg",
  },
  {
    id: 12,
    name: "Meat based diet",
    co2: "77kg",
    img: "../assets/meat.svg",
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
