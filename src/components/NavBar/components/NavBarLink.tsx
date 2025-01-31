import React from "react";

interface NavBarLinkProps {
  children: React.ReactNode;
}

export default function NavBarLink({ children }: NavBarLinkProps) {
  return (
    <li>
      <a
        href="#"
        className="text-white sm:px-4 sm:py-2 sm:text-sm md:text-lg text-[11px] px-[4px] py-[4px] bg-sky-700"
      >
        {children}
      </a>
    </li>
  );
}
