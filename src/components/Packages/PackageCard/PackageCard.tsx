import React from "react";
import newYork from "../../../assets/new_york.jpg";

interface PackageCardProps {
  children: React.ReactNode;
  title: string;
}

export default function PackageCard({ children, title }: PackageCardProps) {
  return (
    <div className="bg-gray-50 w-80 h-96 flex items-center justify-center flex-col text-center space-y-4 rounded mx-auto">
      <img src={newYork} alt="package" className="w-64 rounded" />
      <h2 className="font-bold text-lg">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
