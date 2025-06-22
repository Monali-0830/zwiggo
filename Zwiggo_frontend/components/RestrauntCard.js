// src/components/RestaurantCard.jsx
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {res} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla,
    } = res.info
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col h-[350px]">
                                <img
                                    src={
                                        CDN_URL +
                                        cloudinaryImageId
                                    }
                                    alt={name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 flex flex-col flex-grow">
                                    <h3 className="text-lg font-semibold mb-1 truncate">{name}</h3>
                                    <p className="text-gray-600 text-sm mb-1 line-clamp-2">
                                        {cuisines.join(", ")}
                                    </p>
                                    <div className="mt-auto">
                                        <p className="text-gray-800 text-sm">
                                            ⭐ {avgRating} • {sla.deliveryTime} mins
                                        </p>
                                    </div>
                                </div>
                </div>
    );
};


export const StatusRestaurantCard = (RestaurantCard) =>{
    return (props) => {
        return(
            <div>
                <label className="absolute bg-blue-100 text-blue-800 m-2 px-4 py-1 rounded-full text-xs font-semibold shadow-sm hover:bg-blue-200 transition-all duration-300">
                IsClosed
                </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;