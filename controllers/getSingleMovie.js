const mongoose = require("mongoose");

const getSingleMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  try {
    const moviesData = await moviesModel.findOne({
      _id: req.params.movie_id,
    });
    res.status(200).json({
      status: "Success  ",
      data: moviesData,
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
    return;
  }
};
module.exports = getSingleMovie;
