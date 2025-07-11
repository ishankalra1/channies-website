import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false); // Close mobile menu on route change
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Single Navbar that becomes sticky */}
      <nav className={`fixed top-0 left-0 w-full z-50 font-Poppins transition-all duration-300 ${isSticky ? 'bg-white shadow-md' : 'bg-white'
        }`}>
        <div className="w-full px-4 md:px-6 lg:px-6 xl:px-10 2xl:px-0 max-w-sm md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="flex justify-between h-20 items-center">
            <Link href="/" className="text-2xl font-semibold hover:text-primary transition-colors">
              <Image
                src={isSticky ? "/images/logo.png" : "/images/logo.png"}
                alt="Max Writings Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-8">
              <NavLink href="/" pathname={pathname} isSticky={isSticky}>Home</NavLink>
              <NavLink href="/services" pathname={pathname} isSticky={isSticky}>Services</NavLink>
              <NavLink href="/about-us" pathname={pathname} isSticky={isSticky}>About</NavLink>
              <NavLink href="/videos" pathname={pathname} isSticky={isSticky}>Videos</NavLink>
              <NavLink href="/contact-us" pathname={pathname} isSticky={isSticky}>Contact</NavLink>
              <Link
                href="https://go.oncehub.com/ChannieDiscovery"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 ${isSticky ? 'text-white' : 'text-white'
                  }`}
              >
                Schedule a Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={28} className={isSticky ? "text-gray-800" : "text-black"} />
              ) : (
                <Menu size={28} className={isSticky ? "text-gray-800" : "text-black"} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`xl:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
            }`}>
            <div className="flex flex-col space-y-4 px-4">
              <NavLink href="/" pathname={pathname} isSticky={isSticky}>Home</NavLink>
              <NavLink href="/services" pathname={pathname} isSticky={isSticky}>Services</NavLink>
              <NavLink href="/about-us" pathname={pathname} isSticky={isSticky}>About</NavLink>
              <NavLink href="/videos" pathname={pathname} isSticky={isSticky}>Videos</NavLink>
              <NavLink href="/contact-us" pathname={pathname} isSticky={isSticky}>Contact</NavLink>
              <Link
                href="https://go.oncehub.com/ChannieDiscovery"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium text-center transition-colors duration-200`}
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden behind navbar */}
      <div className="h-20"></div>
    </>
  );
};

const NavLink = ({ href, pathname, children, isSticky }: any) => (
  <Link href={href} className="block">
    <span
      className={`${pathname === href ? "text-primary" : isSticky ? "text-gray-800 hover:text-primary" : "text-black hover:text-primary"} 
      transition-colors duration-200 px-3 py-2 font-medium`}
    >
      {children}
    </span>
  </Link>
);

export default Navbar;