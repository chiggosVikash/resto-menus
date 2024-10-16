import AddMenus, { IAddMenus } from "@/app/models/AddMenus";
import { dbConnect } from "@/app/lib/db/db-connect";


export async function saveMenus(menus:IAddMenus){
    try{
        await dbConnect();
        const newMenus = await AddMenus.create(menus);
        return newMenus;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}