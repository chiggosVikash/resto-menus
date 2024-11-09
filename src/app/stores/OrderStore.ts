import { create } from 'zustand';
import { IOrder } from '../models/Order';

interface OrderStore {
    isPersonalInfoFormOpen: boolean,
    order:IOrder,
    togglePersonalInfoForm: () => void,
    quantities: { [key: string]: number }, // Change to an object to hold quantities for each menu item
    incrementQty: (id: string) => void, // Accept an ID parameter
    decrementQty: (id: string) => void, // Accept an ID parameter

    placeOrder:()=>Promise<boolean>

}

export const useOrderStore = create<OrderStore>((set, get) => ({
    isPersonalInfoFormOpen: false,
    order: {} as IOrder,
    togglePersonalInfoForm: () => set((state) => ({ isPersonalInfoFormOpen: !state.isPersonalInfoFormOpen })),
    quantities: {}, // Initialize as an empty object
    incrementQty: (id: string) => {
        set((state) => ({
            quantities: {
                ...state.quantities,
                [id]: (state.quantities[id] || 1) + 1 // Increment the specific menu item's quantity
            }
        }))
    },
    decrementQty: (id: string) => {
        const { quantities } = get();
        if (quantities[id] > 0) {
            set((state) => ({
                quantities: {
                    ...state.quantities,
                    [id]: Math.max((state.quantities[id] || 1) - 1, 1) 
                }
            }))
        }
    },

    placeOrder:async ()=>{
        return true;
    }
}))
