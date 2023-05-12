import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload]
      };
    // de esta manera le agregamos lo que queremos a lo que ya hay en el  array 
    // si no lo esribimos asi, y en cambio lo hacemos asi -> myFavorites : action.payload el valor se pisaria;

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== Number(action.payload)
        )
      };
    // de esta manera filtramos todos los personajes que tengan un id diferente al que se le pasa 
    // a la porpiedad payload;

    default:
      return { ...state };
  }
};

export default reducer;

