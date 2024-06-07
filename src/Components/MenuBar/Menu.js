"use client";
import React from "react";
import { Wrapper } from "./styles";
import Link from "next/link";
import { SiGooglemaps } from "react-icons/si";
import { VscSignIn } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { AiFillNotification } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";

import { useAuth } from "../../../authContext";

const Menu = () => {
  const pathname = usePathname();
  const { user, logout } = useAuth();

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

          {/* <div>
            <Link
              href="#"
              className={`link ${pathname === "#" ? "active" : ""}`}
            >
              <FiSearch />
            </Link>
          </div> */}

          <div>
            {user && (
              <Link
                href="/Annoucement"
                className={`link ${
                  pathname === "/Annoucement" ? "active" : ""
                }`}
              >
                <AiFillNotification />
              </Link>
            )}
          </div>
          {user && user.email === "admin@gmail.com" && (
            <Link
              href="/DashBoard"
              className={`link ${pathname === "/DashBoard" ? "active" : ""}`}
            >
              <MdDashboard />
            </Link>
          )}
        </header>

        <section>
          {/* <div>
            {user ? (
              <>
                <Link
                  href="/Profile"
                  className={`link ${pathname === "/Profile" ? "active" : ""}`}
                >
                  <CgProfile />
                </Link>
              </>
            ) : (
              ""
            )}
          </div> */}

          <div>
            <Link
              href="/Login"
              className={`link ${pathname === "/Login" ? "active" : ""}`}
            >
              <VscSignIn />
            </Link>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Menu;
