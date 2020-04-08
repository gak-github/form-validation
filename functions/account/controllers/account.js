const _get = require('lodash').get
// @desc get youtube videos for the tiven search term
// @route GET /api/v1/youtube
// @access Public
exports.createAccount = async (req, res, next) => {
  try {
    console.log("=====request params=====", req.body);
    const response = { firstName: req.body.firstName, lastName: req.body.lastName };
    return res.status(200).json({
      success: true,
      data: response
    });
  } catch(error) {
    return res.send(500).json({
      success: false,
      error: error.message,
    });
  }
};
