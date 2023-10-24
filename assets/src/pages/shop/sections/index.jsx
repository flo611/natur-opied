import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Button from "../../../components/tools/button";
import { Link } from "react-router-dom";
import { CartContext } from "../../../components/context/cartProvider";
import { ImBin } from "react-icons/im";
import { TfiWrite } from "react-icons/tfi";
import { BiSolidImageAdd } from "react-icons/bi";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Buy = () => {
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

  const handleAdd = () => {
    axios
      .post(`http://localhost:8000/api/products`, newdata, config)
      .then(() => {
        alert("Post crée !");

        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [newPost, setNewPost] = useState({
    description: "",
    name: "",
    image: "",
    alldescription: "",
    tarifs: 0,
    Destination: "",
    destination: "",
  });

  const newdata = {
    name: newPost.name,
    image: newPost.image,
    description: newPost.description,
    alldescription: newPost.alldescription,
    tarifs: newPost.tarifs,
    destination: newPost.destination,
  };

  const config = {
    headers: {
      Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTc2OTc5MDUsImV4cCI6MTY5NzcwMTUwNSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmZyIn0.gqwE9SHiM7iFthzzOVxKiX7ueVndmNfHCgh7mC2jl56dUBskpcOPYp22xAEJAjaAhf61xwicZ9eparHEhqwMITmaWbEnLy-dLOoT72hU9gn6nwgngyZmuKMWl1b1Qq7pB1x8ZwTme4OEbzlHHk9jlwPwsQFLrvaF86oB4KYDgLbqvYE0weDThMBTpFdxDD7Cw1Uzmvr8MRECVeiVehqg2-uXRDw8BErsSZt3kYeoz9VLTuoWk1n_io1J3W3oSBiXesYTopfKb2NrNwSDja2i8cKqBqvAOTKsDpzzmuuYbeSvZoVvwFLkbhQnayB2Lgku4QEYEnmkKNRW9RjoNZnAtQ`,
    },
  };
  const [adminFields, setAdminFields] = useState({ roles: ["ROLE_ADMIN"] });

  const {
    basket,
    basketCount,
    setBasket,
    setTotalArrayBasket,
    totalArrayBasket,
    setBasketCount,
    totalBasket,
    setTotalBasket,
    quantity,
    setQuantity,
  } = useContext(CartContext);

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

  const updateCart = (product, price) => {
    basket.push(product);
    totalArrayBasket.push(price);
    window.localStorage.setItem("total", JSON.stringify(totalArrayBasket));
    console.log(totalArrayBasket);
    window.localStorage.setItem("cart", JSON.stringify(basket));
    setBasketCount(basket.length);
  };

  const [count, setCount] = useState(1);
  const [productQuantities, setProductQuantities] = useState({});

  const AddQuantity = (productId) => {
    const currentQuantity = productQuantities[productId] || 1;
    const newQuantity = currentQuantity + 1;
    setProductQuantities({
      ...productQuantities,
      [productId]: newQuantity,
    });
  };

  const RemoveQuantity = (productId) => {
    const currentQuantity = productQuantities[productId] || 1;
    const newQuantity = Math.max(currentQuantity - 1, 0);
    setProductQuantities({
      ...productQuantities,
      [productId]: newQuantity,
    });
  };

  return (
    <>
      <h1 className="w-full flex justify-center text-black uppercase pt-20  font-bold  lg:text-3xl">
     Europe !!!!!
      </h1>
      <Popup
        trigger={
          <button className="flex  justify-center text-4xl text-black w-full my-4 animate-bounce  ">
            {" "}
            <BiSolidImageAdd />
          </button>
        }
        position="left-bottom"
      >
       
        <form action="" className="card mx-6 lg:mx-60 lg:mt-6 ">
          <div className="contain flex flex-col lg:mx-40 my-10 py-10 lg:px-20 ">
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
                onClick={() => handleAdd(newdata)}
              />
            </div>
          </div>
        </form>
        
      </Popup>
      <div className="flex flex-col mx-40 py-10 lg:mx-2 lg:grid lg:grid-cols-3">
        {posts.map((post) => {
          if (post.destination === "Europe") {
            return (
              <div className="card px-6 mx-12 my-4 lg:mx-12 lg:py-12">
                <div className=" contain py-10 m-6 lg:mx-4 lg:py-16 text-white">
                  <div key={post.id} className="px-5">
                    <p className="font-bold"> Nom:</p>
                    {post.name}
                    <br />
                    <p className="font-bold">Description:</p>
                    {post.description}
                    <br />
                    <p className="font-bold">Tarifs:</p>
                    {post.tarifs}€
                    <div className="flex justify-center py-6">
                      <img src={post.image} alt="" width={80} height={80} />
                    </div>
                    <div className="flex flex-col items-center justify-center  lg:flex lg:flex-col ">
                      <div className="mx-4 my-4">
                        <Link to={`/shop/${post.id}`}>
                          <Button type="button" value="En savoir +" />
                        </Link>
                      </div>
                      <div className="mx-4 my-4 ">
                        <Button
                          type="button"
                          value="Ajouter panier"
                          onClick={() => {
                            updateCart(
                              post,
                              post.tarifs * productQuantities[post.id] || 5
                            );
                          }}
                        />
                      </div>
                      <div className=" lg:flex lg:flex-row lg:justify-center my-4">
                        <button
                          type="button"
                          value="+"
                          className="lg:pr-4"
                          onClick={() => {
                            AddQuantity(post.id);
                            // console.log(ref);
                          }}
                        >
                          +
                        </button>
                        <h1 className="flex justify-center my-4">
                          {productQuantities[post.id] || 1}
                        </h1>
                        <button
                          type="button"
                          value="-"
                          className="lg:pl-4"
                          onClick={() => RemoveQuantity(post.id)}
                        >
                          -
                        </button>
                      </div>
                      <div className="flex flex-row">
                        {adminFields.roles.includes("ROLE_ADMIN") ? (
                          <>
                            <button
                              type="button"
                              className="text-2xl"
                              onClick={() => {
                                handleDelete(post.id);
                              }}
                            >
                              <ImBin />
                            </button>
                          </>
                        ) : null}
                      </div>
                      <Popup
                        trigger={
                          <button className="text-2xl flex justify-center w-full pt-6">
                            {" "}
                            <TfiWrite />
                          </button>
                        }
                        position="right center"
                      >
                        <div>
                          <form
                            action=""
                            className="card mx-6 lg:mx-40 lg:mt-6 "
                          >
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
              </div>
            );
          }
        })}
      </div>

      <h1 className="w-full flex justify-center text-white uppercase pt-40  font-bold  lg:text-3xl">
        USA
      </h1>
      <div className="flex flex-col mx-40 py-10 lg:mx-2 lg:grid lg:grid-cols-3">
        {posts.map((post) => {
          if (post.destination === "USA") {
            return (
              <div className="card px-6 mx-12 my-4 lg:mx-12 lg:py-12">
                <div className=" contain py-10 m-6 lg:mx-4 lg:py-16 text-white">
                  <div key={post.id} className="px-5">
                    <p className="font-bold"> Nom:</p>
                    {post.name}
                    <br />
                    <p className="font-bold">Description:</p>
                    {post.description}
                    <br />
                    <p className="font-bold">Tarifs:</p>
                    {post.tarifs}€
                    <div className="flex justify-center py-6">
                      <img src={post.image} alt="" width={80} height={80} />
                    </div>
                    <div className="flex flex-col items-center justify-center  lg:flex lg:flex-col ">
                      <div className="mx-4 my-4 ">
                        <Button
                          type="button"
                          value="Buy Here"
                          onClick={() => {
                            updateCart(post, post.tarifs);
                          }}
                        />
                      </div>
                      <div className="mx-4 my-4">
                        <Link to={`/shop/${post.id}`}>
                          <Button type="button" value="Show more" />
                        </Link>
                      </div>
                      <div className="lg:flex lg:flex-row lg:justify-center my-4">
                        <button
                          type="button"
                          value="+"
                          className="lg:pr-4"
                          onClick={() => AddQuantity()}
                        >
                          +
                        </button>
                        <h1 className="flex justify-center my-4">{count}</h1>
                        <button
                          type="button"
                          value="-"
                          className="lg:pl-4"
                          onClick={() => RemoveQuantityQuantity()}
                        >
                          -
                        </button>
                      </div>
                      <div className="flex flex-row">
                        {adminFields.roles.includes("ROLE_ADMIN") ? (
                          <>
                            <button
                              type="button"
                              className="text-2xl"
                              onClick={() => {
                                handleDelete(post.id);
                              }}
                            >
                              <ImBin />
                            </button>
                          </>
                        ) : null}
                      </div>
                      <Popup
                        trigger={
                          <button className="text-2xl flex justify-center pt-6">
                            {" "}
                            <TfiWrite />
                          </button>
                        }
                        position="right center"
                      >
                        <div>
                          <form
                            action=""
                            className="card mx-6 lg:mx-40 lg:mt-6 "
                          >
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
              </div>
            );
          }
        })}
      </div>

      <h1 className="w-full flex justify-center text-white uppercase pt-40  font-bold  lg:text-3xl">
       Océanie
      </h1>
      <div className="flex flex-col mx-40 py-10 lg:mx-2 lg:grid lg:grid-cols-3">
        {posts.map((post) => {
          if (post.destination === "Océanie") {
            return (
              <div className="card px-6 mx-12 my-4 lg:mx-12 lg:py-12">
                <div className=" contain py-10 m-6 lg:mx-4 lg:py-16 text-white">
                  <div key={post.id} className="px-5">
                    <p className="font-bold"> Nom:</p>
                    {post.name}
                    <br />
                    <p className="font-bold">Description:</p>
                    {post.description}
                    <br />
                    <p className="font-bold">Tarifs:</p>
                    {post.tarifs}€
                    <div className="flex justify-center py-6">
                      <img src={post.image} alt="" width={80} height={80} />
                    </div>
                    <div className="flex flex-col items-center justify-center  lg:flex lg:flex-col ">
                      <div className="mx-4 my-4 ">
                        <Button
                          type="button"
                          value="Buy Here"
                          onClick={() => {
                            updateCart(post, post.tarifs);
                          }}
                        />
                      </div>
                      <div className="mx-4 my-4">
                        <Link to={`/shop/${post.id}`}>
                          <Button type="button" value="Show more" />
                        </Link>
                      </div>
                      <div className="lg:flex lg:flex-row lg:justify-center my-4">
                        <button
                          type="button"
                          value="+"
                          className="lg:pr-4"
                          onClick={() => AddQuantity()}
                        >
                          +
                        </button>
                        <h1 className="flex justify-center my-4">{count}</h1>

                        <button
                          type="button"
                          value="-"
                          className="lg:pl-4"
                          onClick={() => RemoveQuantity()}
                        >
                          -
                        </button>
                      </div>
                      <div className="flex flex-row">
                        {adminFields.roles.includes("ROLE_ADMIN") ? (
                          <>
                            <button
                              type="button"
                              className="text-2xl"
                              onClick={() => {
                                handleDelete(post.id);
                              }}
                            >
                              <ImBin />
                            </button>
                          </>
                        ) : null}
                      </div>
                      <Popup
                        trigger={
                          <button className="text-2xl flex justify-center pt-6">
                            {" "}
                            <TfiWrite />
                          </button>
                        }
                        position="right center"
                      >
                        <div>
                          <form
                            action=""
                            className="card mx-6 lg:mx-40 lg:mt-6 "
                          >
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
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Buy;
