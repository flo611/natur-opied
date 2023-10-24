import React, { useEffect, useState } from "react";
import axios from "axios";

const PhantomBlood = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/books").then((response.data["hydra:member"]));
  }, []);

  return (
    <>
      <section className="bg-blue-900">
        <div className="flex items-center justify-center ">
          <img
            src="/medias/bannière/phantom-blood.jpg"
            alt=""
            className="glass-b"
            width={1000}
            height={400}
          />
        </div>
        <div className="h-screen">
          <div className="grid grid-cols-4">
            {books.map((book) => {
              if (book.title === "JOJO'S BIZARRE ADVENTURE")
                return (
                  <div>
                    {book.tome.map((tome) => {
                      return (
                        <div className="flex flex-col items-center justify-center">
                          <h1>
                            Tome {tome.tomeNumber} - {tome.title}
                          </h1>
                          <h2>Nombre de chapitres {tome.chapter.length}</h2>
                          <a href={tome.href}>
                            <img
                              src={tome.image}
                              alt={tome.title}
                              width={200}
                              height={200}
                              className="glass"
                            />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default PhantomBlood;
