const ClearCookie = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    })
    .send({ success: true });
};

export default ClearCookie;
