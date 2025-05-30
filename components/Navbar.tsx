"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const user = {};
  return (
    <header className="navbar">
      <nav>
        <Link href={"/"}>
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <h1>SnapCast</h1>
        </Link>

        {user && (
          <figure>
            <button onClick={() => router.push("/profile/id")}>
              <Image
                src="/assets/images/dummy.jpg"
                alt="user"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
