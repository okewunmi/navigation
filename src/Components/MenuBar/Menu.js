"use client";
import React from "react";
import { Wrapper } from "./styles";
import Link from "next/link";
import { SiGooglemaps } from "react-icons/si";
import { VscSignIn } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { AiFillNotification } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();

  return (
    <Wrapper>
      <div className="container">
        <header>
          <div className="logo">
            <SiGooglemaps />
          </div>

          <div>
            <Link
              href="/"
              className={`link ${pathname === "/" ? "active" : ""}`}
            >
              <IoMdHome className="icon" />
            </Link>
          </div>

          <div>
            <Link
              href="#"
              className={`link ${pathname === "#" ? "active" : ""}`}
            >
              <FiSearch />
            </Link>
          </div>

          <div>
            <Link
              href="/Annoucement"
              className={`link ${pathname === "/Annoucement" ? "active" : ""}`}
            >
              <AiFillNotification />
            </Link>
          </div>

          <div>
            <Link
              href="/DashBoard"
              className={`link ${pathname === "/DashBoard" ? "active" : ""}`}
            >
              <MdDashboard />
            </Link>
          </div>
        </header>

        <div>
          <Link href="#" className={`link ${pathname === "#" ? "active" : ""}`}>
            <VscSignIn />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Menu;
