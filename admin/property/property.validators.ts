import Book from "./property.models"


export const validatePropertyId = async (id: string) => {
  const exist = await Book.findById(id);
  if (!exist) {
    throw new Error(`El id ${id} no existe`);
  }
};
