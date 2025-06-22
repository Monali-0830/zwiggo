import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../Mockdata/MockResList.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

// Mock fetch API
global.fetch = jest.fn(() => {
    return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
    });
});

it("Should render Search Res List for Pizza", async () => {
  // Wrap async render in act
    await act(async () => {
    render(
        <BrowserRouter>
        <Body />
        </BrowserRouter>
    );
    });

    const cardBeforeSearch = screen.getAllByTestId("rescard");

    expect(cardBeforeSearch.length).toBe(9);

  // Wait for the button to appear
    const searchbtn = await screen.findByRole("button", { name: "Search" });
    expect(searchbtn).toBeInTheDocument();

    const inputElem = screen.getByTestId("inputbox");
    fireEvent.change(inputElem,{target :{value : "cake"}});

    fireEvent.click(searchbtn);
    const card = screen.getAllByTestId("rescard");

});
