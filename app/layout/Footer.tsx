import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-[#0954a0] text-white pt-6 md:pt-8 pb-4 w-full"
      style={{ fontFamily: "'Neurial Grotesk', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:flex lg:flex-row gap-y-5 gap-x-0 lg:gap-0 px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24">

        {/* Column 1: Logo, Tagline, Follow Us */}
        <div className="col-span-2 lg:w-[26%] lg:pl-6 lg:pr-8 lg:border-r lg:border-white/10 flex flex-col border-b border-white/10 pb-5 lg:pb-0 lg:border-b-0">
          <div className="lg:-mt-6">
            <div className="mb-2 -ml-1">
              <Image
                src="/motors-logo.png"
                alt="Phoenix Logo"
                width={350}
                height={110}
                className="h-[60px] sm:h-[70px] w-auto object-contain"
              />
            </div>
            <p className="text-[11px] sm:text-[12px] lg:text-[10px] font-normal text-white/70 leading-relaxed max-w-sm lg:max-w-[215px]">
              Phoenix Foundation is dedicated to creating lasting social impact through meaningful initiatives.
            </p>
          </div>

          <div className="mt-5 lg:mt-10">
            <h4 className="text-[13px] sm:text-[14px] font-medium mb-2 text-[#F0E7E7]">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity p-0.5">
                <Image
                  src="/footer/footer-fb.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain brightness-0 invert"
                />
              </a>

              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity p-0.5">
                <Image
                  src="/footer/footer-insta.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain brightness-0 invert"
                />
              </a>

              <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity p-0.5">
                <Image
                  src="/footer/footer-ln.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain brightness-0 invert"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Address */}
        <div className="col-span-1 lg:w-[24%] pr-3 lg:px-8 lg:border-r lg:border-white/10 flex flex-col border-b border-white/10 pb-5 lg:pb-0 lg:border-b-0">
          <h3 className="text-[13px] sm:text-[14px] font-bold mb-2.5 sm:mb-4 text-white">Address</h3>
          <div className="flex items-center gap-1.5 mb-1 text-[10px] sm:text-[12px] font-regular text-white">
            <Image
              src="/footer/location.png"
              alt="Location"
              width={16}
              height={16}
              className="w-3.5 h-3.5 shrink-0 object-contain brightness-0 invert"
            />
            <span>Location</span>
          </div>
          <div className="text-[10px] sm:text-[11px] lg:text-[10px] font-normal text-white/80 leading-relaxed">
            <p>Nagarjuna Residency Driveway,</p>
            <p>Diamond Hills, Lumbini</p>
            <p>Avenue, Gachibowli,</p>
            <p>Hyderabad, Telangana 500081</p>
          </div>
        </div>

        {/* Column 3: Contact US */}
        <div className="col-span-1 lg:w-[20%] pl-3 lg:px-6 lg:border-r lg:border-white/10 flex flex-col border-b border-white/10 pb-5 lg:pb-0 lg:border-b-0">
          <h3 className="text-[13px] sm:text-[14px] font-bold mb-2.5 sm:mb-4 text-white">Contact Us</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] lg:text-[10px] font-regular text-white/50">
              <Image
                src="/footer/phone.png"
                alt="Phone"
                width={16}
                height={16}
                className="w-3.5 h-3.5 shrink-0 object-contain brightness-0 invert"
              />
              <a href="tel:04022225555" className="hover:underline transition-all leading-tight">
                040-2222 5555/6666/7777
              </a>
            </div>
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] lg:text-[10px] font-regular text-white/50">
              <Image
                src="/footer/email.png"
                alt="Email"
                width={16}
                height={16}
                className="w-3.5 h-3.5 shrink-0 object-contain brightness-0 invert"
              />
              <a href="mailto:info@phoenixindia.net" className="hover:underline transition-all break-all leading-tight">
                info@phoenixindia.net
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: About US */}
        <div className="col-span-1 lg:w-[15%] pr-3 lg:px-8 lg:border-r lg:border-white/10 flex flex-col pt-1 lg:pt-0">
          <h3 className="text-[13px] sm:text-[14px] font-bold mb-2.5 sm:mb-4 text-white">About Us</h3>
          <ul className="space-y-2 text-[10px] sm:text-[12px] font-regular text-white/80">
            <li><Link href="#" className="hover:text-white transition-colors">Our Partner</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Leadership</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Column 5: News */}
        <div className="col-span-1 lg:w-[15%] pl-3 lg:pl-8 flex flex-col pt-1 lg:pt-0">
          <h3 className="text-[13px] sm:text-[14px] font-bold mb-2.5 sm:mb-4 text-white">News</h3>
          <ul className="space-y-2 text-[10px] sm:text-[12px] font-regular text-white/80">
            <li><Link href="#" className="hover:text-white transition-colors">Blogs</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Press Releases</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Newsletters</Link></li>
          </ul>
        </div>

      </div>

      {/* Divider line that touches left and right edges */}
      <div className="w-full border-t border-white/10 mt-6 lg:mt-8" />

      {/* Bottom Copyright Section */}
      <div className="max-w-7xl mx-auto pt-3 text-center px-4 md:px-12 lg:px-20">
        <p className="flex items-center justify-center text-[10px] md:text-[11px] gap-2 font-light text-white/80">
          Copyright © Phoenix 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
