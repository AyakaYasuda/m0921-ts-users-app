import React, { Component } from 'react'

interface Props {}

interface State {
    name: string;
    title: string;
    age: number
}

export default class EmployeeClass extends Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state = {
            name: "Hoge",
            age: 50,
            title: "Accountant"
        } as State
    }
//   state = {}

  render() {
      const { name, age, title } = this.state
    return (
        <>
        <h2>Employee Component Class</h2>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Age: {age}</li>
          <li className="list-group-item">Title: {title}</li>
        </ul>
      </>
    )
  }
}