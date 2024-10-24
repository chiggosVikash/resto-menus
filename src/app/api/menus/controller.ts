import ItemModel, { IItem } from "@/app/models/Item";
import { dbConnect } from "@/app/lib/db/db-connect";


export async function saveMenus(menus:IItem){
    try{
        await dbConnect();
        const newMenus = await ItemModel.create(menus);
        return newMenus;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

export interface IGetMenusOptions{
    page: number;
    limit: number;
}

export async function getMenus(options:IGetMenusOptions){
    try{
        await dbConnect();
        const menus = await ItemModel.find({}).skip((options.page - 1) * options.limit).limit(options.limit).sort({createdAt: -1});
        return menus;
    }
    catch(error){
        console.log(error,"in get menus controller");
        throw error;
    }
}

export async function getItemsCount(){
    await dbConnect()
    const itemsCounts = await ItemModel.countDocuments()
    if(!itemsCounts){
        throw new Error("Not Found")
    }
    return itemsCounts

}

export async function getBrowseMenus(){
    dbConnect()
    const browseMenus = await ItemModel.find({}).limit(50)
    if(browseMenus.length==0){
        throw new Error("Not Available")
    }
    return browseMenus
}