"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen">
        <div className="w-full">
          <>{children}</>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
