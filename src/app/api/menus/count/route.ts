import { NextRequest } from "next/server";
import { getItemsCount } from "../controller";

export async function GET(req:NextRequest){
    try{
      console.log("Request received")
      new URL(req.url)
      const count = await getItemsCount()
      return Response.json({"itemCount":count},{status:200})
    
  
    }catch(e){
      const message = (e as Error).message;
      if(message.includes("Not Found")){
        return Response.json({
          message:"Items not found"
        },{status:400})
      }
      return Response.json({
        message:"Failed to fetch by id",
        error:e,
  
      },{status:500})
    }
  }