import React from 'react'

export default function Img_list({ data }) {

  let tags = data.tags.split(',').map(item=>{
    return(
      <span key={item} className="inline-block bg-gray-200 rounded-full 
          py-1 px-3 my-1 text-sm font-semibold text-gray-700 ">
            #{item}
      </span>
    )
  });

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={data.largeImageURL} alt='random_img' className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by { data.user }
        </div>
        <div>
          <ul>
            <li>
              <strong>Likes:</strong>
              { data.likes }
            </li>
            <li>
              <strong>Views:</strong>
              { data.views }
            </li>
          </ul>
        </div>
        <div className="px-1 py-1">
          { tags }
        </div>
      </div>
    </div>
  )
}
