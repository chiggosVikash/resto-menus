import { NextRequest, } from "next/server";
import { getBrowseMenus } from "../controller";

export async function GET(req:NextRequest){
   try{
      new URL(req.url)
      const browseMenus = await getBrowseMenus();
      return Response.json({message:"Browse menus get successfully",browseMenus:browseMenus,status:200})
   }
   catch(e){
      return Response.json({
        message:"Failed to get Browse Menus",
        status:500,
        error:e
      })
   }

}