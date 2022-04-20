import { Schema, model, Document, Types } from "mongoose"

export interface IDetail extends Document {
    product: string;
    quantity: number;
    detailPrice: number;
    isFinished: boolean;
    isPurchased: boolean;

}

const detailSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: [true, "product is required"],

    },
    detailPrice: {
        type: Number,
        required: [true, "detailPrice is required"],
    },
    quantity: {
        type: Number,
        default: 1
    },
    isFinished: {
        type: Boolean,
        default: false
    },
    isPurchased: {
        type: Boolean,
        default: false
    },

});

detailSchema.methods.toJSON = function () {
    const { __v, ...resto } = this.toObject();

    return resto;
};

export default model<IDetail>("detail", detailSchema);
