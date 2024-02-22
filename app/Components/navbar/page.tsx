"use client";

import Image from "next/image";
import Button from "../Button";
import { useState } from "react";
import LoginForm from "../LoginForm";

const Navbar = () => {
  // State untuk mengontrol visibilitas form login
  const [showLoginForm, setShowLoginForm] = useState(false);

  // State untuk mengontrol visibilitas sidebar
  const [showSidebar, setShowSidebar] = useState(false);

  // Fungsi untuk mengganti visibilitas form login
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  // Fungsi untuk mengganti visibilitas sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // Fungsi untuk menutup sidebar saat tautan diklik
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <nav
      className="flexBetween max-container padding-container relative z-30 py-3"
      style={{ backgroundColor: "#343a40" }}
    >
      <div className="flex items-center">
        {/* Menggunakan toggleSidebar untuk event onClick */}
        <a onClick={toggleSidebar}>
          <Image src="/logo.png" alt="logo" width={150} height={150} />
        </a>

        {/* Daftar tautan navigasi */}
        <ul className="hidden h-full gap-10 ml-12 lg:flex">
          <li>
            <a href="/" onClick={closeSidebar}>
              Home
            </a>
          </li>
          <li>
            <a href="/Components/feature" onClick={closeSidebar}>
              Feature
            </a>
          </li>
          <li>
            <a href="/Components/pricing" onClick={closeSidebar}>
              Pricing
            </a>
          </li>
          <li>
            <a href="/Components/about" onClick={closeSidebar}>
              About
            </a>
          </li>
        </ul>
      </div>

      {/* Tombol login */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          icon="/user.svg"
          title="LOG IN"
          variant="btn_dark_green"
          onClick={toggleLoginForm}
        />
      </div>

      {/* Render form login jika showLoginForm bernilai true */}
      {showLoginForm && <LoginForm />}

      {/* Sidebar */}
      {showSidebar && (
        <div
          className="absolute top-0 left-0 w-56 p-12"
          style={{
            backgroundColor: "#343a40",
            marginTop: 57.5,
            paddingLeft: 80,
            height: 1053,
          }}
        >
          <ul className="space-y-4">
            <li>
              <a href="/" onClick={closeSidebar}>
                Home
              </a>
            </li>
            <li>
              <a href="/Components/feature" onClick={closeSidebar}>
                Feature
              </a>
            </li>
            <li>
              <a href="/Components/pricing" onClick={closeSidebar}>
                Pricing
              </a>
            </li>
            <li>
              <a href="/Components/about" onClick={closeSidebar}>
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
