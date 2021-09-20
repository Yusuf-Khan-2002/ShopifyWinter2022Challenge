import React, { useEffect, useState } from "react";
import { getImageData } from "../../api";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    /**Fetch data and set images to fetched data */
    const getData = async () => {
      const data = await getImageData();
      setImages(data);
    };

    getData();
  }, []);

  /**Finds image with corresponding date in images and toggles liked attribute */
  const toggleLikeImage = (imageDate) => {
    //Find index of the image that has date of imageDate in images
    const i = images.findIndex((image) => {
      return image.date === imageDate;
    });

    //Create a shallow copy of images
    let copy = [...images];

    //Set image at index i to liked
    copy[i].liked = !copy[i].liked;

    //Set images to copy
    setImages(copy);
  };

  return (
    <div className={styles.cards}>
      {images.map((image) => {
        return (
          <Card
            key={image.date}
            title={image.title}
            url={image.url}
            captureDate={image.date}
            mediaType={image["media_type"]}
            explanation={image.explanation}
            liked={image.liked}
            toggleLikeImage={toggleLikeImage}
          />
        );
      })}
    </div>
  );
};

export default Cards;
