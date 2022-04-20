import { Request, Response } from "express";
import Category from "./category.models";

export const categoryGet = async (req: Request, res: Response) => {
  const query = { state: true };
  const categories = await Category.find(query);

  return res.status(200).json({
    ok: true,
    msg: [],
    result: [categories],
  });
};

export const categoryGetById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const category = await Category.findById(id);


  return res.status(200).json({
    ok: true,
    msg: [],
    result: [category],
  });
};

export const categoryPost = async (req: Request, res: Response) => {
  const name: string = (req.body.name as string).toUpperCase();
  const category = new Category({ name });

  await category.save()

  res.status(201).json({
    ok: true,
    msg: ['Category created succesful'],
  });
};

export const categoryPut = async (req: Request, res: Response) => {
  const name: string = (req.body.name as string).toUpperCase();
  const { id } = req.params;

  const category = await Category.findByIdAndUpdate(id, {name}, {new: true});

  res.status(201).json({
    ok: true,
    msg: ['Category modificated succesful'],
  });
};

export const categoryDelete = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const category = await Category.findByIdAndUpdate(id, {state: false}, {new: true});
  
    res.status(200).json({
      ok: true,
      msg: ['Category remove succesful'],
    });
  };
  