import Role from "../role/role.models";

export const validateRole = async (role: string) => {

  const exist = await Role.findOne({ name:role });
  console.log(exist);

  if (exist === null) {
    console.log('no existe')
    throw new Error(`El rol ${role} no es valido`);
  }
};
