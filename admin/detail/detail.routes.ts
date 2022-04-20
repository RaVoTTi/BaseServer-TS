// EXPRESS
import { Router } from "express";
import { check } from "express-validator";

// MIDDLEWARES
import { validateCamps } from "../../middlewares/validate-camps";
import { validateDetailId } from "./detail.validators";

// ROUTES
import { detailDelete, detailGet, detailGetById, detailPost, detailPut } from './detail.controllers';

// PATH /api/detail
export const router = Router()

// ROUTES
router.get("/", detailGet)
router.get(
  "/:id",
  [
    check("id", "Id isn't valid").isMongoId(),
    validateCamps,
    check("id")
      .custom(validateDetailId)
      .withMessage("It isn't location id valid"),
    validateCamps,
  ],
  detailGetById
);
router.post(
  "/",
  [

  ],
  detailPost
);
router.put(
  "/:id",
  [
    check("id", "Id isn't valid").isMongoId(),
    validateCamps,
    check("id")
      .custom(validateDetailId)
      .withMessage("It isn't location id valid"),
    validateCamps,
 
  ],
  detailPut
);
router.delete(
  "/:id",
  [
    check("id", "Id isn't valid").isMongoId(),
    validateCamps,
    check("id")
      .custom(validateDetailId)
      .withMessage("It isn't location id valid"),
    validateCamps,
  ],
  detailDelete
);



