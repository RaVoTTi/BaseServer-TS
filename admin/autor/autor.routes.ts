// EXPRESS
import { Router } from "express";
import { check } from "express-validator";

// VALIDATORS
import { validateAutor, validateAutorId } from "./autor.validators";
import { validateCamps } from "../../middlewares/validate-camps";

// CONTROLLERS
import {
  autorDelete,
  autorGet,
  autorGetById,
  autorPost,
  autorPut,
} from "./autor.controllers";

// PATH /api/autor
export const router = Router();

// ROUTES
router.get("/", autorGet);
router.get(
  "/:id",
  [
    check("id", "it isn't a valid id").isMongoId(),
    validateCamps,
    check("id").custom(validateAutorId).withMessage("it isn't a valid id"),
    validateCamps,
  ],
  autorGetById
);
router.post(
  "",
  [
    check("name", "El title es obligatorio").notEmpty(),
    check("name").custom(validateAutor),
    validateCamps,
  ],
  autorPost
);
router.put(
  "/:id",
  [
    check("id", "it isn't a valid id").isMongoId(),
    validateCamps,
    check("id").custom(validateAutorId).withMessage("it isn't a valid id"),
    validateCamps,
    check("name", "El title es obligatorio").notEmpty(),
    check("name").custom(validateAutor),
    validateCamps,
  ],
  autorPut
);
router.delete(
  "/:id",
  [
    check("id", "it isn't a valid id").isMongoId(),
    validateCamps,
    check("id").custom(validateAutorId).withMessage("it isn't a valid id"),
    validateCamps,
  ],
  autorDelete
);
