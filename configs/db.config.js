const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI; //|| "mongodb:localhost/project-class-repo-server";

module.exports = mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Successfully connected to the database`))
  .catch((error) => {
    console.error(
      `An error ocurred trying to connect to the database  `,
      error
    );
    process.exit(1);
  });

// mongoose
//   .connect("mongodb://localhost/project-class-repo-server", {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then((x) =>
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   )
//   .catch((err) => console.error("Error connecting to mongo", err));
