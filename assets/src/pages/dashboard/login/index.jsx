import React, { useState, useEffect} from "react";
import Button from "../../../components/tools/button";
import axios from "axios";
import { useParams } from 'react-router-dom';


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
            CP: 0,
            "City": "string",
            "name": "string",
            "surname": "string",
            "image": "string",
            cP: 0,
            "city": "string"
          }
       
        EditUser(editUser);
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);


  const config = {
    headers: {
      Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDA4MTczODgsImV4cCI6MTcwMDgyMDk4OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlckBuYXR1cm9waWVkLmZyIn0.BLtfhjr-1C7ZX0Ah3-4sNRtBIKxSyms_dByJSooL8JxZjJ-b85bGTUqtDQaWSdZWJnRY60w-PM-_QPWLFzoZDr3XVhwoKziVvnkcabuRdEsC_76tSRBWjhYKbFcsnIsqVfgdCtm-rvQui5jsRp_2xTmRGsL3v5tHufP0v6ZWJLxahMHuL7hkxrRIA1-z-VcC3Vd2FQYUI15xIB8xNpThkAbYPwDNLPCP2I1jyxSkYh63x2XWmQN9sPKdjK5P-7ej-mSYu9tSS9nE1Dt6kta3qROhAvP9ETvSFL1ju0JqKXkQ7WWfxdX3zb3pM2zh0BtDokC1v-lOaJX6VA1ezgt3Zg `,
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
        <div className="flex flex-col items-center justify-center h-screen dark bg-neutral-800 ">
          <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-200 mb-4 flex flex-row justify-center">
              <img
                src={userData.image}
                alt="Image de profil"
                className="w-32 h-32 rounded-full"
              />
            </h2>
            <form action="" >
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
