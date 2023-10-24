import React, { useEffect, useState } from "react";
import axios from "axios";

const TomeUn = () => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/books").then((response) => {
      setChapters(response.data["hydra:member"]);
    });
  }, []);
  return (
    <>
      <section className="bg-cyan-300 h-screen">
        <div className="flex justify-center">
          <img
            src="/medias/bannières-chapitre/part-1.jpg"
            alt=""
            width={1000}
            className="glass-b"
          />
        </div>
        <div>
          {console.log(chapters)}

          {chapters.map((tome) => {
            return (
              <>
                {tome.tome.map((chapter) => {
                  return (
                    <>
                      {chapter.title === "Dio l'envahisseur" ? (
                        <>
                          {chapter.chapter.map((title) => {
                            return (
                              <>
                                <section>
                                  <div className="flex justify-center">
                                    <a
                                      href=""
                                      className="flex justify-center items-center my-1 glass-1"
                                      >
                                      {title.chapterNumber}-{title.chapterTitle}
                                    </a>
                                  </div>
                                </section>
                              </>
                            );
                          })}
                        </>
                          ) : null}
                    </>
                  );
                })}
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default TomeUn;
