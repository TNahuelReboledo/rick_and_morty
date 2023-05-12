import { connect } from "react-redux";
import Card from '../Card/Card.jsx';


const Favorites = ({ myFavorites }) => {
  return (
    <div>
      {myFavorites?.map(({ id, name, status, species, gender, origin, image }) => {
        return (
          <Card
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
  )
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
};

export default connect(mapStateToProps, null)(Favorites);
