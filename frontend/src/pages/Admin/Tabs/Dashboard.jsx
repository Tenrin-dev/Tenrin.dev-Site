import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

const Dashboard = () => {
  const Navigation = useNavigate()
  return (

      <section className="flex items-center justify-center ">
  <div className="flex flex-col w-full justify-center items-center h-96">
    <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
      <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
        Update
      </span>
      <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
        Your Portfolio
      </span>
    </h1>
    <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Fugit alias nihil incidunt.
    </p>
    <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
      <button onClick={()=>{Navigation("/myadmin-panel/video")}} className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
       Add New Video
      </button>
      <button onClick={()=>{Navigation("/myadmin-panel/graphic")}} className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
       Add New Graphic
      </button>
    </div>
    <p className="mt-8 text-center text-gray-700 dark:text-white text-md md:text-xl">Notify me when App is launched :)</p>
  </div>
</section>


 
  )
}

export default Dashboard