import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, url, captureDate, mediaType, explanation, liked, toggleLikeImage }) => {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <h2>{captureDate}</h2>
      {mediaType === "image" ? (
        <img className={styles.image} src={url} />
      ) : (
        <iframe className={styles.video} title={captureDate} src={url} />
      )}
      <p>{explanation}</p>
      <button
        onClick={() => {
          //When button is clicked, then toggle like
          toggleLikeImage(captureDate);
        }}
      >
        {liked ? "Dislike 👎" : "Like 👍"}
      </button>
    </div>
  );
};

export default Card;
