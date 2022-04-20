import { User } from "./user.models"


export const validateUserId = async (id: string) => {
  const exist = await User.findById(id);
  if (!exist) {
    throw new Error(`El id ${id} no existe`);
  }
};
export const validateEmail = async (email: string) => {
  const exist = await User.findOne({ email });
  if (exist) {
    throw new Error(`El email ${email} esta registrado`);
  }
};