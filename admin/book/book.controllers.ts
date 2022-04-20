import { Request, Response } from "express";
import Book from "./book.models";
import Category from "../category/category.models"

export const bookGet = async (req: Request, res: Response) => {
    const books = await Book.find()
        .populate("category", "name")
        .populate("autor", "name")
        .populate("user", "name");

    return res.status(200).json({
        ok: true,
        msg: [],
        result: books,
    });
};

export const bookGetById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const book = await Book.findById(id)
        .populate("user", "name")
        .populate("autor", "name")
        .populate("category", "name");


    res.status(200).json({
        ok: true,
        msg: [],
        result: [book],
    });
};

export const bookPost = async (req: Request, res: Response) => {
    const user = req.user
    console.log(user)
    const { user: userDelete, ...rest } = req.body
    const book = new Book({ ...rest, user: user?._id })

    await book.save()

    res.status(201).json({
        ok: true,
        msg: ["Book created succesful"],
        // result: [book],
    });
};

export const bookPut = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { user, category, ...rest } = req.body;

    const existCategory = await Category.findById(category)

    if (existCategory) {
        rest.category;
    }

    const book = await Book.findByIdAndUpdate(
        id,
        { ...rest },

    )
    res.status(201).json({
        ok: true,
        msg: ["Book modificated succesful"],
        // result: [book],
    });
};

export const bookDelete = async (req: Request, res: Response) => {
    const { id } = req.params;

    const book = await Book.findByIdAndUpdate(
        id,
        { state: false },

    )


    res.status(200).json({
        ok: true,
        msg: ["Book remove succesful"],
    });
};
