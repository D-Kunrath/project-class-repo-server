require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Configura o app para entender requisições com tipo de corpo JSON
app.use(express.json());
app.use(cors({ origin: process.env.CORS }));
// app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.static(path.join(__dirname, '/public')));
app.use((req, res, next) => {
  const hostUrl = req.get("host");
  if (hostUrl.includes("/api") === true) {
    return res.sendFile(dirname + "/public/index.html");
  }
  return
});
const authRouter = require("./routes/auth.routes");
const classroomRouter = require("./routes/classroom.routes");
const repoRouter = require("./routes/repo.routes");

require("./configs/db.config");

require("./configs/passport.config")(app);

app.use("/api", authRouter);
app.use("/api", classroomRouter);
app.use("/api", repoRouter);

app.listen(process.env.PORT, () => console.log("running at port", process.env.PORT));