import { Link } from "react-router-dom";
import "../stylesheets/_characterDetail.scss";

function CharacterDetail({ characters }) {
  //console.log(characters);
  return (
    <div className="info-container">
      <section className="info">
        <div className="info-back">
          <Link to="/">Volver</Link>
        </div>
        <img src="" alt="" className="info-img" />
        <article className="info-text">
          <ul className="info-text__list">
            <li className="info-text__list--elem">
              <h2>{characters.name}</h2>
            </li>
            <li className="info-text__list--elem">
              Status: {/*characters.status*/}
            </li>
            <li className="info-text__list--elem">
              Specie: {/*characters.species*/}
            </li>
            <li className="info-text__list--elem">
              Origin: {/*{characters.origin}*/}
            </li>
            <li className="info-text__list--elem">
              Episode: {/*characters.episode*/}
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default CharacterDetail;
