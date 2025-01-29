const VerifyOrigin = (req, res, next) => {
  try {
    const requestOrigin = req.headers.origin;
    const allowedOrigin = new URL(process.env.ORIGIN);

    if (
      requestOrigin &&
      requestOrigin.toLowerCase() === allowedOrigin.origin.toLowerCase()
    ) {
      return next();
    } else {
      return res.status(403).send("Unauthorized Request");
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

export { VerifyOrigin };
