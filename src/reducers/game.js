import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    id: 1,
    name: "Smartphone",
    co2: 18,
    img: "../assets/smartphone.svg",
    hidden: true,
    description: "Manufacturing of a smartphone",
  },
  {
    id: 2,
    name: "Jeans",
    co2: 22,
    img: "../assets/jeans.svg",
    hidden: true,
    description: "The carbon footprint for a pair of jeans",
  },
  {
    id: 3,
    name: "T-shirt",
    co2: 6,
    img: "../assets/t-shirt.svg",
    hidden: true,
    description: "Production of a typical cotton T-shirt",
  },
  {
    id: 4,
    name: "Textile Bag",
    co2: 2,
    img: "../assets/bag.svg",
    hidden: true,
    description: "Production of a typical textile bag",
  },
  {
    id: 5,
    name: "Sneakers",
    co2: 11.5,
    img: "../assets/sneakers.svg",
    hidden: true,
    description: "Production of a pair of sneakers",
  },
  {
    id: 6,
    name: "Air travel",
    co2: 150,
    img: "../assets/flight.svg",
    hidden: true,
    description: "One way, short-haul flights per passenger",
  },
  {
    id: 7,
    name: "Travel by bus",
    co2: 0.2,
    img: "../assets/bus.svg",
    hidden: true,
    description: "Travling by bus per kilometer and passenger",
  },
  {
    id: 8,
    name: "Travel by train",
    co2: 0.1,
    img: "../assets/train.svg",
    hidden: true,
    description: "Traveling by train per kilometer and passenger",
  },
  {
    id: 9,
    name: "Travel by car",
    co2: 0.3,
    img: "../assets/car.svg",
    hidden: true,
    description: "Traveling by car per kilometer",
  },
  {
    id: 10,
    name: "Coffee consumption",
    co2: 1.5,
    img: "../assets/coffee.svg",
    hidden: true,
    description: "Two cups of coffee a day per week",
  },
  {
    id: 11,
    name: "Vegetarian diet",
    co2: 48,
    img: "../assets/vegetarian.svg",
    hidden: true,
    description: "Weekly food consumption for one person on a vegetarian diet"
  },
  {
    id: 12,
    name: "Meat based diet",
    co2: 77,
    img: "../assets/meat.svg",
    hidden: true,
    description: "Weekly food consumption for one person on a meat based diet"
  },
];

const initialState = {
  products,
};

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    restart: () => {
      return initialState;
    },
  },
});

export const { moveCard, updateCards, restart } = game.actions;
export default game.reducer;
