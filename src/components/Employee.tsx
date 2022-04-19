import React, { FC, useState } from "react";

interface IProps {}

interface IState {
    name: string;
    age: number;
    title: string;
}

const Employee: FC<IProps> = (props) => {
  const [state] = useState<IState>({
    name: "Hoge",
    age: 25,
    title: "Janitor"
  });

  return (
    <>
      <h2>Employee Component</h2>
      <ul className="list-group">
        <li className="list-group-item">Name: {state.name}</li>
        <li className="list-group-item">Age: {state.age}</li>
        <li className="list-group-item">Title: {state.title}</li>
      </ul>
    </>
  );
};

export default Employee;
