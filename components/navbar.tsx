"use client";

import { cn } from "@/lib/utils";
import Avatar from "@/public/assets/image-avatar.png";
import Logo from "@/public/assets/logo.svg";
import { Bookmark, LayoutGrid, Tv, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Home",
    icon: LayoutGrid,
    href: "/",
  },
  {
    title: "Movies",
    icon: Video,
    href: "/movies",
  },
  {
    title: "TVSeries",
    icon: Tv,
    href: "/series",
  },
  {
    title: "Bookmarks",
    icon: Bookmark,
    href: "/bookmarks",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between bg-semiDarkBlue p-4 md:mx-6 md:mt-6 md:rounded-xl md:p-6 lg:m-8 lg:h-screen lg:w-24 lg:flex-col lg:justify-normal">
      <Image src={Logo} alt="Logo" />
      <ul className="flex items-center gap-6 lg:flex-1 lg:flex-col lg:pt-20">
        {navItems.map(({ title, icon: Icon, href }) => (
          <li key={title}>
            <Link href={href}>
              <Icon
                className={cn(
                  "h-5 w-5 fill-grayishBlue text-grayishBlue hover:fill-white hover:text-white md:h-6 md:w-6",
                  pathname === href && "fill-white text-white",
                )}
              />
              <span className="sr-only">{title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="relative h-6 w-6 rounded-full border border-white md:h-8 md:w-8">
        <Image src={Avatar} alt="Avatar" fill />
      </div>
    </nav>
  );
};
export default Navbar;
