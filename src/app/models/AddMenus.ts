import mongoose , {Schema , Document} from 'mongoose';

export interface IAddMenus extends Document{
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

const AddMenusSchema: Schema<IAddMenus> = new Schema({
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

const AddMenus = mongoose.models.AddMenus || mongoose.model<IAddMenus>('AddMenus', AddMenusSchema);

export default AddMenus;