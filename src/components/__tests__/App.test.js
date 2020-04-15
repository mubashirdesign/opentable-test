import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import SearchBar from "../SearchBar";
import RestaurantResults from "../RestaurantResults";
import CityResults from "../CityResults";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows the searchbar", () => {
  expect(wrapped.find(SearchBar).length).toEqual(1);
});

it("shows the restaraunt results container", () => {
  expect(wrapped.find(RestaurantResults).length).toEqual(1);
});

it("shows the city results container", () => {
  expect(wrapped.find(CityResults).length).toEqual(1);
});
