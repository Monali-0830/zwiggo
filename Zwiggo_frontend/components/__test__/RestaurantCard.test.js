import { render , screen} from "@testing-library/react"
import RestaurantCard from "../RestrauntCard"
import MOCK_DATA from "../Mockdata/MockRestaurantData.json"
import "@testing-library/jest-dom"


it("Should Render the ResCard with the Props Data",() =>{
    render(< RestaurantCard  res={MOCK_DATA}/>)

    const name = screen.getByText("Kiosk Kaffee");

    expect(name).toBeInTheDocument();
})

