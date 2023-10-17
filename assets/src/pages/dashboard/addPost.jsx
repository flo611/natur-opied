import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/tools/button";
import Main from "../../components/layouts/main";

const Add = () => {
  const [posts, setPosts] = useState([]);

  const [newPost, setNewPost] = useState({
    description: "",
    name: "",
    image: "",
    alldescription: "",
    tarifs: 0,
    Destination: "",
    destination: "",
  });

  const data = {
    name: newPost.name,
    image: newPost.image,
    description: newPost.description,
    alldescription: newPost.alldescription,
    tarifs: newPost.tarifs,
    destination: newPost.destination,
  };

  const config = {
    headers: {
      Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTcwMjQwOTgsImV4cCI6MTY5NzAyNzY5OCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmZyIn0.GdjPELIugkyPKBjoq2oZQkJa3B88Q32aiOXbs-cU-nP98dMaA47Wg1wihjzVwY7pEnLxGK0kJFSJoRXqr03v69aPZUjQyiPKr-e5dMBxm2F5Aln7Rd9TshIqYpFAvCHQ6U79sobpTnzlKqOAYSIzfEi-pPgf-a1VvkKYcIh5SRVlWPqCwRwNAm5d8Pn8YmE3KLAB1ezDtHR9Suh5XREy8aKdNwXZLu-1_DQR1FAs1am0Og1S1xGIn6FpCEvpJb5l6X7rQrkGHhv_yZxjmpl0G9ZSnQhai2REtJab-MYly9-DzdmSJOwgWVqebX3Hyl11MLIimylevrRmS0CD9kfBBQ`,
    },
  };
  const Post = () => {
    axios
      .post(`http://localhost:8000/api/products`,data,config)
      .then(() => {
        alert("Post crée !");
      
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };




  return (
    <Main>
      <h1 className="flex flex-row justify-center text-white text-2xl">
        Hello Add post
      </h1>
      <form action="" className="card mx-6 lg:mx-40 lg:mt-6 ">
        <div className="contain flex flex-col lg:mx-40 my-10 py-10">
          <label className="text-white" htmlFor="">
            Name
          </label>
          <input
            type="text"
            onChange={(event) =>
              setNewPost({ ...newPost, name: event.target.value })
            }
          />
          <label className="text-white" htmlFor="">
            Image
          </label>
          <input
            type="text"
            onChange={(event) =>
              setNewPost({ ...newPost, image: event.target.value })
            }
          />
          <label className="text-white" htmlFor="">
            Description
          </label>
          <input
            type="text"
            onChange={(event) =>
              setNewPost({ ...newPost, description: event.target.value })
            }
          />
          <label className="text-white" htmlFor="">
            All description
          </label>
          <input
            type="text"
            onChange={(event) =>
              setNewPost({ ...newPost, alldescription: event.target.value })
            }
          />
          <label className="text-white" htmlFor="">
            Tarifs
          </label>
          <input
            type="number"
            onChange={(event) =>
              setNewPost({ ...newPost, tarifs: parseInt(event.target.value) })
            }
          />
          <label className="text-white" htmlFor="">
            Destination
          </label>
          <input
            type="text"
            onChange={(event) =>
              setNewPost({ ...newPost, destination: event.target.value })
            }
          />

          <div className="flex justify-center mt-4">
            <Button
              type="button"
              value="Envoyer"
              onClick={() =>
                Post(data)
              }
            />
          </div>
        </div>
      </form>
    </Main>
  );
};

export default Add;
