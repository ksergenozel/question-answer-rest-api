const getAllQuestions = (req, res, next) => {
  res
    .status(200)
    .json({
      status: true
    });
};

module.exports = {
  getAllQuestions,
};