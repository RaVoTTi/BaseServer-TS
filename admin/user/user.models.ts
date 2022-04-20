import { model, Schema, Document, Model, Types, ObjectId } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {

  name: string,
  lastName: string,
  email: string,
  password: string,
  number: number,
  state: boolean,
  role: string,
  isValid: boolean,
  info?: string,
  property?: string,



  comparePassword(candidatePassword: string): boolean;

}
interface IUserModel extends Model<IUser> {
  encryptedPassword(candidatePassword: string): string;
}


const userSchema: Schema<IUser, IUserModel> = new Schema({
  name: {
    type: String,
    uppercase: true,
    required: [true, "name is required"],
  },
  lastName: {
    type: String,
    uppercase: true,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  role: {
    type: Schema.Types.ObjectId,
    default: 'USER_ROLE',
    required: true
  },
  state: {
    type: Boolean,
    required: true,
    default: true,
  },
  isValid: {
    type: Boolean,
    default: false,
  },

  // info: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Info',
  //   default: [],
  //   require: true
  // },



});

// se utiliza function por el this que referencia al password
// userSchema.pre<IUser>("save", function (next) {
//   const user = this;

//   if (!user.isModified("password")) return next();

//   const salt = bcrypt.genSaltSync(10);
//   user.password = bcrypt.hashSync(user.password, salt);

//   next();
// });

userSchema.statics.encryptPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

userSchema.methods.comparePassword = function (password: string): boolean {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.toJSON = function (): IUser {
  const { __v, _id, password, ...resto } = this.toObject();

  resto.uid = _id;

  return resto;
};

export const User = model<IUser, IUserModel>("User", userSchema);
