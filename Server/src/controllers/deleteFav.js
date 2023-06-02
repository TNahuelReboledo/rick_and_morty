import { favorite } from "../DB_connection";

module.exports = deleteFav = async (req, res) => {
   try {
      const { id } = req.params;
      const favArray = [];

      const deleteFav = await favorite.destroy({
         where: {
            id: id,
         },
      });
      if (id) {
         deleteFav();
         const favs = await favorite.findAll({
            where: {
               id: !id,
            },
         });

         favArray.push(favs);

         return {
            favArray
         };
      }
   } catch (error) {
      res.status(500).send(error.message);
   }
};
