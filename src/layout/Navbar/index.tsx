import Link from "next/link";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useRouter, useSearchParams } from "next/navigation";
import Logo from "@/Shared/Logo";

const Navbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search: any =
    typeof searchParams.get("query") === "string"
      ? searchParams.get("query")
      : "";
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);
  const handleKeyPress = (e: any) => {
    let query = e.target.value;
    if (e.keyCode === 13) {
      if (query.length > 0) {
        router.push(`/search?query=${query}`, { scroll: false });
      } else {
        router.push(`/`, { scroll: false });
      }
    }
  };

  const handleBlur = (e: any) => {
    let query = e.target.value;
    if (!(query.length > 0)) {
      router.push(`/`, { scroll: false });
    }
  };
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
