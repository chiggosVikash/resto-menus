import React from "react";
import { useOrderStore } from "../stores/OrderStore";

const QuantityButton = ({menuId}:{menuId:string}) => {
    const {quantities, incrementQty, decrementQty} = useOrderStore();
  return (
    <div className="flex items-center mb-4">
      <span className="mr-3 text-sm text-gray-600">Qty:</span>
      <button 
        onClick={()=>{
            decrementQty(menuId)
        }}
        className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded-l">
        -
      </button>
      <span className="bg-gray-100 px-4 py-1">{quantities[menuId] ?? 1}</span>
      <button 
        onClick={()=>{
            incrementQty(menuId)
        }}
        className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded-r">
        +
      </button>
    </div>
  );
};

export default QuantityButton;
