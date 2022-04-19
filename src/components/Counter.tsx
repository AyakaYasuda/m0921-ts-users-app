import React, { FC, useState } from "react";

interface IProps {};
interface IState {
    count: number
};

const Counter:FC<IProps> = (props) => {
    const [counter, setCounter] = useState<IState>({ count: 0 })

    const incrementHandler = (): void => setCounter({ count: counter.count + 1})
    const decrementHandler = (): void => setCounter({ count: counter.count - 1})

    return <>
    <div className="container py-4">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <p className="h3">
                            {counter.count}
                        </p>
                        <button className="btn btn-success m-1" onClick={incrementHandler}>+</button>
                        <button className="btn btn-success m-1" onClick={decrementHandler}>-</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
};

export default Counter;