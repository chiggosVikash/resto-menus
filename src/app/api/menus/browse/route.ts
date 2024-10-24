import { NextRequest, } from "next/server";
import { getBrowseMenus } from "../controller";

export async function GET(req:NextRequest){
   try{
      console.log("request sending to browse")
      new URL(req.url)
      const browseMenus = await getBrowseMenus();
      console.log("browseMenus")
      return Response.json({
        message:"Browse menus get successfully",
        browseMenus:browseMenus,
        status:200})
   }
   catch(e){
      return Response.json({
        message:"Failed to get Browse Menus",
        status:500,
        error:e
      })
   }

}