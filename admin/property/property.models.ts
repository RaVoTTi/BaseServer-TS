import { Schema, model, Document, Types } from "mongoose"

export interface IProperty extends Document {
    cart: string[],
    finished: string[],
    reading: string[],
    acquire: string[],
}

const propertySchema = new Schema({
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'Detail',
        default: [],
        require: true
      },
      finished: {
        type: Schema.Types.ObjectId,
        ref: 'Detail',
        default: [],
        require: true
      },
      reading: {
        type: Schema.Types.ObjectId,
        ref: 'Detail',
        default: [],
        require: true
      },
      acquire: {
        type: Schema.Types.ObjectId,
        ref: 'Acquire',
        default: [],
        require: true
      },
});

propertySchema.methods.toJSON = function () {
    const { __v, user, state, ...resto } = this.toObject();

    return resto;
};

export default model<IProperty>("Property", propertySchema);
