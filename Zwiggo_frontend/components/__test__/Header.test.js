import { fireEvent, render ,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';


test("Should Load the Header Component with the Heading ",() =>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    render(< Header/>);
    </Provider>
    </BrowserRouter>
    )

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("Should Load the Cart Item in the Header Component",() =>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    render(< Header/>);
    </Provider>
    </BrowserRouter>
    )

    const Cart = screen.getByText(/Cart/);
    expect(Cart).toBeInTheDocument();
});

test("Should Load the Onclick handle of the login icon",() =>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    render(< Header/>);
    </Provider>
    </BrowserRouter>
    )

    const login = screen.getByTestId("test");

    fireEvent.click(login);

    expect(login).toHaveClass("fa-right-from-bracket");
});