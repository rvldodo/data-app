import { check, validationResult } from "express-validator";

export const validationMid =
  ([check("email", "Email not valid").isEmail()],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  });
