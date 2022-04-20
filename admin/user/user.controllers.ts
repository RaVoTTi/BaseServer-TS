import { Request, Response } from "express";
import {User,IUser} from "./user.models";


export const userGet = async (req: Request, res: Response) => {
  const query = { state: true };
  const users = await User.find(query);

  res.status(200).json({
    ok: true,
    msg: [],
    result: [users],
  });
};

export const userGetById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findById(id);


  res.status(200).json({
    ok: true,
    msg: [],
    result: [user],
  });
};

export const userPost = async (req: Request, res: Response) => {
  const { role, isValid, cart,
    finished,
    reading,
    acquire, password , ...rest} = req.body
  
  
  const user = new User({ ...rest, password: User.encryptedPassword(password)});

  await user.save()

  res.status(201).json({
    ok: true,
    msg: ['User created succesful'],
  });
};

export const userPut = async (req: Request, res: Response) => {

  const { id } = req.params;
  const { email, password,...rest } = req.body;

   
  const user = await User.findByIdAndUpdate(id,{ ...rest });

  res.status(201).json({
    ok: true,
    msg: ['User modificated succesful'],
  });
};

export const userDelete = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const user = await User.findByIdAndUpdate(id, {state: false}, {new: true});
  
    res.status(200).json({
      ok: true,
      msg: ['User remove succesful'],
    });
  };
  