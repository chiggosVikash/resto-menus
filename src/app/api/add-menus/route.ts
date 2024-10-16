import { NextResponse, NextRequest } from "next/server";
import { IAddMenus } from "@/app/models/AddMenus";
import { saveMenus } from "./controller";

export async function POST(req: NextRequest) {
  try {
    console.log("in add-menus route");
    const menus: IAddMenus = await req.json();
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
