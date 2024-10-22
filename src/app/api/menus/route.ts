import { NextResponse, NextRequest } from "next/server";
import { IItem } from "@/app/models/Item";
import { getMenus, IGetMenusOptions, saveMenus } from "./controller";

export async function POST(req: NextRequest) {
  try {
    const menus: IItem = await req.json();
    await saveMenus(menus);
    console.log("Menu added successfully");
    return NextResponse.json({message: "Menu added successfully",status: 200,});

  } catch (error) {
    return NextResponse.json({
      message: "Failed to add Menu",
      error: error,
    });
  }
}

export async function GET(req: NextRequest) {

  try {
    const { searchParams } = new URL(req.url);
    
    const options: IGetMenusOptions = {
      page: parseInt(searchParams.get('page')!),
      limit:parseInt(searchParams.get('limit')!)

    }
    console.log('menus limit',options.limit)
    const menus = await getMenus(options);  
    return Response.json({
      message: "Menus fetched successfully",
      status: 200,
      menus: menus,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to fetch Menus",
      error: error, 
    }, { status: 500 });
  }
}


