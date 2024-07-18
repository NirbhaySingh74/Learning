import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface HeaderProps {
  user: {
    firstName?: string;
    lastName?: string;
    avatar?: string;
  };
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      onLogout();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="bg-gradient-to-r my-2 from-purple-500 to-blue-600 shadow p-4 flex justify-between items-center text-white gap-5">
      <div className="flex items-center space-x-4">
        {user.avatar && (
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        )}
        <div>
          <p className="text-lg font-bold">
            {user.firstName} {user.lastName}
          </p>
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
