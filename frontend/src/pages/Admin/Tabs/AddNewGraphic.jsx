import React, { useState } from 'react'
import { usePostVideoMutation } from '../../../redux/Api/VideoApi'
import { usePostGraphicMutation } from '../../../redux/Api/GraphicApi'

const AddNewGraphic = () => {
  const [submitGraphic,result] = usePostGraphicMutation()
  const [graphicData,setGraphicData] = useState({
    url:'',
    caption:'',
    width:'',
    height:''
  })

  const HandleData =(e)=>{
      setGraphicData({...graphicData,[e.target.name]:e.target.value})
  }

  const SubmitData=async(e)=>{
    e.preventDefault()
    await submitGraphic(graphicData)
    console.log("result",result)
    if(!result.error){
      alert("Graphic Uploaded Successfully")
    }
  }
  return (
   <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
  <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
    <div className="shrink-0 mr-auto sm:py-3">
      <p className="font-medium">Upload New Graphic</p>
      <p className="text-sm text-gray-600">Update Graphic portfolio panel</p>
    </div>
    <button className="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200">Clear</button>
    <button className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700" onClick={SubmitData}>Publish</button>
  </div>
 
  <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
    <p className="shrink-0 w-32 font-medium">image/Gif Url</p>
    <input name='url' placeholder="https://zyx.com/myimage.jpeg" className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" onClick={HandleData} />
  </div>
  <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
    <p className="shrink-0 w-32 font-medium">Image/Gif Caption</p>
    <input name='caption' placeholder="caption" className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" onChange={HandleData}/>
  </div>
  <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
    <p className="shrink-0 w-32 font-medium">width</p>
    <input name='width' placeholder="my video caption" className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" onChange={HandleData}/>
  </div>
  <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
    <p className="shrink-0 w-32 font-medium">height</p>
    <input name='height' placeholder="my video caption" className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" onChange={HandleData}/>
  </div>
  <div className="flex justify-end py-4 sm:hidden">
    <button className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">Clear</button>
    <button className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700" onClick={SubmitData}>Publish</button>
  </div>
</div>


  )
}

export default AddNewGraphic