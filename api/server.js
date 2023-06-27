import express from "express";

const app = express();

const PORT = 8000;

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
