import express from "express";

const router = express.Router();

router.post("/", (req, res, next) => {
  try {
    console.log(req.body);
    res.json({
      status: "success",
      message: "check email",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
