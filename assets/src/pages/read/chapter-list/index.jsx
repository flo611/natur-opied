import React, { useState, useEffect } from "react";
import axios from "axios";

const ChapterList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/books").then((response) => {
      setList(response.data["hydra:member"]);
    });
  }, []);
  return (
    <>
      <section>
        <div>
          <select name="tome1" id="">
            tome 1
            <option value="">
              {list.map((tome) => {
                return (
                  <>
                    {tome.tome.map((chapter) => {
                      return (
                        <>
                          {chapter.chapter.map((chaptercontent) => {
                            return (
                              <>
                                {chapter.title === "Dio l'envahisseur" ? (
                                  <div>
                                    <h1>
                                      Chapitre {chaptercontent.chapterNumber}
                                    </h1>
                                  </div>
                                ) : null}
                              </>
                            );
                          })}
                        </>
                      );
                    })}
                  </>
                );
              })}
            </option>
          </select>
        </div>
      </section>
    </>
  );
};

export default ChapterList;
