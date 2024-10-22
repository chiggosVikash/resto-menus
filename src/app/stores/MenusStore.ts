import { create } from "zustand";
import { IItem } from "../models/Item";
import { IGetMenusOptions } from "../api/menus/controller";
import axios from "axios";


interface MenusStore{
    isFetching: boolean;
    errorMessage: string;
    isFetched: boolean;
    menus: IItem[];
    getMenus: (options: IGetMenusOptions) => void;
}

export const useMenusStore = create<MenusStore>((set) => ({
    isFetching: false,
    errorMessage: "",
    isFetched: false,
    menus: [],
     getMenus: async (options: IGetMenusOptions) => {
        set({isFetching: true});

        try{
            const response = await axios.get("/api/menus",{
                params: options
            });
            
            if(response.status === 200){
                set({menus: response.data.menus, isFetched: true, isFetching: false});
            }
            else{
                set({errorMessage: response.data.message, isFetching: false});
            }
        }
        catch(error){
            set({errorMessage: "Failed to fetch menus", isFetching: false});
            throw error;
        }
    }
})) 