
import React, { useEffect, useState } from "react";
import { navLinks } from "../constants/NavItems";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    let id = sessionStorage.getItem("userId");
    id !== null ? setIsLogin(true) : setIsLogin(false);
  },[setIsLogin]);

  return (
    <div className="w-screen h-14 bg-gray-900 text-white">
      <ul className="flex gap-8 p-3 text-2xl ms-6 ">
        {isLogin ? (
          <li>
            <Link to={"/dashboard/home"}>Home</Link>
          </li>
        ) : (
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
        )}
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

