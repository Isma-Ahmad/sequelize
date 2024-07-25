const express = require("express");
const routes = require("./routes");
const { sequelize } = require("./models"); 
const app = express();
app.use(express.json());

app.use("/", routes);

const PORT =  3000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });