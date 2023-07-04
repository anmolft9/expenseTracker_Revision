import express from "express";
import { insertUser } from "../models/userModel/userModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await insertUser(req.body);
    result._id
      ? res.json({
          status: "success",
          message: "Registration Successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to Register",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "The email id already exist";
    }
    next(error);
  }
});

export default router;
