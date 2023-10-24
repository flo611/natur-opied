import React, { useEffect, useState } from "react";
import axios from "axios";
import process from "process";

const Home = () => {
  const [createPost, setCreatePost] = useState({
    name: "",
    decription: "",
    price: 0,
  });

  const OnChangeName = (event) => {
    setCreatePost({
      ...createPost,
      name: event.target.value,
    });
    console.log(createPost);
  };

  const OnChangeDesc = (event) => {
    setCreatePost({
      ...createPost,
      description: event.target.value,
    });
    console.log(createPost);
  };

  const OnChangePrice = (event) => {
    setCreatePost({
      ...createPost,
      price: parseInt(event.target.value),
    });
    console.log(createPost);
  };
  const SubmitForm = () => {
    const data = {
      name: createPost.name,
      description: createPost.decription,
      price: createPost.price,
    };

    axios.post("http://localhost:8000/api/products", data).then(() => {
      alert("Produit crée!");
    });
  };

  const [post, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        // console.log(response.data["hydra:member"]);
        setPosts(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("bien joué");
      });
  }, []);

  const DeletePost = (id) => {
    console.log(`ID :${id}`);
    axios.delete(`http://localhost:8000/api/products/${id}`).then(() => {
      alert("succes");
    });
  };

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="">Nom</label>
          <input type="text" onChange={OnChangeName} />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input type="text" onChange={OnChangeDesc} />
        </div>
        <div>
          <label htmlFor="">Prix</label>
          <input type="text" onChange={OnChangePrice} />
        </div>
        <div>
          <button
            className="bg-red-800"
            type="button"
            onClick={() => SubmitForm()}
          >
            Envoyer
          </button>
        </div>
      </form>

      <div className="grid grid-cols-2">
        {post.map((post) => {
          return (
            <div key={post.id}>
              Nom:
              {post.name}
              <br />
              Description:
              {post.description}
              <div>
                <button
                  type="button"
                  className="bg-cyan-600"
                  onClick={() => DeletePost(post.id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <h1
        className="
        text-red-500 flex flex-row justify-center w-full text-4xl"
      >
        Hello Home!
      </h1>
      <p className="bg-cyan-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, velit
        cupiditate. Porro magni qui ipsa quibusdam amet ipsum distinctio?
        Quisquam magnam illum nesciunt minima quis ex debitis aliquid laboriosam
        labore?
      </p>
    </>
  );
};

export default Home;
