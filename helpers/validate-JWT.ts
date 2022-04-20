

import { Request, Response, NextFunction } from "express";
import { User } from "../admin/user/user.models";
import jwt, { JwtPayload } from "jsonwebtoken";

export const validateJwt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("super-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: ["Token doesn't exist"],
      result: [],
    });
  }

  try {
    if (!process.env.PRIVATEKEY) {
      return res.status(500).json({
        ok: false,
        msg: ["Private Key doesn't exist"],
        result: [],
      });
    }

    const payload = jwt.verify(token, process.env.PRIVATEKEY) as JwtPayload;

    // console.log(payload);
    const { uid } = payload;

    const user = await User.findById(uid);
    if (!user!.state) {
      return res.status(401).json({
        ok: false,
        msg: ["Invalid Token"],
        result: [],
      });
    }
    Object.assign(req, { user });
    next();
  } catch (error) {
  
    return res.status(401).json({
      ok: false,
      msg: ["Invalid Token"],
      result: [],
    });
  }
};
