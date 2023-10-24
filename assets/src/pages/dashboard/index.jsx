import React, { useEffect, useState } from "react";

import DeletePost from "../dashboard/deletePost";
import AddPost from "../dashboard/addPost";
import{FcHome} from"react-icons/fc";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [postFields, setPostFields] = useState({
    deletePost: true,
    addPost: false,
  });

  return (
    <section className="bg-black">
      <h1 className="flex flex-row justify-center pt-2 text-white">
        My Dashboard
      </h1>
      <h2 className="flex flex-row justify-center my-4 text-white uppercase underline text-6xl">
        <Link to="/"><FcHome/></Link>
      </h2>
      <nav>
        <ul className="flex flex-col lg:flex lg:flex-row lg:justify-around ">
          <li
            className=" my-4 mx-10 flex justify-center bg-white  rounded-full md:mx-60 md:py-2 lg:mx-10 lg:px-16 lg:py-2 lg:my-6 hover:text-white hover:bg-purple-950"
            onClick={() => {
              setPostFields({
                deletePost: true,
                addPost: false,
              });
            }}
          >
          Editer/ Supprimer un post
          </li>
          <li
            className="mb-4 mx-10 flex justify-center bg-white  rounded-full md:mx-60 md:py-2 lg:mx-10  lg:px-16 lg:my-6 hover:text-white hover:bg-purple-950"
            onClick={() => {
              setPostFields({
                deletePost: false,
                addPost: true,
              });
            }}
          >
            Ajouter un Post
          </li>
        </ul>
      </nav>
      <div className="my-8">
        {postFields.deletePost ? <DeletePost /> : null}
        {postFields.addPost ? <AddPost /> : null}
      </div>
    </section>
  );
};
export default Dashboard;
