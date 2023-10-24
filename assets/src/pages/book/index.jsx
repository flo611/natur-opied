import React, { useEffect, useState } from "react";
import axios from "axios";

const Book = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/books")
      .then((response) => {
        setBooks(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <main>
        <section className="bg-jojo w-full h-screen ">
          <div>
            <h1>Hello Homepage!</h1>
          </div>
        </section>
        <section className="bg-blue-900">
          <div className="lg:grid lg:grid-cols-4">
            {books.map((book) => {
              return (
                <div key={book.id} className="p-5">
                  <div className="flex flex-col">
                    <h1>{book.title}</h1>
                    <h2>{book.subTitle}</h2>
                    <img src={book.image} alt="" width={150} height={150} />
                    <p>Description</p>
                  </div>
                  <div>
                    <h1>{book.authors}</h1>
                    <h1>{book.editor}</h1>
                    <h1>{book.country}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};
export default Book;
