import React from 'react';
import { useOrderStore } from "@/app/stores/OrderStore";

const OrderActionBar = () => {
  const { togglePersonalInfoForm } = useOrderStore();

  return (
    <div className="fixed bottom-0 h-[80px] left-0 right-0 bg-cardColor p-4 flex justify-between items-center">
      <div className="md:text-xl text-sm font-bold text-onSurface">
        Total Amount : Rs {47579 * 1}.00
      </div>
      <button
        onClick={() => {
          togglePersonalInfoForm();
        }}
        className={`bg-secondary md:text-lg text-sm text-white px-6 py-2 rounded-full hover:bg-secondary transition duration-300`}
      >
        Proceed to order
      </button>
    </div>
  );
};

export default OrderActionBar;

