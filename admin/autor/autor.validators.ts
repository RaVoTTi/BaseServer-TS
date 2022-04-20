import Autor from "./autor.models"

export const validateAutor = async (name: string) => {
  const exist = await Autor.findOne({ name: name.toUpperCase() });

  if (exist) {
    throw new Error(`La autor ${name} esta registrado`);
  }
};
export const validateAutorId = async (id: string) => {
  const exist = await Autor.findById(id);

  if (!exist) {
    throw new Error(`El id ${id} no existe`);
  }
};
