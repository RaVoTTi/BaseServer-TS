// EXPRESS
import { Router } from "express";
import { check } from "express-validator";

// MIDDLEWARES
import { validateCamps } from "../../middlewares/validate-camps";
import { validatePropertyId } from "./property.validators";

// ROUTES
import { propertyDelete, propertyGet, propertyGetById, propertyPost, propertyPut } from './property.controllers';

// PATH /api/property
export const router = Router()

// ROUTES
router.get("/", propertyGet)
router.get(
  "/:id",
  [
    check("id", "Id isn't valid").isMongoId(),
    validateCamps,
    check("id")
      .custom(validatePropertyId)
      .withMessage("It isn't location id valid"),
    validateCamps,
  ],
  propertyGetById
);
router.post(
  "/",
  [
    // TO DO
  ],
  propertyPost
);
router.put(
  "/:id",
  [
    check("id", "Id isn't valid").isMongoId(),
    validateCamps,
    check("id")
      .custom(validatePropertyId)
      .withMessage("It isn't location id valid"),
    validateCamps,
  ],
  propertyPut
);
router.delete(
  "/:id",
  [
    check("id", "Id isn't valid").isMongoId(),
    validateCamps,
    check("id")
      .custom(validatePropertyId)
      .withMessage("It isn't location id valid"),
    validateCamps,
  ],
  propertyDelete
);



