const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 8);

  const user = await User.create({
    email: req.body.email,
    password: hash
  });

  res.status(201).send(user);
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(401).send();

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(401).send();

  const token = jwt.sign({ id: user._id }, "secret");

  res.send({ token });
};
