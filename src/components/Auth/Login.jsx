import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
      <div className="form-glow backdrop-blur-md bg-gray-900/70 shadow-2xl rounded-3xl p-10 sm:p-16 flex flex-col items-center w-full max-w-md relative">
        {/* Logo/Icon */}
        <div className="mb-8 flex flex-col items-center">
          {/* <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mb-2">
            <circle cx="12" cy="12" r="10" fill="#10b981" fillOpacity="0.7" />
            <path d="M8 13l2.5 2.5L16 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg> */}
          <h2 className="text-3xl font-bold text-emerald-400 drop-shadow-sm">Welcome Back</h2>
          <p className="text-gray-300 mt-1 text-sm">Sign in to your account</p>
        </div>
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-5 w-full"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="animated-input outline-none border border-emerald-600 bg-gray-800/80 text-gray-100 text-lg py-3 px-5 rounded-xl placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-sm"
            type="email"
            required
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="animated-input outline-none border border-emerald-600 bg-gray-800/80 text-gray-100 text-lg py-3 px-5 rounded-xl placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-sm"
            type="password"
            required
            placeholder="Enter your password"
          />
          <div className="flex justify-end w-full">
            <a href="#" className="text-emerald-400 text-sm hover:underline">Forgot password?</a>
          </div>
          <button
            className="modern-btn outline-none bg-gradient-to-r from-slate-700 via-emerald-800 to-blue-900 text-white text-lg font-bold py-3 px-8 w-full rounded-xl mt-2 shadow-xl transition-all duration-200 relative backdrop-blur-md ring-2 ring-emerald-900 ring-offset-2 ring-offset-gray-900 focus:ring-4 focus:ring-emerald-800 active:scale-95"
            type="submit"
          >
            Login
          </button>
        </form>
        {/* Animation keyframes for fade-in-up, input, and button */}
        <style>{`
          .animate-fade-in-up {
            animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animated-input {
            transition: box-shadow 0.3s, transform 0.2s;
          }
          .animated-input:focus {
            box-shadow: 0 0 0 3px #34d39955, 0 2px 16px #10b98144;
            transform: scale(1.03);
          }
          .animated-input:hover {
            box-shadow: 0 0 0 2px #60a5fa55, 0 2px 8px #2563eb33;
            transform: scale(1.02);
          }
          .modern-btn {
            box-shadow: 0 4px 32px 0 #10b98122, 0 1.5px 4px 0 #0002;
            background: linear-gradient(90deg, #334155 0%, #065f46 50%, #1e3a8a 100%);
            position: relative;
            overflow: hidden;
          }
          .modern-btn:active {
            transform: scale(0.95);
            box-shadow: 0 2px 8px 0 #10b98133;
          }
          .form-glow {
            box-shadow: 0 0 32px 0 #10b98133, 0 2px 24px 0 #2563eb22, 0 1.5px 4px 0 #0002;
            border: none !important;
            transition: box-shadow 0.4s;
          }
          .form-glow:focus-within {
            box-shadow: 0 0 48px 0 #10b98155, 0 4px 32px 0 #2563eb33, 0 2px 8px 0 #0002;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Login;
