import { Component, ReactNode } from "react";

interface Props {name: string, age: number, title: string}

class CustomerClass extends Component<Props> {
  render(): ReactNode {

    const {name, age, title} = this.props
    return (
      <>
        <h2>Customer Component Class</h2>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Age: {age}</li>
          <li className="list-group-item">Title: {title}</li>
        </ul>
      </>
    );
  }
}

export default CustomerClass;
