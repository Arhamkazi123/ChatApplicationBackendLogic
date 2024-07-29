import usermodel from "../models/authmodel.js";

const fetchallusers = async (req, res) => {
  const userloggedin = req.user._id;
  try {
    const users = await usermodel
      .find({ _id: { $ne: userloggedin } })
      .select("-password");

    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Error retrieving sidebar users" });
  }
};

export { fetchallusers };
