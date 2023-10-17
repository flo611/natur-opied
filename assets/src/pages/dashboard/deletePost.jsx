import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "../../components/layouts/main";
import Button from "../../components/tools/button";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const DeletePost = () => {
  const [posts, setPosts] = useState([]);
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const [editPost, setEditPost] = useState({
    description: "",
    name: "",
    image: "",
    alldescription: "",
    tarifs: 0,
    Destination: "",
    destination: "",
  });

  const data = {
    name: editPost.name,
    image: editPost.image,
    description: editPost.description,
    alldescription: editPost.alldescription,
    tarifs: editPost.tarifs,
    destination: editPost.destination,
  };
  const handlePut = (id) => {
    axios
      .put(`http://localhost:8000/api/products/${id}`, data, config)
      .then(() => {
        alert("Post modifié!");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products`)
      .then((response) => {
        // console.log(response.data["hydra:member"]);
        setPosts(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const config = {
    headers: {
      Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTcwMjQwOTgsImV4cCI6MTY5NzAyNzY5OCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmZyIn0.GdjPELIugkyPKBjoq2oZQkJa3B88Q32aiOXbs-cU-nP98dMaA47Wg1wihjzVwY7pEnLxGK0kJFSJoRXqr03v69aPZUjQyiPKr-e5dMBxm2F5Aln7Rd9TshIqYpFAvCHQ6U79sobpTnzlKqOAYSIzfEi-pPgf-a1VvkKYcIh5SRVlWPqCwRwNAm5d8Pn8YmE3KLAB1ezDtHR9Suh5XREy8aKdNwXZLu-1_DQR1FAs1am0Og1S1xGIn6FpCEvpJb5l6X7rQrkGHhv_yZxjmpl0G9ZSnQhai2REtJab-MYly9-DzdmSJOwgWVqebX3Hyl11MLIimylevrRmS0CD9kfBBQ`,
    },
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`, config)
      .then(() => {
        alert("Post supprimé !");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Main>
      <div className="flex-col mx-40 lg:mx-2 lg:grid lg:grid-cols-3">
        {posts.map((post) => {
          return (
            <div className="card px-6 mx-12 my-4 lg:mx-12 lg:py-12">
              <div className=" contain py-10 m-6 lg:mx-4 lg:py-16 text-white">
                <div key={post.id} className="px-5">
                  <p className="font-bold"> ID:</p>
                  {post.id}
                  <br />
                  <p className="font-bold"> Nom: </p>
                  {post.name}
                  <br />
                  <p className="font-bold">Description:</p>
                  {post.description}
                  <br />
                  <p className="font-bold">Description longue:</p>
                  {post.alldescription}
                  <br />
                  <p className="font-bold">Tarifs:</p>
                  {post.tarifs}€<p className="font-bold">Destination:</p>
                  {post.destination}
                  <br />
                  <div className="flex justify-center py-6">
                    <img src={post.image} alt="" width={80} height={80} />
                  </div>
                  <div className="flex justify-center py-4">
                    <Button
                      type="button"
                      value="Supprimer"
                      onClick={() => handleDelete(post.id)}
                    />
                  </div>
                  <Popup
                    trigger={
                      <button className="y-4 mx-10 flex justify-center text-black font-bold uppercase bg-white  rounded-full md:mx-60 md:py-2 lg:mx-10 lg:px-16 lg:py-2 lg:my-6 hover:text-white hover:bg-purple-950">
                        {" "}
                        Modifier
                      </button>
                    }
                    position="right center"
                  >
                    <div>
                      <form action="" className="card mx-6 lg:mx-40 lg:mt-6 ">
                        <div className="contain flex flex-col lg:mx-40 my-10 py-10">
                          <label className="text-white" htmlFor="">
                            Name
                          </label>
                          <input
                            type="text"
                            onChange={(event) =>
                              setEditPost({
                                ...editPost,
                                name: event.target.value,
                              })
                            }
                          />
                          <label className="text-white" htmlFor="">
                            Image
                          </label>
                          <input
                            type="text"
                            onChange={(event) =>
                              setEditPost({
                                ...editPost,
                                image: event.target.value,
                              })
                            }
                          />
                          <label className="text-white" htmlFor="">
                            Description
                          </label>
                          <input
                            type="text"
                            onChange={(event) =>
                              setEditPost({
                                ...editPost,
                                description: event.target.value,
                              })
                            }
                          />
                          <label className="text-white" htmlFor="">
                            All description
                          </label>
                          <input
                            type="text"
                            onChange={(event) =>
                              setEditPost({
                                ...editPost,
                                alldescription: event.target.value,
                              })
                            }
                          />
                          <label className="text-white" htmlFor="">
                            Tarifs
                          </label>
                          <input
                            type="number"
                            onChange={(event) =>
                              setEditPost({
                                ...editPost,
                                tarifs: parseInt(event.target.value),
                              })
                            }
                          />
                          <label className="text-white" htmlFor="">
                            Destination
                          </label>
                          <input
                            type="text"
                            onChange={(event) =>
                              setEditPost({
                                ...editPost,
                                destination: event.target.value,
                              })
                            }
                          />

                          <div className="flex justify-center mt-4">
                            <Button
                              type="button"
                              value="Valider"
                              onClick={() => handlePut(post.id)}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </Popup>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Main>
  );
};
export default DeletePost;
