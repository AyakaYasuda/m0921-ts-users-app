import React, { FC } from "react";

interface Props {
  name: string;
  age: number;
  title: string;
}

const Customer: FC<Props> = ({ name, age, title }) => {
  return <>
    <h2>Customer Component</h2>
    <ul className="list-group">
        <li className="list-group-item">Name: {name}</li>
        <li className="list-group-item">Age: {age}</li>
        <li className="list-group-item">Title: {title}</li>
    </ul>
  </>;
};

export default Customer;
