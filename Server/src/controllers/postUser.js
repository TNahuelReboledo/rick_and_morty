import { DataTypes } from "sequelize";
import { User } from "../DB_connection";

module.exports = postUser = async (req, res) => {
   try {
      const { email, password } = req.body;

      if (!email || !password) {
         res.status(400).send("Faltan datos");
      } else {
         const newUser = await User.create({
            email: {
               type: DataTypes.STRING,
               allowNull: false,
               isEmail: true,
            },
            password: {
               type: DataTypes.STRING,
               allowNull: false,
            },
         });
         res.status(200).json(newUser);
      }
   } catch (error) {
      res.status(500).send(error.message);
   }
};
