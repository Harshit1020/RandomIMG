"use client"
import axios from 'axios'
import React, { useState } from 'react' 

const page = () => {
  const [image, setimage] = useState([])
  const getImg = async () =>{
  try {
    const img =await axios.get("https://picsum.photos/v2/list")
    let data = img.data;
    console.log(data)
    setimage(data)
    console.log(data)

  } catch (error) {
    console.log(error)
  }

  }

  return (
    <div className='font-bold text-red-600 text-xl py-5 px-5'>
      <button onClick={getImg} className='py-5 px-5 bg-green-400 text-slate-50 rounded-lg'>click here</button>
      <div className='p-5'>

      {image.map((elem, i)=>{

        return <img 

            key={i}
            src={elem.download_url}
            width={300}
            height={200}
            className='m-10 rounded inline-block'
         />
      })}

      </div>
    </div>
  )
}

export default page