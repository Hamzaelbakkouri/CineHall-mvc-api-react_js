import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost/CineHall/api/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      console.log(data.email);
      // Do something with the data, e.g. save the token in local storage

      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }


  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          className="border border-gray-400 p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          className="border border-gray-400 p-2 w-full"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600"

      >
        Login
      </button>
    </form>
  );
};

export default Login;
