import React, { useState } from "react";
import AddFriendContainer from "./addFriendContainer/AddFriendContainer";

export default function AddFriendBtn() {
  const [selected, setSelected] = useState(false);
  const addFriend = () => { 
    setSelected(true);
    console.log("adeeeed");
  };
  return (
    <div className="d-flex justify-content-end  flex-column">
      {selected && (<AddFriendContainer />)}
      <div className="d-flex flex-row justify-content-end p-2"><button className=" border-0 rounded p-2 w-10 " onClick={addFriend}>{ selected?"close":"Add friend"}</button></div>
      
  
    </div>
  );
}
