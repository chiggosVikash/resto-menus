import { create } from 'zustand';
import { addToBucket, getBucketItems , deleteBucketItems } from '@/app/lib/db/localdb';
import { IItem } from '../models/Item';

interface BucketStore{
     processing:boolean,
     errorMessage?:string ,
     bucketMenus:IItem[],
     deleting:boolean,
     isItemDeleted:boolean,
     addMenuToBucket:(item:IItem) => Promise<void>,
     fetchMenus:() => Promise<void>,
     removeMenuItem:(itemId:string) => Promise<void>,
}

export const useBucketStore = create<BucketStore>((set ,get)=> ({
    processing:false,
    bucketMenus:[],
    deleting:false,
    isItemDeleted:false,
    errorMessage:undefined,
    addMenuToBucket: async (item) => {
        set({processing:true})
        try{
           await addToBucket(item);
           set((state) => ({ bucketMenus: [...state.bucketMenus, item] }));

        }
        catch (e:unknown){
            set({errorMessage:(e as Error).message});
            
        }
    },
    fetchMenus: async () => {
        try {
            set({processing:true})
            const menus = await getBucketItems();
            set({ bucketMenus: menus,processing:false });
            
        } catch (e:unknown) {
            console.log("Error ",e);
            set({processing:false,errorMessage:(e as Error).message})
        }
    },
    removeMenuItem: async (itemId) => {
        const {fetchMenus} = get()
        try{
            set({deleting:true})
            const status = await deleteBucketItems(itemId)
            if(status === 200){
                console.log("Menu Item deleted successfully")
                // Update the bucketMenus to remove the deleted item
                set((state) => ({ 
                    deleting:false, 
                    isItemDeleted:true,
                    // bucketMenus: state.bucketMenus.filter(item => item.id !== itemId) 
                }));
                fetchMenus()
            }
            else {
                set({deleting:false,isItemDeleted:false, errorMessage: "Error 404! Item does not found"})
            }
        }
        catch(e:unknown){
            set({deleting:false,errorMessage: (e as Error).message})
        }
    }
}))
