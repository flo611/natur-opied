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
import { US } from "country-flag-icons/react/3x2";
import { EU } from "country-flag-icons/react/3x2";
import { AU } from "country-flag-icons/react/3x2";
import {PiMagnifyingGlassBold} from "react-icons/pi"
import {PiShoppingCartBold} from "react-icons/pi";

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
      Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTk0MzY1MjcsImV4cCI6MTY5OTQ0MDEyNywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQG5hdHVyb3BpZWQuZnIifQ.cdysHTHxysWwnZIE_QOofCAtrUW639hjIW5bwDVk6eW-kWLNlO9dQCdWIte2CEPsnOh8jEtYCnX4B0E7uTOKeNEH7f5Ea9xYL69_u2k9zMoKA8nhU22sj8PNWkm42aD9HCAnSOzjh6MEV0EnqVsuSNE-l_VXRxwawkx_aPyiVyOxmnhoSGT0f-5T8HlD_3XLZhhtg7qk4iJS9DCuHjH1-zuLVbhNJiwUElPec-orTbzTBtwCXK1Iz2wJuHHHxEVbh9r-ISspsLKXR7jjzorEMa4e89SO3m2ZoLC7iBJpQpWNy-4xbQCUExqM-0eC83ntfTz7qWtQSd09fc1QJXy3kw`,
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
        <EU title="European Union" width={100} />
      </h1>
      <Popup
        trigger={
          <button className="flex  justify-center text-4xl text-gray-200 w-full my-6 animate-bounce  ">
            {" "}
            <BiSolidImageAdd />
          </button>
        }
        position="left-bottom"
      >
        <div class=" flex flex-col items-center justify-center h-screen dark">
          <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-200 mb-4">New Product</h2>
            <form action="" className="flex flex-col">
              <input
                placeholder=" Name"
                class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                onChange={(event) =>
                  setNewPost({ ...newPost, name: event.target.value })
                }
              />

              <input
                placeholder=" Image"
                class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                onChange={(event) =>
                  setNewPost({ ...newPost, image: event.target.value })
                }
              />
              <input
                placeholder=" Description"
                class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                onChange={(event) =>
                  setNewPost({ ...newPost, description: event.target.value })
                }
              />
              <input
                placeholder=" All Description"
                class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                onChange={(event) =>
                  setNewPost({ ...newPost, alldescription: event.target.value })
                }
              />
              <input
                placeholder="Tarifs"
                class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="number"
                onChange={(event) =>
                  setNewPost({
                    ...newPost,
                    tarifs: parseInt(event.target.value),
                  })
                }
              />
              <input
                placeholder="Destination"
                class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
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
            </form>
          </div>
        </div>
      </Popup>
      <div className=" flex flex-col items-center w-full   py-10 lg:mx-2  lg:grid lg:grid-cols-3">
        {posts.map((post) => {
          if (post.destination === "Europe") {
            return (
              <div className=" card  my-4 lg:my-6  lg:mx-20 ">
                <div className=" card2   text-white">
                  <div key={post.id} className="px-5">
                    <div className="flex justify-center py-6">
                      <img src={post.image} alt="" width={150} height={150} />
                    </div>
                    <p className="font-bold"> Nom:</p>
                    {post.name}
                    <br />
                    <p className="font-bold">Description:</p>
                    {post.description}
                    <br />
                    <p className="font-bold">Tarifs:</p>
                    {post.tarifs}€
                    <div className="flex flex-col">
                    <div className="sm:flex sm:flex-col lg:flex lg:flex-row items-center justify-center  ">
                      <div className="mx-4 my-4 text-xl ">
                        <Link to={`/shop/${post.id}`}>
                          {/* <Button type="button" value="En savoir plus" /> */}
                          <PiMagnifyingGlassBold/>
                        </Link>
                      </div>
                      <div className="mx-4 my-4 ">
                        <div></div>
                        <button
                          type="button"
                          value="Ajouter panier"
                          onClick={() => {
                            updateCart(
                              post,
                              post.tarifs * productQuantities[post.id] || 5
                              );
                            }}
                            
                            >
                            <PiShoppingCartBold/>
                            </button>
                      </div>
                      <div className="flex flex-row lg:justify-center my-4">
                        <button
                          type="button"
                          value="+"
                          className="sm:pr-8 lg:pr-4"
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
                          className="sm:pl-7 lg:pl-4"
                          onClick={() => RemoveQuantity(post.id)}
                        >
                          -
                        </button>
                      </div>
                      </div>
                      <div className="  flex flex-row   w-full justify-center lg:mt-4 lg:opacity-0 lg:hover:opacity-100 ">
                        <div className="lg:flex lg:flex-row  ">
                          {adminFields.roles.includes("ROLE_ADMIN") ? (
                            <>
                              <button
                                type="button "
                                className="bin  mr-8 "
                                onClick={() => {
                                  handleDelete(post.id);
                                }}
                              ></button>
                            </>
                          ) : null}
                        </div>
                        <Popup
                          trigger={
                            <button className="text-3xl flex flex-row  ml-8 ">
                              {" "}
                              <TfiWrite />
                            </button>
                          }
                          position="right center"
                        >
                          <div class="flex flex-col items-center justify-center h-screen dark">
                            <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                              <h2 class="text-2xl font-bold text-gray-200 mb-4">
                                Edit product
                              </h2>
                              <form action="" className="flex flex-col">
                                <input
                                  placeholder=" Name"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                  type="text"
                                  onChange={(event) =>
                                    setEditPost({
                                      ...editPost,
                                      name: event.target.value,
                                    })
                                  }
                                />
                                <input
                                  placeholder=" Image"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                  type="text"
                                  onChange={(event) =>
                                    setEditPost({
                                      ...editPost,
                                      image: event.target.value,
                                    })
                                  }
                                />
                                <input
                                  placeholder=" Description"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                  type="text"
                                  onChange={(event) =>
                                    setEditPost({
                                      ...editPost,
                                      description: event.target.value,
                                    })
                                  }
                                />
                                <textarea
                                  placeholder="All Description"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                  type="text"
                                  onChange={(event) =>
                                    setEditPost({
                                      ...editPost,
                                      alldescription: event.target.value,
                                    })
                                  }
                                />

                                <input
                                  placeholder="Tarifs"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                  type="number"
                                  onChange={(event) =>
                                    setEditPost({
                                      ...editPost,
                                      tarifs: parseInt(event.target.value),
                                    })
                                  }
                                />
                                <input
                                  placeholder="Destinations"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
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
                              </form>
                            </div>
                          </div>
                        </Popup>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      <h1 className=" flex flex-col items-center w-full   text-black uppercase my-6  font-bold  lg:text-3xl">
        <US title="United States" width={100} />
      </h1>
      <div className="flex flex-col items-center w-full   py-10  lg:mx-2 lg:grid lg:grid-cols-3">
        {posts.map((post) => {
          if (post.destination === "USA") {
            return (
              <div className="card my-4 lg:my-6 lg:mx-20 ">
                <div className=" card2 text-white">
                  <div key={post.id} className="px-5">
                    <div className="flex justify-center py-6">
                      <img src={post.image} alt="" width={150} height={150} />
                    </div>
                    <p className="font-bold"> Nom:</p>
                    {post.name}
                    <br />
                    <p className="font-bold">Description:</p>
                    {post.description}
                    <br />
                    <p className="font-bold">Tarifs:</p>
                    {post.tarifs}€
                    <div className="flex flex-col">
                    <div className="sm:flex sm:flex-col lg:flex lg:flex-row items-center justify-center  ">
                      <div className="mx-4 my-4 text-xl ">
                        <Link to={`/shop/${post.id}`}>
                          {/* <Button type="button" value="En savoir plus" /> */}
                          <PiMagnifyingGlassBold/>
                        </Link>
                      </div>
                      <div className="mx-4 my-4 ">
                        <div></div>
                        <button
                          type="button"
                          value="Ajouter panier"
                          onClick={() => {
                            updateCart(
                              post,
                              post.tarifs * productQuantities[post.id] || 5
                              );
                            }}
                            
                            >
                            <PiShoppingCartBold/>
                            </button>
                      </div>
                      <div className="flex flex-row lg:justify-center my-4">
                        <button
                          type="button"
                          value="+"
                          className="sm:pr-8 lg:pr-4"
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
                          className="sm:pl-7 lg:pl-4"
                          onClick={() => RemoveQuantity(post.id)}
                        >
                          -
                        </button>
                      </div>
                      </div>
                      <div className="  flex flex-row   w-full justify-center lg:mt-4 lg:opacity-0 lg:hover:opacity-100 ">
                        <div className="lg:flex lg:flex-row  ">
                          {adminFields.roles.includes("ROLE_ADMIN") ? (
                            <>
                              <button
                                type="button "
                                className="bin  mr-8 "
                                onClick={() => {
                                  handleDelete(post.id);
                                }}
                              ></button>
                            </>
                          ) : null}
                        </div>
                        <Popup
                          trigger={
                            <button className="text-3xl flex flex-row  ml-8 ">
                              {" "}
                              <TfiWrite />
                            </button>
                          }
                          position="right center"
                        >
                          <div class="flex flex-col items-center justify-center h-screen dark">
                            <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                              <h2 class="text-2xl font-bold text-gray-200 mb-4">
                                Edit product
                              </h2>
                              <form action="" className="flex flex-col">
                                <input
                                  placeholder=" Name"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                  type="text"
                                  onChange={(event) =>
                                    setEditPost({
                                      ...editPost,
                                      name: event.target.value,
                                    })
                                  }
                                />
                                <input
                                  placeholder=" Image"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                  type="text"
                                  onChange={(event) =>
                                    setEditPost({
                                      ...editPost,
                                      image: event.target.value,
                                    })
                                  }
                                />
                                <input
                                  placeholder=" Description"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                  type="text"
                                  onChange={(event) =>
                                    setEditPost({
                                      ...editPost,
                                      description: event.target.value,
                                    })
                                  }
                                />
                                <textarea
                                  placeholder="All Description"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                  type="text"
                                  onChange={(event) =>
                                    setEditPost({
                                      ...editPost,
                                      alldescription: event.target.value,
                                    })
                                  }
                                />

                                <input
                                  placeholder="Tarifs"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                  type="number"
                                  onChange={(event) =>
                                    setEditPost({
                                      ...editPost,
                                      tarifs: parseInt(event.target.value),
                                    })
                                  }
                                />
                                <input
                                  placeholder="Destinations"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
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
                              </form>
                            </div>
                          </div>
                        </Popup>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      <h1 className="w-full flex justify-center text-black uppercase my-6  font-bold  lg:text-3xl">
        <AU title="Australia" width={100} />
      </h1>
      <div className="flex flex-col items-center w-full lg:mx-2 lg:grid lg:grid-cols-3">
        {posts.map((post) => {
          if (post.destination === "Océanie") {
            return (
              <div className="card my-4 lg:my-6 lg:mx-20 ">
                <div className=" card2 text-white ">
                  <div key={post.id} className="px-5">
                    <div className="flex justify-center py-6">
                      <img src={post.image} alt="" width={150} height={150} />
                    </div>
                    <p className="font-bold"> Nom:</p>
                    {post.name}
                    <br />
                    <p className="font-bold">Description:</p>
                    {post.description}
                    <br />
                    <p className="font-bold">Tarifs:</p>
                    {post.tarifs}€
                    <div className="flex flex-col">
                    <div className="sm:flex sm:flex-col lg:flex lg:flex-row items-center justify-center  ">
                      <div className="mx-4 my-4 text-xl ">
                        <Link to={`/shop/${post.id}`}>
                          {/* <Button type="button" value="En savoir plus" /> */}
                          <PiMagnifyingGlassBold/>
                        </Link>
                      </div>
                      <div className="mx-4 my-4 ">
                        <div></div>
                        <button
                          type="button"
                          value="Ajouter panier"
                          onClick={() => {
                            updateCart(
                              post,
                              post.tarifs * productQuantities[post.id] || 5
                              );
                            }}
                            
                            >
                            <PiShoppingCartBold/>
                            </button>
                      </div>
                      <div className="flex flex-row lg:justify-center my-4">
                        <button
                          type="button"
                          value="+"
                          className="sm:pr-8 lg:pr-4"
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
                          className="sm:pl-7 lg:pl-4"
                          onClick={() => RemoveQuantity(post.id)}
                        >
                          -
                        </button>
                      </div>
                      </div>
                      <div className="  flex flex-row   w-full justify-center lg:mt-4 lg:opacity-0 lg:hover:opacity-100 ">
                        <div className="lg:flex lg:flex-row  ">
                          {adminFields.roles.includes("ROLE_ADMIN") ? (
                            <>
                              <button
                                type="button "
                                className="bin  mr-8 "
                                onClick={() => {
                                  handleDelete(post.id);
                                }}
                              ></button>
                            </>
                          ) : null}
                        </div>
                        <Popup
                          trigger={
                            <button className="text-3xl flex flex-row  ml-8 ">
                              {" "}
                              <TfiWrite />
                            </button>
                          }
                          position="right center"
                        >
                          <div class="flex flex-col items-center justify-center h-screen dark">
                            <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                              <h2 class="text-2xl font-bold text-gray-200 mb-4">
                                Edit product
                              </h2>
                              <form action="" className="flex flex-col">
                                <input
                                  placeholder=" Name"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                  type="text"
                                  onChange={(event) =>
                                    setEditPost({
                                      ...editPost,
                                      name: event.target.value,
                                    })
                                  }
                                />
                                <input
                                  placeholder=" Image"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                  type="text"
                                  onChange={(event) =>
                                    setEditPost({
                                      ...editPost,
                                      image: event.target.value,
                                    })
                                  }
                                />
                                <input
                                  placeholder=" Description"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                  type="text"
                                  onChange={(event) =>
                                    setEditPost({
                                      ...editPost,
                                      description: event.target.value,
                                    })
                                  }
                                />
                                <textarea
                                  placeholder="All Description"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                  type="text"
                                  onChange={(event) =>
                                    setEditPost({
                                      ...editPost,
                                      alldescription: event.target.value,
                                    })
                                  }
                                />

                                <input
                                  placeholder="Tarifs"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                  type="number"
                                  onChange={(event) =>
                                    setEditPost({
                                      ...editPost,
                                      tarifs: parseInt(event.target.value),
                                    })
                                  }
                                />
                                <input
                                  placeholder="Destinations"
                                  class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
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
                              </form>
                            </div>
                          </div>
                        </Popup>
                      </div>
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
