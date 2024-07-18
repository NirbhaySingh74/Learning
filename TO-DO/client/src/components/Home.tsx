import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">
          Welcome to the ToDo App
        </h1>
        <p className="text-lg text-gray-200 mt-2">
          Manage your tasks efficiently and stay organized
        </p>
      </header>
      <nav className="flex space-x-4">
        <Link
          to="/login"
          className="btn px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="btn px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
        >
          Sign Up
        </Link>
      </nav>
    </div>
  );
};

export default Home;
