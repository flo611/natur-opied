import React, { useState, useEffect } from "react";
import axios from "axios";

const Button = () => {
  const [currentChapter, setCurrentChapter] = useState(1);

  const handleNextChapter = () => {
    const nextChapterNumber = currentChapter + 1;
    fetchData(nextChapterNumber);
  };

  const handlePreviousChapter = () => {
    const previousChapterNumber = currentChapter - 1;
    fetchData(previousChapterNumber);
  };

  const fetchData = async (chapterNumber) => {
    try {
      const response = await axios.get("/api/books");
      const data = response.data;
      // Mettez à jour l'état ou effectuez toute autre logique ici avec les données du chapitre
      setCurrentChapter;

      chapterNumber[0].map((tome) => {
        return (
          <>
            {tome[0]?.map((chapter) => {
              return <>{chapter[0]?.title}</>;
            })}
          </>
        );
      });

      console.log("Données du chapitre :", data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données du chapitre :",
        error
      );
    }
  };

  return (
    <>
      <section>
        <button
          className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
          onClick={handlePreviousChapter}
        >
          Précédent
        </button>
        <button
          className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-blue-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
          onClick={handleNextChapter}
        >
          Suivant
        </button>
      </section>
    </>
  );
};

export default Button;
