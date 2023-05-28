import Card from '../Card/Card.jsx';
import { useDispatch, connect } from "react-redux";
import { filterCards, orderCards } from '../../redux/action.js';
import { useState } from "react";
import style from "./Favorites.module.css"


const Favorites = ({ myFavorites }) => {

  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  }


  return (
    <div className={style.container}>
      <div className={style.selector}>
        <label className={style.label}>order</label>
        <select onChange={handleOrder}>
          <option selected disabled>by order</option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <br />

        <label className={style.label}>order</label>
        <select onChange={handleFilter}>
          <option value="" selected disabled>by gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className={style.cardsFav}>
        {myFavorites?.map(({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
              image={image}
            />
          )
        }
        )
        }
      </div>

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
};

export default connect(mapStateToProps, null)(Favorites);
