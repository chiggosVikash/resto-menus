import { create } from "zustand";
import { IItem } from "../models/Item";
import axios from 'axios';

interface AddMenuStore {
    isSaving: boolean;
    isSaved: boolean;
    errorMessage: string;
    saveMenu: (menus: IItem) => void;
    reset: () => void;
}

export const useAddMenuStore = create<AddMenuStore>((set) => ({
    isSaving: false,
    isSaved: false,
    errorMessage: "",
    reset: () => set({ isSaving: false, isSaved: false, errorMessage: "" }),
    saveMenu: async (menus: IItem) => {
        set({ isSaving: true });
        try{
             const res = await axios.post('/api/menus', menus);
            console.log(res);
            if(res.status === 200){
                set({ isSaved: true, isSaving: false });
                return;
            }
            else{
                set({ errorMessage: res.data.message, isSaving: false });
            }
        }
        catch(error: unknown){
            set({ errorMessage: `Failed to Add Menu ${error instanceof Error ? error.message : 'Unknown error'}`, isSaving: false });
        }
    },
}));
