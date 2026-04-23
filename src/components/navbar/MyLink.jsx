"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ name, path }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      <Link
        className={
          pathName === path ? "  text-gray-500  border-b-2 border-[#9538E2] " : ""
        }
        href={path}
      >
        {name}
      </Link>
    </div>
  );
};

export default MyLink;
