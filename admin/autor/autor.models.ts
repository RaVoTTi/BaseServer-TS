import {model, Schema , Document} from "mongoose"

export interface IAutor extends Document{
    name: string,
    state: boolean
}

const autorSchema = new Schema({
    name: {
        type: String,
        unique:true,
        uppercase: true,
        required: [true, 'El Autor es obligatorio']
    },
    state:{
        type: Boolean,
        required: true,
        default: true
    }

})

autorSchema.methods.toJSON = function (){
    const {__v,  ...resto} = this.toObject()

    return resto
}

export default model<IAutor>('Autor', autorSchema)