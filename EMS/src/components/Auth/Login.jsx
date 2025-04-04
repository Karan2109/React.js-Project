import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-600 rounded-2xl">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center p-20"
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none placeholder:text-gray-400"
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none placeholder:text-gray-400 mt-3"
              type="password"
              placeholder="Enter password"
            />
            <button className="border-none bg-emerald-600 rounded-full py-3 px-5 text-xl outline-none placeholder:text-white mt-7 w-full hover:bg-emerald-500">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
