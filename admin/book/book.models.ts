import { Schema, model, Document, Types } from "mongoose"

export interface IBook extends Document {
    name: string;
    price: number;
    image: string;
    state: boolean;
    content: string; 
    test: string;
    autor: string;
    category: string;
    user?: string;
}

const bookSchema = new Schema({
    name: {
        type: String,
        uppercase: true,
        required: [true, "name is required"],
        unique: true,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },

    image: {
    type: Schema.Types.ObjectId,
    ref: "Image",
    required: true
    },
    state: {
        type: Boolean,
        default: true
    },
    test: {
        type: String,
        ref: "Test",
        required: [true, "test is required"],
    },
    autor: {
        type: String,
        ref: "Autor",
        required: [true, "autor is required"],
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    content: {
        type: Schema.Types.ObjectId,
        ref: "Content",
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

bookSchema.methods.toJSON = function () {
    const { __v, user, state, ...resto } = this.toObject();

    return resto;
};

export default model<IBook>("Book", bookSchema);
