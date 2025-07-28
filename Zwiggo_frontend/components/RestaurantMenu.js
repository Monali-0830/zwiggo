import { useState, useEffect } from "react";
import MenuShimmer from "./MenuShimmer";
import { useParams } from "react-router-dom";
import { MENU_IMAGE_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";
import Restaurantcategory from "./Restaurantcategory";

const RestaurantMenu = () => {
const { resId } = useParams();

const resmenu = useRestaurant(resId);
const [allItems, setAllItems] = useState([]);
const [filteredItems, setFilteredItems] = useState([]);
const [categories, setCategories] = useState([]);
const [showIndex,setShowIndex] = useState(null);

useEffect(() => {
    if (resmenu) {
        const regularCards = resmenu?.cards?.find(card => card?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const itemsCard = regularCards?.find(c => c?.card?.card?.itemCards);
        const items = itemsCard?.card?.card?.itemCards || [];

        const categoryList = regularCards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

        setAllItems(items);
        setFilteredItems(items);
        setCategories(categoryList);
    }
}, [resmenu]);

    if (!resmenu) return <MenuShimmer />;

    const { name, cuisines, costForTwoMessage } =
    resmenu?.cards?.find(card => card?.card?.card?.info)?.card?.card?.info || {};

    return (
    <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{name}</h1>
        <p className="text-lg text-gray-700 font-medium mb-10">
            {cuisines?.join(", ")} &middot; {costForTwoMessage}
        </p>

        <div className="space-y-6">
            {categories.map((category,index) => (
            <Restaurantcategory
                key={category.card.card.title}
                data={category.card.card}
                showItems={index === showIndex ? true:false}
                setshowIndex={() => setShowIndex(prevIndex => prevIndex === index ? null : index)}
            />
        ))}
        </div>
    </div>
    </div>
    );
};

export default RestaurantMenu;
