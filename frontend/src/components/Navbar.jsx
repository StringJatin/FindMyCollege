import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky bg-custom-secondary  top-0 z-50 flex items-center justify-between whitespace-nowrap px-10 py-3">
      <div className="flex items-center gap-4 text-[#111517]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_535)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_6_535">
                <rect width="48" height="48" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-[#111517] text-lg font-bold leading-tight tracking-[-0.015em]">FindMyCollege</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="text-[#111517] text-sm font-medium leading-normal" href="#">Profile</a>
          <a className="text-[#111517] text-sm font-medium leading-normal" href="#">Dashboard</a>
          <a className="text-[#111517] text-sm font-medium leading-normal" href="#">Help</a>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-custom-primary custom-secondary text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Log Out</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
