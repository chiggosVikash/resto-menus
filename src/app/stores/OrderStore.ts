import { create } from 'zustand';

interface OrderStore{
    isPersonalInfoFormOpen:boolean,
    togglePersonalInfoForm:()=> void
}

export const useOrderStore = create<OrderStore>((set) => ({
    isPersonalInfoFormOpen: false,
    // Add a method to update the state
    togglePersonalInfoForm: () => set((state) => ({ isPersonalInfoFormOpen: !state.isPersonalInfoFormOpen }))
}))
