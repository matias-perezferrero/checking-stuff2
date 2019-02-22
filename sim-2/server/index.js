require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");

//CONTROLLERS
const c = require("./controllers/controller");

//ENV
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

// SESSION
// app.use(
//   session({
//     secret: SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 1000000000
//     }
//   })
// );

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);

  console.log("Connected to database");
  app.listen(SERVER_PORT, () =>
    console.log(`Listening on port ${SERVER_PORT}`)
  );
});

// ENDPOINTS

app.get("/api/houses", c.getAllHouses);
app.post("/api/house", c.addHouse);
app.delete("/api/house/:id", c.deleteHouse);
