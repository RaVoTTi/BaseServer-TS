import {model, Schema , Document} from "mongoose"

export interface ICategory extends Document{
    name: string,
    state: boolean
}

const categorySchema = new Schema({
    name: {
        type: String,
        unique:true,
        uppercase: true,
        required: [true, 'El Category es obligatorio']
    },
    state:{
        type: Boolean,
        required: true,
        default: true
    }

})

categorySchema.methods.toJSON = function (){
    const {__v,  ...resto} = this.toObject()

    return resto
}

export default model<ICategory>('Category', categorySchema)