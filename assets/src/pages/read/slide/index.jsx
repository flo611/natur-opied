import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./button";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [scans, setScans] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("/api/books").then((response) => {
      setScans(response.data["hydra:member"]);
    });
  }, []);

  const handleClick = (event) => {
    const clickX = event.nativeEvent.offsetX; // Coordonnée X du clic par rapport à l'élément
    const imageWidth = event.target.width;

    // Si le clic est dans les 60% à droite, passe à l'image suivante
    if (clickX > 0.6 * imageWidth) {
      nextImage();
    } else if (clickX < 0.4 * imageWidth) {
      // Si le clic est dans les 40% à gauche, revient à l'image précédente
      prevImage();
    }
  };

  const nextImage = () => {
    const newImage = currentImage + 1;

    // Vérifie que l'image suivante existe
    if (newImage <= images.length) {
      setCurrentImage(newImage);
    }
  };

  const prevImage = () => {
    const newImage = currentImage - 1;

    // Vérifie que l'image précédente existe
    if (newImage >= 1) {
      setCurrentImage(newImage);
    }
  };
  return (
    <div>
      {scans.map((scan) => {
        if (scan.tome[0].title === "Dio l'envahisseur") {
          scan.tome[0].chapter.map((el) => {
            if (el.chapterTitle === "Dio l'envahisseur") {
              let start = el.scans[0].start;
              let end = el.scans[0].end;
              images.push(start);
              el.scans[0].content.map((img) => images.push(img));
              images.push(end);
            }
          });
        }
      })}
      {scans.map((scan) => {
        if (scan.tome[0].title === "Dio l'envahisseur") {
          scan.tome[0].chapter.map((el) => {
            if (el.chapterTitle === "Un nouvel ami") {
              let start = el.scans[0].start;
              let end = el.scans[0].end;
              images.push(start);
              el.scans[0].content.map((img) => images.push(img));
              images.push(end);
            }
          });
        }
      })}
      {scans.map((scan) => {
        if (scan.tome[0].title === "Dio l'envahisseur") {
          scan.tome[0].chapter.map((el) => {
            if (el.chapterTitle === "Chère Erina") {
              let start = el.scans[0].start;
              let end = el.scans[0].end;
              images.push(start);
              el.scans[0].content.map((img) => images.push(img));
              images.push(end);
            }
          });
        }
      })}
      {/* Ajoutez vos images avec des identifiants uniques */}
      <div>
        <img
          src={images[currentImage - 1]}
          alt={`Image ${currentImage}`}
          style={{ width: "70%", cursor: "pointer" }}
          onClick={handleClick}
        />
      </div>
      <div className="grid justify-items-center">
        <Button />
      </div>
    </div>
  );
};

export default ImageSlider;
