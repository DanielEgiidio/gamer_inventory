const registerUser = (req, res) => {
  if (!req.body.email) {
    res.status(400);
    throw new Error("Por favor informe um email");
  }
  res.send("Register User");
};

module.exports = {
  registerUser,
};
