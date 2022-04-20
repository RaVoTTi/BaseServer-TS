import { Request, Response } from "express";
import Detail from "./detail.models";
import Category from "../category/category.models"

export const detailGet = async (req: Request, res: Response) => {
    const details = await Detail.find()


    return res.status(200).json({
        ok: true,
        msg: [],
        result: details,
    });
};

export const detailGetById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const detail = await Detail.findById(id)



    res.status(200).json({
        ok: true,
        msg: [],
        result: [detail],
    });
};

export const detailPost = async (req: Request, res: Response) => {

    const {  ...rest } = req.body
    const detail = new Detail({ ...rest })

    await detail.save()

    res.status(201).json({
        ok: true,
        msg: ["detail created succesful"],
        // result: [detail],
    });
};

export const detailPut = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { ...rest } = req.body;



    const detail = await Detail.findByIdAndUpdate(
        id,
        { ...rest },

    )
    res.status(201).json({
        ok: true,
        msg: ["detail modificated succesful"],
        // result: [detail],
    });
};

export const detailDelete = async (req: Request, res: Response) => {
    const { id } = req.params;

    const detail = await Detail.findByIdAndUpdate(
        id,
        { state: false },

    )


    res.status(200).json({
        ok: true,
        msg: ["detail remove succesful"],
    });
};
