import React from 'react'
import './AddFriendContainer.css'
export default function AddFriendContainer() {
  return (
      <>
          <div className='addFriendContainer d-flex flex-column p-3 m-2 gap-3 w-100 rounded'>
              <div className='d-flex flex-row gap-2 justify-content-between'>
                  <span>🧑‍🤝‍🧑 Friend name</span>
                  <input></input>
              </div>
               <div className='d-flex flex-row gap-2 justify-content-between'>
                  <span>🖼️ Image Url</span>
                  <input type='url' placeholder='https://i.pravatar.cc/48' value={'https://i.pravatar.cc/48'} ></input>
                  
              </div>
              <div className='d-flex flex-row justify-content-end'>
                  <button className='d-flex justify-content-center py-1 px-5 border-0 rounded'>add</button>
              </div>
              
          </div>
      </>
  )
}
