import React, { FC, useState, useEffect } from "react";
import { IUser } from "../model/IUser";
import { UserService } from "../services/UserService";
import { useParams } from "react-router-dom";

interface IState {
  loading: boolean;
  user: IUser;
  errorMessage: string;
}

const UserDetail: FC = () => {
  //   const userId: string | undefined = useParams().uid;
  const userId: string = useParams().uid as string;

  const [state, setState] = useState<IState>({
    loading: false,
    user: {} as IUser,
    errorMessage: "",
  });

  useEffect(() => {
    setState(prev => ({ ...prev, loading: !prev.loading }));

    UserService.getSingleUser(userId)
      .then(response => {
        setState({ ...state, loading: false, user: response.data });
      })
      .catch(error => {
        setState({ ...state, loading: false, errorMessage: error.message });
      });
  }, []);

  useEffect(() => {
    console.log("state.user", state.user);
  }, [state]);

  if (state.loading) {
    return <div>LOADING......</div>;
  }

  return (
    <>
      <h3>UserDetail</h3>
      <div className="row">
        <div className="col">
          <table className="table text-center table-striped">
            <thead className="bg-success text-white">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Company</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(state.user).length > 0 && (
                <tr key={state.user.id}>
                  <td>{state.user.id}</td>
                  <td>{state.user.name}</td>
                  <td>{state.user.username}</td>
                  <td>{state.user.email}</td>
                  <td>{state.user.phone}</td>
                  <td>
                    {state.user.address.suite +
                      " " +
                      state.user.address.street +
                      " " +
                      state.user.address.city}
                  </td>
                  <td>{state.user.company.name}</td>
                  <td>{state.user.website}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
