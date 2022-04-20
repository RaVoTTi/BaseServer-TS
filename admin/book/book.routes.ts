// EXPRESS
import { Router } from "express";
import { check } from "express-validator";

// MIDDLEWARES
import { validateCamps } from "../../middlewares/validate-camps";
import { validateName, validateBookId } from "./book.validators";
import { validateCategory } from "../category/category.validators";

// ROUTES
import { bookDelete, bookGet, bookGetById, bookPost, bookPut } from './book.controllers';
import { validateAutor } from "../autor/autor.validators";

// PATH /api/book
export const router = Router()

// ROUTES
router.get("/", bookGet)
router.get(
  "/:id",
  [
    check("id", "Id isn't valid").isMongoId(),
    validateCamps,
    check("id")
      .custom(validateBookId)
      .withMessage("It isn't location id valid"),
    validateCamps,
  ],
  bookGetById
);
router.post(
  "/",
  [
    check("name", "Name is required").notEmpty(),
    check("price", "price is required").notEmpty().isNumeric(),
    check("category", "category is required").notEmpty(),
    check("autor", "autor is required").notEmpty(),

    check("password", "Password need to be more than 5 char").isLength({
      min: 6,
    }),
    validateCamps,
    check("name").custom(validateName).withMessage("name is in used"),
    check("category")
      .custom(validateCategory)
      .withMessage("category isn't valid"),
    check("autor")
      .custom(validateAutor)
      .withMessage("autor isn't valid"),
    validateCamps,
  ],
  bookPost
);
router.put(
  "/:id",
  [
    check("id", "Id isn't valid").isMongoId(),
    validateCamps,
    check("id")
      .custom(validateBookId)
      .withMessage("It isn't location id valid"),
    validateCamps,
    check("name", "Name is required").notEmpty(),
    check("category", "category is required").notEmpty(),

    validateCamps,
    check('category').custom(validateCategory).withMessage("category isn't valid"),
    validateCamps,
  ],
  bookPut
);
router.delete(
  "/:id",
  [
    check("id", "Id isn't valid").isMongoId(),
    validateCamps,
    check("id")
      .custom(validateBookId)
      .withMessage("It isn't location id valid"),
    validateCamps,
  ],
  bookDelete
);



