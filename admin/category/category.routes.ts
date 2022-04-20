// EXPRESS
import { Router } from "express";
import { check } from "express-validator";

// VALIDATORS
import { validateCategory, validateCategoryId } from "./category.validators";
import { validateCamps } from "../../middlewares/validate-camps";

// CONTROLLERS
import {
  categoryDelete,
  categoryGet,
  categoryGetById,
  categoryPost,
  categoryPut,
} from "./category.controllers";

// PATH /api/category
export const router = Router();

// ROUTES
router.get("/", categoryGet);
router.get(
  "/:id",
  [
    check("id", "it isn't a valid id").isMongoId(),
    validateCamps,
    check("id").custom(validateCategoryId).withMessage("it isn't a valid id"),
    validateCamps,
  ],
  categoryGetById
);
router.post(
  "",
  [
    check("name", "El name es obligatorio").notEmpty(),
    check("name").custom(validateCategory),
    validateCamps,
  ],
  categoryPost
);
router.put(
  "/:id",
  [
    check("id", "it isn't a valid id").isMongoId(),
    validateCamps,
    check("id").custom(validateCategoryId).withMessage("it isn't a valid id"),
    validateCamps,
    check("name", "El name es obligatorio").notEmpty(),
    check("name").custom(validateCategory),
    validateCamps,
  ],
  categoryPut
);
router.delete(
  "/:id",
  [
    check("id", "it isn't a valid id").isMongoId(),
    validateCamps,
    check("id").custom(validateCategoryId).withMessage("it isn't a valid id"),
    validateCamps,
  ],
  categoryDelete
);
