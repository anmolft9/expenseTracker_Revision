import express from "express";
import { insertUser } from "../models/userModel/userModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await insertUser(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "check email",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
