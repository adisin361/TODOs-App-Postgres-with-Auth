
const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const response = await fetch(`http://localhost:5000/token/validate?token=${token}`);
    if (response.status === 404) {
      throw new Error('Invalid Token');
    }
    next();
  }

  catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

module.exports = { validateToken }

