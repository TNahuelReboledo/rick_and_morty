let miFavorites = [];

const postFav = (req, res) => {
  const char = req.body;
  miFavorites.push(char);

  return res.status(200).json(miFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  const index = miFavorites.findIndex((fav) => fav.id === id);
  miFavorites.splice(index, 1);

  //! PUEDE QUE NO FUNCIONE EL SPLICE!!!--------------------------------------------

  return res.status(200).json(miFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
