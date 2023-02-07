const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connectDB = require("./config/db");

const colors = require("colors");

const productRoutes = require("./routes/productRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`.blue.bold);
});
