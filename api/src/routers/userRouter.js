import express from "express";
import { insertUser } from "../models/userModel/userModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await insertUser(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "check email for confirmation",
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
