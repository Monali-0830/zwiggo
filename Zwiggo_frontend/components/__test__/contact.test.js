import { render , screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test("Testing the Loading of Contact page",() =>{
    render(<Contact/>)

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("Testing the Loading for the button",() =>{
    render(<Contact />)

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
})

test("Testint the loading of a Input",() =>{
    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("john@example.com");

    expect(inputName).toBeInTheDocument();
})
