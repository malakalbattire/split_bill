import React, { useState } from "react";
import AddFriendContainer from "./addFriendContainer/AddFriendContainer";
export default function SelectBtn() {
  const [selected, setSelected] = useState(false);

  const selectperson = () => {
    setSelected(true);
    console.log("selected");
  };
  return (
    <>
      <div className="">
        
        <button className="rounded border-0 py-1 px-2" onClick={selectperson}>
          {selected ? "colse" : "select"}
        </button>
        {selected && <AddFriendContainer />}
      </div>
    </>
  );
}
