import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const AuthForm = () => {
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ name, role }));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Login</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      >
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default AuthForm;
