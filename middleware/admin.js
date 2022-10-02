const adminAuth = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).send("you are not a admin !!!");
  }
  next();
};

module.exports = adminAuth;
