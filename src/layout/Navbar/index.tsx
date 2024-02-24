import Link from "next/link";
import React from "react";
import Logo from "@/Shared/Logo";

const Navbar = () => {
  return (
    <nav className="sticky top-3 z-30 bg-white bg-opacity-15">
      <div className="navbar  w-[90%] rounded-2xl shadow-md m-auto">
      <Logo />
      <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <Link href="/signin" className="btn-dark py-2">
          Sign In
        </Link>
        <Link href="/signup" className="hidden md:block btn-light py-2">
          Sign Up
        </Link>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
