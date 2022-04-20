import { Request, Response } from "express";
import Autor from "./autor.models";

export const autorGet = async (req: Request, res: Response) => {
  const query = { state: true };
  const autors = await Autor.find(query);

  return res.status(200).json({
    ok: true,
    msg: [],
    result: [autors],
  });
};

export const autorGetById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const autor = await Autor.findById(id);


  return res.status(200).json({
    ok: true,
    msg: [],
    result: [autor],
  });
};

export const autorPost = async (req: Request, res: Response) => {
  const name: string = (req.body.name as string).toUpperCase();
  const autor = new Autor({ name });

  await autor.save()

  res.status(201).json({
    ok: true,
    msg: ['Autor created succesful'],

  });
};

export const autorPut = async (req: Request, res: Response) => {
  const name: string = (req.body.name as string).toUpperCase();
  const { id } = req.params;

  const autor = await Autor.findByIdAndUpdate(id, {name}, {new: true});

  res.status(201).json({
    ok: true,
    msg: ['Autor Created succesful'],

  });
};

export const autorDelete = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const autor = await Autor.findByIdAndUpdate(id, {state: false}, {new: true});
  
    res.status(200).json({
      ok: true,
      msg: ['Autor succesful'],
  
    });
  };
  