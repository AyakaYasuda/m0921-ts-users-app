import React, { ChangeEvent, FC, useState } from "react";
import { IUserObj } from "../model/IUser";

interface IProps {}

interface IState {
  user: IUserObj;
}

const LoginForm: FC<IProps> = (props) => {
  const [userState, setUserState] = useState<IState>({
    user: { username: "", password: "" }
  });

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserState({ user: { ...userState.user, [name]: value } });
  };

  return (
    <>
      <pre>{JSON.stringify(userState.user)}</pre>
      <div className="container py-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header text-center">
                <p className="h4">Login</p>
              </div>

              <div className="card-body">
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Login"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
