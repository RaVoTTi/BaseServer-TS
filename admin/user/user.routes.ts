// EXPRESS
import { Router } from "express";
import { check } from "express-validator";

// MIDDLEWARES
import { validateCamps } from "../../middlewares/validate-camps";
import { validateEmail, validateUserId } from "./user.validators";
import { validateRole } from "../role/role.validators";

// ROUTES
import { userDelete, userGet, userGetById, userPost, userPut } from './user.controllers';

// PATH /api/user
export const router = Router()

// ROUTES
router.get("/", userGet)
router.get(
  "/:id",
  [
    check("id", "Id isn't valid").isMongoId(),
    validateCamps,
    check("id")
      .custom(validateUserId)
      .withMessage("It isn't location id valid"),
    validateCamps,
  ],
  userGetById
);
router.post(
  "",
  [
    check("name", "Name is required").notEmpty(),
    check("email", "Email is required").isEmail(),
    check("role", "Role is required").notEmpty(),
    check("password", "Password need to be more than 5 char").isLength({
      min: 6,
    }),
    validateCamps,
    check("email").custom(validateEmail).withMessage("Email is in used"),
    check("role")
      .custom(validateRole)
      .withMessage("Role isn't valid"),
    validateCamps,
  ],
  userPost
);
router.put(
  "/:id",
  [
    check("id", "Id isn't valid").isMongoId(),
    validateCamps,
    check("id")
      .custom(validateUserId)
      .withMessage("It isn't location id valid"),
    validateCamps,
    check("name", "Name is required").notEmpty(),
    check("role", "Role is required").notEmpty(),

    validateCamps,
    check('role').custom(validateRole).withMessage("Role isn't valid"),
    validateCamps,
  ],
  userPut
);
router.delete(
  "/:id",
  [
    check("id", "Id isn't valid").isMongoId(),
    validateCamps,
    check("id")
      .custom(validateUserId)
      .withMessage("It isn't location id valid"),
    validateCamps,
  ],
  userDelete
);



