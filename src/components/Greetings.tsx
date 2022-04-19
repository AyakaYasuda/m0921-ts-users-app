import React, { FC, useState } from "react";

interface IProps {}
interface IState {
  text: string;
}

const Counter: FC<IProps> = (props) => {
  const [message, setMessage] = useState<IState>({ text: "Hallo" });

  const messageChangeHandler = (greeting: string): void =>
    setMessage({ text: greeting });

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <p className="h3">{message.text}</p>
                <button
                  className="btn btn-info m-1"
                  onClick={() => messageChangeHandler("Guten Morgen")}
                >
                  Good Morning
                </button>
                <button
                  className="btn btn-success m-1"
                  onClick={() => messageChangeHandler("Guten Tag")}
                >
                  Good Afternoon
                </button>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => messageChangeHandler("Guten Abend")}
                >
                  Good Evening
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
