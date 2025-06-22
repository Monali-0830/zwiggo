import { useContext, useEffect, useState } from "react";
import Shimmer from "../utils/shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import NoInternet from "../utils/noInternet";
import RestaurantCard, { StatusRestaurantCard } from "./RestrauntCard";
import userContext from "../utils/userContext";

const Body = () => {
    const [restaurantList, setrestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [serchtext, setsearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const StatusRestaurantCardComponent = StatusRestaurantCard(RestaurantCard);

    const fetchData = async () => {
        const data = await fetch("http://localhost:3000/api/swiggy");


        const json = await data.json();
        const restaurantData = json?.data?.cards?.find(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setrestaurantList(restaurantData);
        setFilteredRestaurantList(restaurantData);
    };

    const { username, setuserName } = useContext(userContext);
    const onlineSta = useOnline();

    if (onlineSta === false) return <NoInternet />;

    return restaurantList.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body p-4 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search restaurants..."
                        value={serchtext}
                        onChange={(e) => {
                            setsearchText(e.target.value);
                        }}
                    />
                    <button
                        data-testid="inputbox"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
                        onClick={() => {
                            const filtereddata = restaurantList.filter((res) =>
                                res.info.name
                                    .toLowerCase()
                                    .includes(serchtext.toLowerCase())
                            );
                            setFilteredRestaurantList(filtereddata);
                        }}
                    >
                        Search
                    </button>

                    
                    <input
                        id="username"
                        type="text"
                        className="border border-gray-300 rounded-md p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={username}
                        onChange={(e) => setuserName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>

                <button
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md transition self-start lg:self-auto"
                    onClick={() => {
                        const filtered = restaurantList.filter(
                            (res) => res.info.avgRating > "4.3"
                        );
                        setFilteredRestaurantList(filtered);
                    }}
                >
                    Click to filter Top rated restaurants
                </button>
            </div>

            
            <div className="res-container grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Array.isArray(filteredRestaurantList) &&
                    filteredRestaurantList.map((res) => (
                        <Link
                            to={"/restaurants/" + res.info.id}
                            key={res.info.id}
                            className="no-underline text-inherit"
                            data-testid="rescard"
                        >
                            {res.info.availability.opened === true ? (
                                <RestaurantCard res={res} />
                            ) : (
                                <StatusRestaurantCardComponent res={res} />
                            )}
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Body;
