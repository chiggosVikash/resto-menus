import ItemModel from "@/app/models/Item";
import { dbConnect } from "@/app/lib/db/db-connect";

interface SeedItem {
  name: string;
  description: string;
  halfPrice: number;
  fullPrice: number;
  image: string;
  category: string;
  section: string;
}

function generateRandomItem(): SeedItem {
  const categories = ["Fast Food", "Italian", "Asian", "Mexican", "Dessert"];
  const sections = ["Appetizers", "Main", "Sides", "Drinks", "Desserts"];

  return {
    name:  `Test Item ${Math.floor(Math.random() * 1000)}`,
    description:  `A delicious test item for your enjoyment`,
    halfPrice: Number((Math.random() * 10 + 2).toFixed(2)),
    fullPrice: Number((Math.random() * 20 + 5).toFixed(2)),
    image: `image${Math.floor(Math.random() * 10)}.jpg`,
    category: categories[Math.floor(Math.random() * categories.length)],
    section: sections[Math.floor(Math.random() * sections.length)],
  };
}

export async function seedMenus() {
  try {
    await dbConnect();

    const item = generateRandomItem();
    await ItemModel.create(item);
  } catch (error) {
    console.error("Error seeding menu:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
}
