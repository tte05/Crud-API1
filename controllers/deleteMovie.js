const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const movie_id = req.params.movie_id;

  const getMovie = await moviesModel.findOne({
    _id: movie_id,
  });
  try {
    if (!getMovie) throw "This movie don't exist ";
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e,
    });
    return;
  }
  try {
    await moviesModel.deleteOne({
      _id: movie_id,
    });
  } catch (e) {
    res.status(400).json({
      success: "Failed",
      message: "Movie not deleted",
    });
  }

  res.status(200).json({
    status: "success",
    message: "Movie deleted successfully",
  });
};

module.exports = deleteMovie;
