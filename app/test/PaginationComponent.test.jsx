import React from "react";
import { render, screen } from "@testing-library/react";
import PaginationComponent from "../components/PaginationComponent";

describe("PaginationComponent", () => {
  it("renders page links for multiple pages", () => {
    const currentPage = 3;
    const totalPages = 10;
    const idTipoItem = "example-item";
    const pageSize = 5;

    render(
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        idTipoItem={idTipoItem}
        pageSize={pageSize}
      />
    );

    for (let page = 1; page <= totalPages; page++) {
      const link = screen.getByText(page.toString());
      expect(link).toHaveAttribute(
        "href",
        `?item=${idTipoItem}&page=${page}&itemsPage=${pageSize}`
      );

      if (page === currentPage) {
        expect(link).toHaveClass("btn-active");
      } else {
        expect(link).not.toContain("btn-active");
      }
    }
  });

  it("renders page links single page", () => {
    const currentPage = 1;
    const totalPages = 1;
    const idTipoItem = "example-item";
    const pageSize = 5;

    render(
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        idTipoItem={idTipoItem}
        pageSize={pageSize}
      />
    );

    const link = screen.getByText("1");
    expect(link).toHaveAttribute(
      "href",
      `?item=${idTipoItem}&page=${currentPage}&itemsPage=${pageSize}`
    );
    expect(link).toHaveClass("btn-active");
  });
});
