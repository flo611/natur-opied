import React from "react"
import Button from "../../../components/tools/button"

const Login = () => {
    return(
        <>
         <div class="flex flex-col items-center justify-center h-screen dark">
  <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
  <h2 class="text-2xl font-bold text-gray-200 mb-4">My Profil
  <img src="" alt="" id="profil-image" /></h2>
        <form action="" className="flex flex-col">
            <input
            placeholder=" Name" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              onChange={(event) =>
                setNewPost({ ...newPost, name: event.target.value })
              }
            />
                 <input
            placeholder=" Pseudo" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              onChange={(event) =>
                setNewPost({ ...newPost, name: event.target.value })
              }
            />
            
            <input
            placeholder=" Image" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              onChange={(event) =>
                setNewPost({ ...newPost, image: event.target.value })
              }
            />
            <input
            placeholder=" Description" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              onChange={(event) =>
                setNewPost({ ...newPost, description: event.target.value })
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