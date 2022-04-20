import Detail from "./detail.models"


export const validateDetailId = async (id: string) => {
  const exist = await Detail.findById(id);
  if (!exist) {
    throw new Error(`El id ${id} no existe`);
  }
};
