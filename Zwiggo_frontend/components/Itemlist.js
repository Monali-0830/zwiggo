import { CDN_URL } from "../utils/constants";
import { addItems, removeItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Itemlist = ({ items }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItems(item));
  };

  const handleRemove = (itemId) => {
    dispatch(removeItems(itemId));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={`${item.card.info.id}-${index}`}
          className="p-4 mb-4 bg-gray-100 border border-gray-300 rounded-lg text-left flex justify-between items-start w-full"
        >
          {/* LEFT: Item Text Info */}
          <div className="w-9/12 pr-4">
            <div className="py-2">
              <span className="font-semibold text-gray-800">
                {item.card.info.name}
              </span>
              <span className="ml-2 text-gray-600">
                – ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {item.card.info.description}
            </p>
          </div>

          {/* RIGHT: Image + Button Group */}
          <div className="w-3/12 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="food"
              className="w-full rounded-lg object-cover"
            />

            {/* Quantity Buttons */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-md border border-gray-200">
                <button
                  onClick={() => handleRemove(item.card.info.id)}
                  className="text-lg font-bold text-white bg-red-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600 transition duration-200"
                >
                  –
                </button>
                <span className="text-gray-800 font-semibold">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleAdd(item)}
                  className="text-lg font-bold text-white bg-green-500 w-8 h-8 flex items-center justify-center rounded-full hover:bg-green-600 transition duration-200"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
