import { dbConnect } from "@/app/lib/db/db-connect";
import OrderModel, { IOrder } from "@/app/models/Order";

export async function saveOrders(order: IOrder) {
  try {
    await dbConnect();
    const newOrder = await OrderModel.create(order);
    return newOrder;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
