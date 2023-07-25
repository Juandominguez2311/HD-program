import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../components/Navbar";

describe("Navbar component", () => {
  it("renders the icons and texts  correctly", () => {
    render(<Navbar />);

    const dollarSignIcon = screen.getByTestId("faDollarSign");
    expect(dollarSignIcon).toBeInTheDocument();

    const basketShoppingIcon = screen.getByTestId("faBasketShopping");
    expect(basketShoppingIcon).toBeInTheDocument();

    const userLargeIcon = screen.getByTestId("faUserLarge");
    expect(userLargeIcon).toBeInTheDocument();
  });

  it("renders links correctly", () => {
    render(<Navbar />);

    const bikeLink = screen.getByText("Bikes");
    expect(bikeLink).toBeInTheDocument();
    expect(bikeLink).toHaveAttribute("href", "/");

    const accessoriesLink = screen.getByText("Accessories");
    expect(accessoriesLink).toBeInTheDocument();
    expect(accessoriesLink).toHaveAttribute("href", "/?item=2");

    const apparelLink = screen.getByText("Apparel");
    expect(apparelLink).toBeInTheDocument();
    expect(apparelLink).toHaveAttribute("href", "/");
  });
});
