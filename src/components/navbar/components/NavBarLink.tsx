import React from "react";

interface NavBarLinkProps {
  children: React.ReactNode;
}

export default function NavBarLink({ children }: NavBarLinkProps) {
  return (
    <li>
      <a href="#" className="text-md text-white px-4 py-2 bg-sky-700">
        {children}
      </a>
    </li>
  );
}
