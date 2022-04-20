import Category from "./category.models"

export const validateCategory = async (name: string) => {
  const exist = await Category.findOne({ name: name.toUpperCase() });

  if (exist) {
    throw new Error(`La Category ${name} esta registrado`);
  }
};
export const validateCategoryId = async (id: string) => {
  const exist = await Category.findById(id);

  if (!exist) {
    throw new Error(`El id ${id} no existe`);
  }
};
