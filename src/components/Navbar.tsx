export const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Collections", href: "/collections" },
    { name: "Sales", href: "/sales" },
    { name: "New arrivals", href: "/new-arrivals" },
    { name: "bridal set", href: "/bridal-set" },
    { name: "Contact", href: "/contact" },
];

import Link from "next/link";

import { Search, ShoppingCart, Menu } from "lucide-react";
import MobileNav from "./MobileNav";

export default function Navbar() {
    return (
        <>
            
            <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
                <nav className="mx-auto flex h-20 py-12 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-2">

                    {/* Logo */}
                    <span className="text-lg font-semibold text-yellow-600">
                        Sam Ibrahim
                    </span>


                    {/* Desktop Links */}
                    <ul className="hidden items-center gap-10 lg:flex uppercase">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-sm tracking-widest text-gray-500 font-extralight  transition-colors hover:text-black"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Icons */}

                    <div className="hidden items-center gap-4 lg:flex text-gray-400">
                        <Link
                            href="/search"
                            aria-label="Search"
                            className="rounded-full p-2 transition  hover:bg-gray-100"
                        >
                            <Search size={20} />
                        </Link>

                        <Link
                            href="/cart"
                            aria-label="Shopping cart"
                            className="rounded-full p-2 transition hover:bg-gray-100"
                        >
                            <ShoppingCart size={20} />
                        </Link>
                    </div>

                    {/* Mobile Button */}
                    <MobileNav />
                </nav>
            </header>
        </>
    )
}
