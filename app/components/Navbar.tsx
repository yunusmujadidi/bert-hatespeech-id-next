"use client";
import { Link } from "next-view-transitions";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();

  const isActive = (href: string) => {
    const activeSegment = href === "/" ? null : href.split("/")[1];
    return activeSegment === segment;
  };

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-2">
        <div className='<div className="max-w-\[2520px\] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"'>
          <nav className="flex flex-row justify-between items-center gap-3 mg:gap-0 text-lg text-zinc-800">
            <Link href="/" className={isActive("/") ? "underline " : ""}>
              Predict!
            </Link>
            <Link
              href="/dataset"
              className={isActive("/dataset") ? "underline " : ""}
            >
              Dataset
            </Link>
            <Link
              href="/dataexplore"
              className={isActive("/dataexplore") ? "underline " : ""}
            >
              EDA
            </Link>
            <Link
              href="/preprocessing"
              className={isActive("/preprocessing") ? "underline " : ""}
            >
              Preprocessing
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
