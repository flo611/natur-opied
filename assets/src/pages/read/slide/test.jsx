import React, { useState, useEffect } from "react";
import axios from "axios";

const TestSlider = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [currentScan, setCurrentScan] = useState(0);
  const [bookData, setBookData] = useState();

  useEffect(() => {
    // Utilise Axios pour récupérer les données depuis le serveur PHP
    axios
      .get("http://localhost:8000/api/books")
      .then((response) => setBookData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Assure que cela ne s'exécute qu'une seule fois lors du montage du composant

  const handleClick = (event) => {
    const clickX = event.nativeEvent.offsetX;
    const imageWidth = event.target.width;

    if (clickX > 0.6 * imageWidth) {
      nextScan();
    } else if (clickX < 0.4 * imageWidth) {
      prevScan();
    }
  };

  const nextScan = () => {
    const newScan = currentScan + 1;
    if (newScan < bookData.tome[1].chapter[currentChapter].scans.length) {
      setCurrentScan(newScan);
    } else {
      // Si vous atteignez la dernière image du chapitre, passez au chapitre suivant
      nextChapter();
    }
  };

  const prevScan = () => {
    const newScan = currentScan - 1;
    if (newScan >= 0) {
      setCurrentScan(newScan);
    } else {
      // Si vous êtes sur la première image du chapitre, passez au chapitre précédent
      prevChapter();
    }
  };

  const nextChapter = () => {
    const newChapter = currentChapter + 1;
    if (newChapter < bookData.tome[1].chapter.length) {
      setCurrentChapter(newChapter);
      setCurrentScan(1); // Remettre à zéro le scan lorsque vous passez à un nouveau chapitre
    }
  };

  const prevChapter = () => {
    const newChapter = currentChapter - 1;
    if (newChapter >= 1) {
      setCurrentChapter(newChapter);
      setCurrentScan(1); // Remettre à zéro le scan lorsque vous passez à un nouveau chapitre
    }
  };

  return (
    <div>
      {/* Assurez-vous que les données sont chargées avant de les afficher */}
      {bookData.map((tome) => {
        return (
          <>
            {tome.tome?.map((chapter) => {
              return (
                <>
                  {chapter.chapter?.map((scans) => {
                    return (
                      <>
                        <>
                          {scans.chapterNumber === 1 ? (
                            <>
                              {scans.scans?.map((img) => {
                                return (
                                  <>
                                    <div>
                                      {img.content?.map((src) => {
                                        return (
                                          <div>
                                            <img
                                              src={src}
                                              style={{
                                                width: "30%",
                                                cursor: "pointer",
                                              }}
                                              onClick={handleClick}
                                            />
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </>
                                );
                              })}
                            </>
                          ) : null}
                        </>
                      </>
                    );
                  })}
                </>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default TestSlider;
