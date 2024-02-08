// const { Configuration, OpenAIApi } = require("openai");
// const mongoose = require("mongoose");

// const movieRecommendation = async (req, res) => {
//   const moviesModel = mongoose.model("movies");

//   const allMovies = await moviesModel.find({});

//   console.log(moviesString);

//   const moviesString = allMovies.map((el) => el.movie_name);

//   const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   });

//   const openai = new OpenAIApi(configuration);

//   const completion = await openai.createCompletion({
//     engine: "text-davinci-003",
//     prompt: "Generate a creative story about cats",
//   });

//   console.log(completion.data.choices[0].text);

//   res.status(200).json({
//     status: "Hello from OpenAi",
//   });
// };

// module.exports = movieRecommendation;
