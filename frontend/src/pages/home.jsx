import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/form">Create Assignment</Link>
    </div>
  );
};

export default Home;
