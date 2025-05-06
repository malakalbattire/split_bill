import React from "react";
import SelectBtn from "./SelectBtn";

export default function Person() {
  const persons = [
    {
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      owe: 3,
    },
    {
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      owe: 5,
    },
    {
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      owe: 2,
    },
  ];
  return (
    <div>
      <ul className="list-unstyled d-flex flex-column gap-3">
        {persons.map((person, index) => (
          <li key={index}>
            <div className="user-card container d-flex justify-content-between align-items-center gap-3 rounded">
              <div className="start-side d-flex flex-row p-2 gap-2">
                <img
                  className="rounded-circle"
                  src={person.image}
                  alt="Avatar"
                />
                <div className="d-flex flex-column">
                  <h3 className="m-0 fw-bold fs-5">{person.name}</h3>
                  <p className="m-0">
                    {person.name} owes you ${person.owe}
                  </p>
                </div>
              </div>
              <div className="end-side ">
                
                <SelectBtn/>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
