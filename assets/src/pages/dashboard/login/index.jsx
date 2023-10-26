import React from "react"
import Button from "../../../components/tools/button"
import {CgProfile} from "react-icons/cg"
const Login = () => {
    return(
        <>
         <div class="flex flex-col items-center justify-center h-screen dark bg-neutral-800">
  <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
  <h2 class="text-2xl font-bold text-gray-200 mb-4 flex flex-row justify-center">My Profil <CgProfile/>
 </h2>
        <form action="" className="flex flex-col">
            <input
            placeholder=" Name" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              onChange={(event) =>
                setNewPost({ })
              }
            />
                 <input
            placeholder=" Pseudo" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              onChange={(event) =>
                setNewPost({ })
              }
            />
                   <input
            placeholder=" Email" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              onChange={(event) =>
                setNewPost({ })
              }
            />
                      <input
            placeholder=" Password" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="password"
              onChange={(event) =>
                setNewPost({ })
              }
            />
            
            <input
            placeholder=" Image" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              onChange={(event) =>
                setNewPost({  })
              }
            />
            <input
            placeholder=" Description" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              onChange={(event) =>
                setNewPost({ })
              }
            />
        
        
            <div className="flex justify-center mt-4">
              <Button
                type="button"
                value="Modifier"
                onClick={() => handleAdd(newdata)}
              />
            </div>
        </form>
        </div>
        </div>
        </>
    )
}
export default Login