
import Card from "../Card/Card";
import style from "./Cards.module.css"

export default function Cards({ characters, onClose }) {


   return (
      <div className={style.containerCharacter}>

         {characters.map(({ id, name, status, species, gender, image }) => {
            return (
               <Card
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
               />)
         })}
      </div>
   )
};
