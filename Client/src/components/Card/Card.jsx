import { React, useState, useEffect } from "react";
import style from './Card.module.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action";

function Card({ id, name, status, species, gender, origin, image, onClose, myFavorites, addFav, removeFav }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({ id, name, status, species, gender, origin, image, onClose });
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (

      <div className={style.container}>

         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

         <button className={style.clear} onClick={() => onClose(id)}>&times;</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         {/* <h2>{props.origin}</h2> */}
         <img src={image} alt='' />
      </div>
   );
};
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      removeFav: (id) => dispatch(removeFav(id)),
      addFav: (character) => dispatch(addFav(character)),
   }
};


export default connect(mapStateToProps, mapDispatchToProps)(Card);