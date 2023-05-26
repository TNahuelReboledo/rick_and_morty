const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`;

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(URL + id);
    const data = response.data;
    const { status, name, species, origin, image, gender } = data;
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
  } catch (error) {
    (error) => error.status(500).send(error.message);
  }
};

module.exports = {
  getCharById,
};
