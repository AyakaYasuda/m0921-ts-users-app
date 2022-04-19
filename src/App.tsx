import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Customer from "./components/Customer";
import CustomerClass from "./components/CustomerClass";
import Employee from './components/Employee';
import EmployeeClass from "./components/EmployeeClass";
import Counter from "./components/Counter";
import Greetings from './components/Greetings'
import LoginForm from "./components/LoginForm";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="container py-3">
      <div className="grid">
        <div className="row">
          <div className="col">
            <div className="h3 fw-bold text-success">App Component</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              amet possimus laborum. Nesciunt architecto, ea molestiae a quia
              voluptas, illo exercitationem facilis adipisci laborum ipsa totam
              error quo distinctio voluptate.
            </p>

            <button className="btn btn-success btn-sm">
              <i>
                <FontAwesomeIcon icon={faBook} />
                Read More
              </i>
            </button>
          </div>
        </div>

        {/* <div className="row">
          <div className="col">
            <Customer name="hoge" age={20} title="Developer" />
            <CustomerClass name="hoge" age={20} title="Developer" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Employee />
            <EmployeeClass />
          </div>
        </div> */}

        {/* <div className="row">
          <div className="col">
            <Counter />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Greetings />
          </div>
        </div> */}

        {/* <div className="row">
          <div className="col">
            <LoginForm />
          </div>
        </div> */}

        <div className="row">
          <div className="col">
            <UserList />
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
