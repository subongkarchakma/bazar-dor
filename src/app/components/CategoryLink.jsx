"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryLink = ({ nav }) => {
  const pathname = usePathname();
  const href = `/category/${nav.slug}`;
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-colors duration-200 ${
        isActive
          ? "bg-blue-600 text-white font-semibold"
          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
      }`}
    >
      <span>{nav.icon}</span>
      {nav.nameBn}
    </Link>
  );
};

export default CategoryLink;