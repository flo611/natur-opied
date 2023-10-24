import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [newBook, setNewBook] = useState({
    title: "",
    authors: [""],
    country: "",
    editor: [""],
    image: "",
    subTitle: "",
    tome: [""],
  });

  const SubmitForm = () => {
    const config = {
      headers: {
        Authorization:
          "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTcwMzU0MTIsImV4cCI6MTY5NzAzOTAxMiwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmZyIn0.1M75JW0pj5VcPpNDIgLuNdwi3OtckbWa8JLHwWAbb3WpAm-nVDiFvRxcev8qoNSEfSBepFxVQ8yxen7O0QqqXtivURufNXdewFxRqugfCTM5h3OUhXzHMKx_1rEtZfarhpk6lKM9InDJ1lNVXp88_C4fYHhLOJLvIQUytW31z0DCUxhvfa6RciNhwQydm2Gz86jR6OuWv7PaCB1-DnbLA4AphEybhoF6AnExIsELYrVFh9w8yj24lckRqp5RYLl-vV-m4iz53LNJ8QMhedWbuZmcprwe2bP-mVJq0d0Ymuc7QqgQ4wc5XXj-PUihXrOdbjjYwbCkzz0_Umo0eDoxwA",
      },
    };

    axios
      .post("http://localhost:8000/api/books", newBook, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="">Titre</label>
          <input
            type="text"
            onChange={(event) => {
              setNewBook({ ...newBook, title: event.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="">Sous titre</label>
          <input
            type="text"
            onChange={(event) => {
              setNewBook({ ...newBook, subTitle: event.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="">Auteurs (array)</label>
          <input
            type="text"
            onChange={(event) => {
              setNewBook({ ...newBook, authors: [event.target.value] });
            }}
          />
        </div>
        <div>
          <label htmlFor="">Country</label>
          <input
            type="text"
            onChange={(event) => {
              setNewBook({ ...newBook, country: event.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="">Editeur (array)</label>
          <input
            type="text"
            onChange={(event) => {
              setNewBook({ ...newBook, editor: [event.target.value] });
            }}
          />
        </div>
        <div>
          <label htmlFor="">image</label>
          <input
            type="text"
            onChange={(event) => {
              setNewBook({ ...newBook, image: event.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="">Tome (array)</label>
          <input
            type="text"
            onChange={(event) => {
              setNewBook({ ...newBook, tome: [event.target.value] });
            }}
          />
        </div>
        <div>
          <button type="button" onClick={() => SubmitForm()}>
            Envoyer
          </button>
          {console.log(newBook)}
        </div>
      </form>
    </>
  );
};

export default AddBook;
