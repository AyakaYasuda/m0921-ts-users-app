import axios from "axios";

export class UserService {
  private static URL: string = `https://jsonplaceholder.typicode.com`;

  public static getAllUsers() {
    const dataURL: string = `${this.URL}/users`;
    return axios.get(dataURL);
  }

  public static getSingleUser(uid: string) {
    const dataURL: string = `${this.URL}/users/${uid}`;
    return axios.get(dataURL);
  }
}
