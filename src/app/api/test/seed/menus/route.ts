import { NextRequest, NextResponse } from 'next/server';
import { seedMenus } from './controller';
export async function POST(req: NextRequest) {
    try {
        
        const requestBody = await req.json();
        console.log("in seed menus route",requestBody);
     
        for (let i = 0; i <  100; i++) {
            await seedMenus();
        }

        return NextResponse.json({ message: `${100} menus seeded successfully` });
    } catch (error) {
        console.error("Error in seed menus route:", error);
        return NextResponse.json({ 
            message: 'Error seeding menus', 
            error: error instanceof Error ? error.message : String(error) 
        }, { status: 500 });
    }
}
