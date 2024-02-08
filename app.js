const express = require("express");
require("dotenv").config();
const addMovie = require("./controllers/addMovie");

const mongoose = require("mongoose");
const getAllMovies = require("./controllers/getAllMovies");
const getSingleMOvie = require("./controllers/getSingleMovie");
const editMovie = require("./controllers/editMovie");
const deleteMovie = require("./controllers/deleteMovie");
// const movieRecommendation = require("./controllers/movieRecommendation");
//CONNECTION

mongoose
  .connect(process.env.mongo_connection//mongodb url in .env, {})
  .then(() => {
    console.log("Connected to mongoDb successfully");
  })
  .catch(() => {
    console.log("connection to mongoDb not successfully");
  });
const app = express();
app.use(express.json());

//Models
require("./models/movies.model");

// Routes
app.post("/api/movies", addMovie);
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:movie_id", getSingleMOvie);
app.patch("/api/movies", editMovie);
app.delete("/api/movies/:movie_id", deleteMovie);

app.listen(8000, () => {
  console.log("Server started successfully");
});
