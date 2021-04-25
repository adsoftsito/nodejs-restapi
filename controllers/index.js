const models = require("../database/models");

const createUser = async (req, res) => {
  try {
    const user = await models.User.create(req.body);
    return res.status(201).json({
      user
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  console.log('getting users');
  try {
    const users = await models.User.findAll({
      include: [
        /*{
          model: models.Comment,
          as: "comments"
        },
        {
          model: models.User,
          as: "author"
        }*/
      ]
    });
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createUser,
  getAllUsers
 // getPostById,
 // updatePost,
 // deletePost
};
