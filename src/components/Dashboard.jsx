import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="form-container">
        <div className="container-1">
          <div className="bg-orange-200">
            <Link to="/signup">Sign Up</Link>
          </div>
          <div className="bg-lime-100">
            <Link to="/signin">Sign In</Link>
          </div>
          <div className="bg-yellow-200">Survey</div>
        </div>
        <div className="container-2">
          <div className="bg-yellow-200">Item 4</div>
          <div className="bg-lime-100">Item 5</div>
          <div className="bg-orange-200">Item 6</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
