import React from "react";

const Header = (props) => {
  const { data, changeUser } = props;

  const logOut = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser();
  };

  return (
    <div className="flex items-end text-white justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">{data?.firstName}</span>
      </h1>
      <button onClick={logOut} className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm cursor-pointer">Log Out</button>
    </div>
  );
};

export default Header;
