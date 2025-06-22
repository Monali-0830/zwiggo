import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Itemlist = ({ items }) => {
    const Dispatch = useDispatch();
    const handleChange = (item) =>{
        Dispatch(addItems(item));
    }
    return (
        <div className="">
            {items.map((item,index) =>(
                <div key={`${item.card.info.id}-${index}`} className="p-4 mb-4 bg-gray-100 border border-gray-300 rounded-lg text-left flex justify-between items-start w-full">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>- ₹{item.card.info.price? item.card.info.price/100:item.card.info.defaultPrice/100
                            }</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="p-2 w-3/12">
                    <div className="flex justify-center mb-2">
                        <button className="rounded-lg bg-black text-white shadow-md px-4 py-1 text-sm" onClick={() => handleChange(item)}>Add +</button>
                    </div>
                    <img  src={CDN_URL + item.card.info.imageId} className="w-full"/>
                    </div>
                    </div>
            ))}
        </div>
    )
}

export default Itemlist;