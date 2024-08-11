const fetchUser = async (req, res, next) => {
  const token = await req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "Please Authenticate using a valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({ errors: "please authenticate" });
    }
  }
};
module.exports = fetchUser