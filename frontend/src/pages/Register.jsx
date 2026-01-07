import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    navigate("/todos");
  }
  }, [navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", { name, email, password });
      navigate("/");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
  <div className="min-h-screen bg-linear-to-br from-gray-50 to hint-gray-100 flex items-center justify-center">
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Register
      </h2>

      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          required
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium"
        >
          Register
        </button>
      </form>

      <p className="text-center text-gray-500 mt-4">
        Already have an account?{" "}
        <Link to="/" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  </div>
);
}

export default Register;
