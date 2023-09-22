import React from "react";
import "../Styles/characterdetail.css";

const CharacterDetail = ({ character }) => {
  const { name, description, comics, series, stories, events } = character;

  return (
    <div className="character-detail-container">
      <div className="image-detail">
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt=""
        />
        <h2>{name}</h2>
        <p>{description || "No description available"}</p>
      </div>

      <div className="comics">
        <h3>Comics:</h3>
        <ul>
          {comics.items.map((comic) => (
            <li key={comic.resourceURI}>{comic.name}</li>
          ))}
        </ul>
      </div>

      <div className="Series">
        <h3>Series:</h3>
        <ul>
          {series.items.map((serie) => (
            <li key={serie.resourceURI}>{serie.name}</li>
          ))}
        </ul>
      </div>

      <div className="Stories">
        <h3>Historias:</h3>
        <ul>
          {stories.items.map((story) => (
            <li key={story.resourceURI}>{story.name}</li>
          ))}
        </ul>
      </div>

      <div className="events">
        <h3>Eventos:</h3>
        <ul>
          {events.items.map((event) => (
            <li key={event.resourceURI}>{event.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetail;
