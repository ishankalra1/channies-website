import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/tiktok'

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-gray-300 py-12">
      <div className="responsive-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 pb-16">
          <div className="flex flex-col space-y-4">
            <div>
              <Image
                alt="Legacy Wealth Redefined Logo"
                src="/images/removerbg-logo.png"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold uppercase tracking-wider">About Us</h3>
            <p className="text-sm leading-relaxed text-[#727272]">
              Legacy Wealth Redefined was founded by Channie Nak, a passionate financial strategist and educator with nearly two decades of experience. We're committed to helping families make confident financial decisions, build generational wealth, and live with purpose and clarity.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about-us", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/videos", label: "Videos" },
                {
                  href: "https://go.oncehub.com/ChannieDiscovery",
                  label: "Schedule Consultation",
                  external: true
                },
                { href: "/contact-us", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[#727272] hover:text-white transition-colors"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    <ChevronRight className="h-4 w-4" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold uppercase tracking-wider">Contact Us</h3>
            <address className="not-italic space-y-3 text-sm text-[#727272]">
              <div className="flex items-start gap-3">
                <address>Office: 7150 E Camelback Road, Suite 444, Scottsdale, AZ 85251</address>
              </div>
              <div className="flex items-center gap-3">
                <Link href="tel:+1 404-374-9678">Mobile: 404-374-9678</Link>
              </div>
              <div className="flex items-center gap-3">
                <Link href="tel:+1 770-404-8647">Office: 770-404-8647</Link>
              </div>
              <div className="flex items-center gap-3">
                <Link href="mailto:channienak@gmail.com">channienak@gmail.com</Link>
              </div>
              <div className="flex items-center gap-3">
                <Link href="https://go.oncehub.com/ChannieDiscovery" target="_blank">
                  Schedule a Consultation
                </Link>
              </div>
            </address>

            <div className="flex items-center gap-4 pt-2">
              <SocialIcon network="instagram"
                url="https://www.instagram.com/legacywealthredefined"
                target="_blank"
                className="h-5 w-5" />
              <SocialIcon network="facebook" className="h-5 w-5"
                href="https://www.facebook.com/share/1AqKBYYcex/?mibextid=wwXIfr"
                target="_blank"
              />
              <SocialIcon network="linkedin" className="h-5 w-5"
                href="https://www.linkedin.com/in/channie-nak-06a098104?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
              />
              <SocialIcon network="tiktok" className="h-5 w-5"
                href="https://www.tiktok.com/channienak"
                target="_blank"
              />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-[#727272]">
          <p>© {new Date().getFullYear()} Legacy Wealth Redefined. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;