import React, { useState, useEffect } from "react";
import Button from "../../../components/tools/button";
import axios from "axios";

const Login = () => {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/serialize-user")
      .then((response) => {
        console.log(response.data);
        setUserData(response.data.user);

        const data = {
          username: response.data.user.email,
          password: response.data.user.password,
        };

        axios
          .post("/api/login_check",data)
          .then((response) => {
            setToken(response);
          })
          .catch((error) => {
            setError("Erreur lors de l'authentification");
            console.error(error);
          });
      })
      .catch((error) => {
        setError("Erreur lors de la récupération des données utilisateur");
        console.error(error);
      });
      const editUser = {
        id:id,
        name: name,
        surname: surname,
        adress: adress,
        CP: CP,
        City: city,
        pseudo: pseudo,
        email: email,
        password: password,
        image: image,
      };
    
      axios.put(`/api/user/${id}`, editUser).then((response) => {
        console.log(response);
      });
  }, []);

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
            <form action="" className="flex flex-col">
              <input
                placeholder=" Name"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                value={userData.name}
                onChange={(event) => setUserData({
                  ...userData,
                  name: event.target.value,
                
                })
              }
              />
              <input
                placeholder=" Surname"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                value={userData.surname}
                onChange={(event) => setUserData({
                  ...userData,
                  surname: event.target.value,
                
                })
              }
              />
              <input
                placeholder=" Pseudo"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                value={userData.pseudo}
                onChange={(event) => setUserData({
                  ...userData,
                  pseudo: event.target.value,
                
                })
              }
              />
              <input
                placeholder=" Adress"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                value={userData.adress}
                onChange={(event) => setUserData({
                  ...userData,
                  adress: event.target.value,
                
                })
              }
              />
              <input
                placeholder="CP"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="int"
                value={userData.CP}
                onChange={(event) => setUserData({
                  ...userData,
                  CP: event.target.value,
                
                })
              }
              />
              <input
                placeholder="City"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                value={userData.City}
                onChange={(event) => setUserData({
                  ...userData,
                  City: event.target.value,
                
                })
              }
              />
              <input
                placeholder=" Email"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                value={userData.email}
                onChange={(event) => setNewPost({})}
              />
              <input
                placeholder=" Password"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="current-password"
                value={userData.password}
                onChange={(event) => setNewPost({})}
              />

              <input
                placeholder=" Image"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                value={userData.image}
                onChange={(event) => setUserData({
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
                    EditUser(
                      userData.image,
                      userData.name,
                      userData.surname,
                      userData.pseudo,
                      userData.adress,
                      userData.CP,
                      userData.City,
                    );
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
