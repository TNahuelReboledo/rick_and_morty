const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`;

const getCharById = (req, res) => {
  const { id } = req.params;

  axios.get(URL + id)
    .then((result) => result.data)
    .then(({ id, status, name, species, origin, image, gender }) => {
      if (name) {
        const char = {
          id,
          status,
          name,
          species,
          origin,
          image,
          gender,
        };
        return res.status(200).json(char);
      }
      return res.status(404).send("Not found");
    })
    .catch((error) => error.status(500).send(error.message));
};

module.exports = {
  getCharById,
};
