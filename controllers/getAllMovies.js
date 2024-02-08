const mongoose = require("mongoose");
const getAllMovies = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  try {
    const moviesData = await moviesModel.find({});
    res.status(200).json({
      status: "Success",
      data: moviesData,
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      data: moviesData,
    });
    return;
  }
};
module.exports = getAllMovies;
