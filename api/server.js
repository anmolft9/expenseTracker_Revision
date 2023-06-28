import express from "express";

const app = express();
import cors from "cors";

const PORT = 8000;

//middleware
app.use(express.json());
app.use(cors());

///apis
import userRouter from "./src/routers/userRouter.js";
app.use("/api/v1/user", userRouter);
app.use("/", (req, res) => {
  try {
    res.send("<h3>coming soon</h3>");
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`connected server at http://localhost:${PORT}`);
});
