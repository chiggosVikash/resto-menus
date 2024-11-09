import { IOrder } from "@/app/models/Order";
import { NextResponse } from "next/server";
import { saveOrders } from "./controller";

export async function POST(req:NextResponse){
     try {
        const order:IOrder = await req.json();
        await saveOrders(order);
        return Response.json({
            message:"Order save successfully.",
            status:200,
        })

        
     } catch (error:unknown) {
        return Response.json({error:error,message: "Failed to save orders.",status:500})
        
     }

}