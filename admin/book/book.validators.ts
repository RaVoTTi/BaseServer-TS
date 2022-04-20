import Book from "./book.models"


export const validateBookId = async (id: string) => {
  const exist = await Book.findById(id);
  if (!exist) {
    throw new Error(`El id ${id} no existe`);
  }
};
export const validateName = async (name: string) => {
  const exist = await Book.findOne({ name });
  if (exist) {
    throw new Error(`El name ${name} esta registrado`);
  }
};