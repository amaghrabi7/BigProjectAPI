const express = require("express");
const db = require("./db/models");
const cors = require("cors");
const universityRoutes = require("./routes/universities");

const app = express();

app.use(cors());
app.use(express.json());
// using routes
app.use("/universities", universityRoutes);

const run = async () => {
  try {
    await db.sequelize.sync({ alter: true });
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
