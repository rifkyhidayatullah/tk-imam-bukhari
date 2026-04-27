require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/news", require("./routes/news"));
app.use("/api/contact", require("./routes/contact"));

app.listen(process.env.PORT, () => {
  console.log("Server Running on Port " + process.env.PORT);
});