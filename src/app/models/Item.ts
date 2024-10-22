import mongoose , {Schema , Document} from 'mongoose';

export interface IItem extends Document{
    name: string;
    description: string;
    halfPrice: number;
    fullPrice: number;
    image: string | null;
    category: string;
    section: string;
    createdAt: Date;
    updatedAt: Date;
   

}

const ItemSchema: Schema<IItem> = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    halfPrice: {
        type: Number,
    },
    fullPrice: {
        type: Number,
    },
    image: {
        type: String,
        default: '',
    },
    category: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
},{timestamps: true})

const ItemModel = mongoose.models.Item || mongoose.model<IItem>('Item', ItemSchema);

export default ItemModel;