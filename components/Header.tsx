import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const Header: React.FC = () => {
  return (
    <div className="navbar min-h-12 md:justify-center md:min-h-16 bg-base-100 fixed z-10 top-0">
      <div className="flex-none">
        <ul className="hidden md:menu md:menu-horizontal bg-base-100 rounded-box">
          <li>
            <a href="#aboutme">About me</a>
          </li>
          <li>
            <a href="#projects">My Projects</a>
          </li>
          <li>
            <a>My Story</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-sm btn-ghost">
            <MenuIcon />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#aboutme">About me</a>
            </li>
            <li>
              <a href="#projects">My Projects</a>
            </li>
            <li>
              <a>My Story</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
