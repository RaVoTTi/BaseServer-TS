import { Router } from "express";

export const router = Router()

// ROUTES
// import { router as bookRoute } from "./book/book.routes";
import { router as categoryRoute } from "./category/category.routes";
import { router as autorRoute } from "./autor/autor.routes";


// PATH /api/admin

// router.use("/book",  bookRoute);
router.use("/category", categoryRoute);
router.use("/autor", autorRoute);
