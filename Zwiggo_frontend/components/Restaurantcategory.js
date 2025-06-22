import { useState } from 'react';
import Itemlist from './Itemlist';

const Restaurantcategory = ({data,showItems,setshowIndex}) =>{
    const HandleClick = () =>{
        setshowIndex();
    }
    return (
        <div className="w-full max-w-4xl mx-auto">
            {/** Accordion Header */}
            <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
                <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out" onClick={HandleClick}>
                    <span className="font-semibold text-lg text-gray-800">{data.title} ({data.itemCards.length})</span>
                    <span className={`transform transition-transform duration-300 ${showItems ? 'rotate-180' : ''}`}>⬇️</span>
                </div>
                { showItems && <Itemlist items={data.itemCards} />}
            </div>
            {/** Accordion Body */}
        </div>
    )
}

export default Restaurantcategory;
