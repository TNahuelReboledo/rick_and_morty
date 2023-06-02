import { User } from "../DB_connection";

module.exports = login = async (req, res) => {
   try {
      const { email, password } = req.query;
      if (!email || !password) {
         res.status(400).send("faltan datos");
      } else {
         const findUserByEmail = await User.findOne({
            where: {
               email: email,
            },
         });
         if (!findUserByEmail) {
            res.status(404).send("Usuario no encontrado");
         } else {
            const findUserByPass = await User.findOne({
               where: {
                  password: password,
               },
            });
            if (!findUserByPass) {
               res.status(403).send("Contrasena incorrecta");
            } else {
               res.send({ access: true });
            }
         }
      }
   } catch (error) {
      res.status(500).send(error.message);
   }
};
