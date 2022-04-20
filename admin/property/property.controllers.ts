import { Request, Response } from "express";
import Property from "./property.models";
import Category from "../category/category.models"

export const propertyGet = async (req: Request, res: Response) => {
    const properties = await Property.find()
        .populate("category", "name")
        .populate("autor", "name")
        .populate("user", "name");

    return res.status(200).json({
        ok: true,
        msg: [],
        result: properties,
    });
};

export const propertyGetById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const property = await Property.findById(id)
        .populate("user", "name")
        .populate("autor", "name")
        .populate("category", "name");


    res.status(200).json({
        ok: true,
        msg: [],
        result: [property],
    });
};

export const propertyPost = async (req: Request, res: Response) => {
    const user = req.user
    console.log(user)
    const { user: userDelete, ...rest } = req.body
    const property = new Property({ ...rest, user: user?._id })

    await property.save()

    res.status(201).json({
        ok: true,
        msg: ["property created succesful"],
        // result: [property],
    });
};

export const propertyPut = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { user, category, ...rest } = req.body;

    const existCategory = await Category.findById(category)

    if (existCategory) {
        rest.category;
    }

    const property = await Property.findByIdAndUpdate(
        id,
        { ...rest },

    )
    res.status(201).json({
        ok: true,
        msg: ["property modificated succesful"],
        // result: [property],
    });
};

export const propertyDelete = async (req: Request, res: Response) => {
    const { id } = req.params;

    const property = await Property.findByIdAndUpdate(
        id,
        { state: false },

    )


    res.status(200).json({
        ok: true,
        msg: ["property remove succesful"],
    });
};
