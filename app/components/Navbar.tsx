import { Link } from "next-view-transitions";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-2">
        <div className='<div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">'>
          <div className="flex flex-row justify-between items-center gap-3 mg:gap-0 text-lg text-zinc-800">
            <Link href="/">Predict!</Link>
            <Link href="/dataset">Dataset</Link>
            <Link href="/dataexplore">EDA</Link>
            <Link href="/preprocessing">Preprocessing</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
