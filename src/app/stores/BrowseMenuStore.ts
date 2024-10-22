import { create } from 'zustand'
import { IItem } from '../models/Item'
import axios from 'axios'

export interface IMenu {
    category: string;
    menus: IItem[];
}

interface BrowseMenuStore{
    isFetching:boolean,
    browseMenus:IMenu[],
    errorMsg:string,
    getCategorizedMenu:()=> Promise<void>

    
}

export const useBrowseMenuStore = create<BrowseMenuStore>((set)=>({
    isFetching:false,
    browseMenus:[],
    errorMsg:"",
    getCategorizedMenu: async () =>{
        
        set({isFetching:true})
        try{
            const response = await axios.get("/api/menus/browse", {});

            if (response.status === 200) {
                const rawMenus: IItem[] = response.data.browseMenus;

                // New code to arrange menus in the specified format
                const categorizedMenus: IMenu[] = rawMenus.reduce((acc: IMenu[], menu: IItem) => {
                    const category = menu.category || "Uncategorized"; // Default category
                    const existingCategory = acc.find(item => item.category === category);
                    if (existingCategory) {
                        existingCategory.menus.push(menu);
                    } else {
                        acc.push({ category, menus: [menu] });
                    }
                    return acc;
                }, []);

                set({ browseMenus: categorizedMenus,  isFetching: false });
            } else {
                set({ errorMsg: response.data.message, isFetching: false });
            }        }
        catch (error){
            throw error;

        }

    }


}))