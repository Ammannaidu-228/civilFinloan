const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectToDatabase = require("./utils/dbConnection");
const port = 3000 || process.env.PORT;
const serviceRoutes = require("./routes/serviceRoutes");
const memberRoutes = require("./routes/memberRoutes");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../ui/dist")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/service", serviceRoutes);
app.use("/member", memberRoutes);


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  connectToDatabase();
});
