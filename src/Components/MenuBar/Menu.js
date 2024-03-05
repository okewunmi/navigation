import React from "react";
import { Wrapper } from "./styles";
import Link from "next/link";
import { SiGooglemaps } from "react-icons/si";
import { VscSignIn } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { AiFillNotification } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

const Menu = () => {
  return (
    <Wrapper>
      <div className="container">
        <header>
          <div className="logo">
            <SiGooglemaps />
          </div>

          <div className="link">
            <Link href="/">
              <IoMdHome className="icon" />
            </Link>
          </div>

          <div className="link">
            <Link href="#">
              <FiSearch />
            </Link>
          </div>

          <div className="link">
            <Link href="/Annoucement">
              <AiFillNotification />
            </Link>
          </div>

          <div className="link">
            <Link href="/DashBoard">
              <MdDashboard />
            </Link>
          </div>
        </header>

        <div className="link">
          <Link href="#">
            <VscSignIn />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Menu;
