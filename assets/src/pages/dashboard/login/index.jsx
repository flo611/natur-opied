import React, { useState, useEffect } from "react";
import Button from "../../../components/tools/button";
import axios from "axios";

const Login = () => {
  const [userData, setUserData] = useState({});


  useEffect(() => {
    axios
      .get("/serialize-user")
      .then((response) => {
        console.log(response.data);
        setUserData(response.data.user);



        const editUser = {

            "email": "string",
            "roles": [
              "string"
            ],
            "password": "string",
            "pseudo": "string",
            "adress": "string",
            "CP": 0,
            "City": "string",
            "name": "string",
            "surname": "string",
            "image": "string",
            "cP": 0,
            "city": "string"
          }
       
        EditUser(editUser);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  const config = {
    headers: {
      Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDA1NzQ2NzksImV4cCI6MTcwMDU3ODI3OSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlckBuYXR1cm9waWVkLmZyIn0.BXLhhx76BYcIV2N-rwfKlayurlzybd0xFs3EwOg5z7ynCSdA1VSHvzbQ2YLJhes3UB8swTjO2W9kRPyOv4mEdRohJFcydzzn8QG7M2RfOBmd3TVOvq4v8enwLjgvSfL_Q4Jbh0k5d2sfjbXELLTRH8iSO5vIDVNr1NS-cgOZbxRIwescQtQIEvPjGQgYnYjboGQ_oUwBKSQzmYQOYEvIW9-vClZSwi6Tkmz_abGpjw3JZkX5iEK1EpX6aedKJsjrX8mqxLetmLSX2V-cKNX4HHTbvxU5RgR_-Etqk23voAxGQDhZbSDaRAy7_Kf1WLn2tYrnprGsE6ZvNKn94sPHdA `,
      "Content-type": "application/json",
    },
  };

  const EditUser = () => {
    axios.put(`/api/users/${id}`, userData, config)
      .then((response) => {
        console.log(response);
     
      })
      .catch((error) => {
        console.error(error);
       
      });
  };

  return (
    <>
      {userData && (
        <div className="flex flex-col items-center justify-center h-screen dark bg-neutral-800">
          <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-200 mb-4 flex flex-row justify-center">
              <img
                src={userData.image}
                alt="Image de profil"
                className="w-32 h-32 rounded-full"
              />
            </h2>
            <form action="">
              <div className="flex flex-col lg:grid lg:grid-cols-2 ">
                <input
                  placeholder=" Name"
                  className="bg-gray-700 mr-2 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                  value={userData.name}
                  onChange={(event) =>
                    setUserData({
                      ...userData,
                      name: event.target.value,
                    })
                  }
                />
                <input
                  placeholder=" Surname"
                  className="  bg-gray-700 ml-2 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                  value={userData.surname}
                  onChange={(event) =>
                    setUserData({
                      ...userData,
                      surname: event.target.value,
                    })
                  }
                />
                <input
                  placeholder=" Pseudo"
                  className="bg-gray-700 mr-2 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                  value={userData.pseudo}
                  onChange={(event) =>
                    setUserData({
                      ...userData,
                      pseudo: event.target.value,
                    })
                  }
                />
                <input
                  placeholder=" Adress"
                  className="bg-gray-700 ml-2 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                  value={userData.adress}
                  onChange={(event) =>
                    setUserData({
                      ...userData,
                      adress: event.target.value,
                    })
                  }
                />
                <input
                  placeholder="CP"
                  className="bg-gray-700 mr-2 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="int"
                  value={userData.CP}
                  onChange={(event) =>
                    setUserData({
                      ...userData,
                      CP: event.target.value,
                    })
                  }
                />
                <input
                  placeholder="City"
                  className="bg-gray-700 ml-2 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                  value={userData.City}
                  onChange={(event) =>
                    setUserData({
                      ...userData,
                      City: event.target.value,
                    })
                  }
                />
                <input
                  placeholder=" Email"
                  className="bg-gray-700 mr-2 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                  value={userData.email}
                  onChange={(event) => setNewPost({})}
                />
                <input
                  placeholder=" Password"
                  className="bg-gray-700 ml-2 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="current-password"
                  value={userData.password}
                  onChange={(event) => setNewPost({})}
                />
              </div>
              <input
                placeholder=" Image"
                className="bg-gray-700 w-full text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                value={userData.image}
                onChange={(event) =>
                  setUserData({
                    ...userData,
                    image: event.target.value,
                  })
                }
              />
              <div className="flex justify-center mt-4">
                <Button
                  type="button"
                  value="Modifier"
                  onClick={() => {
                    EditUser();
                
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Login;
