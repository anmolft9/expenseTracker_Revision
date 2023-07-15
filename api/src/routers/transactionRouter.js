import express from "express";
import { addTransaction } from "../models/transactionModel/transactionModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log("asdasd");
    const result = await addTransaction(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "transaction added",
        })
      : res.json({
          status: "failed",
          message: "unable to add transaction",
        });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await addTransaction(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "transaction added",
        })
      : res.json({
          status: "failed",
          message: "unable to add transaction",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
