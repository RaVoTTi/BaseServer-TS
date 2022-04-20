import {model, Schema , Document} from "mongoose"

export interface IRole extends Document{
    name: string,
}

const roleSchema = new Schema({
    name: {
        type: String,
        uppercase: true,
        required: [true, 'El role es obligatorio']
    },
    
})

roleSchema.methods.toJSON = function (){
    const {__v,  ...resto} = this.toObject()

    return resto
}

export default model<IRole>("Role", roleSchema)