import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-[#0954a0] text-white pt-6 md:pt-8 pb-4 w-full"
      style={{ fontFamily: "'Neurial Grotesk', sans-serif" }}
    >

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-0 px-6 md:px-12 lg:px-24">

        {/* Column 1: Logo, Tagline, Follow Us */}
        <div className="w-full lg:w-[26%] lg:pl-6 lg:pr-8 lg:border-r lg:border-white/10 flex flex-col">
          <div className="-mt-3 lg:-mt-6">
            <div className="mb-2">
              <Image
                src="/footer/footer-logo-motors.png"
                alt="Phoenix Logo"
                width={350}
                height={110}
                className="h-[70px] w-auto object-contain"
              />
            </div>
            <p className="text-[10px] font-normal text-white/60 leading-relaxed max-w-[215px]">
              Phoenix Foundation is dedicated to creating lasting social impact through meaningful initiatives.
            </p>
          </div>

          <div className="mt-10">
            <h4 className="text-[14px] font-medium mb-2 text-[#F0E7E7]">Follow Us</h4>
            <div className="flex items-center gap-3">
             <span className="inline-block transition-opacity">
  <Image
    src="/footer/footer-fb.png"
    alt="Facebook"
    width={20}
    height={20}
    className="w-5 h-5 object-contain brightness-0 invert"
  />
</span>

             <span className="inline-block transition-opacity">
  <Image
    src="/footer/footer-insta.png"
    alt="Instagram"
    width={20}
    height={20}
    className="w-5 h-5 object-contain brightness-0 invert"
  />
</span>

             <span className="inline-block hover:opacity-80 transition-opacity">
  <Image 
    src="/footer/footer-ln.png" 
    alt="LinkedIn" 
    width={20} 
    height={20} 
    className="w-5 h-5 object-contain brightness-0 invert" 
  />
</span>
            </div>
          </div>
        </div>

        {/* Column 2: Address */}
        <div className="w-full lg:w-[24%] lg:px-8 lg:border-r lg:border-white/10 flex flex-col">
          <h3 className="text-[14px] font-bold mb-4 text-white">Address</h3>
          <div className="flex items-center gap-1.5 mb-1 text-[14px] font-Medium text-white/10">
            <Image
              src="/footer/location.png"
              alt="Location"
              width={16}
              height={16}
              className="w-3 h-3 shrink-0 object-contain brightness-0 invert "
            />
            <span>Location</span>
          </div>
          <div className="text-[10px] font-normal text-white leading-relaxed whitespace-nowrap">
            <p>Nagarjuna Residency Driveway,</p>
            <p>Diamond Hills, Lumbini</p>
            <p>Avenue, Gachibowli,</p>
            <p>Hyderabad, Telangana 500081</p>
          </div>
        </div>

        {/* Column 3: Contact US */}
        <div className="w-full lg:w-[20%] lg:px-6 lg:border-r lg:border-white/10 flex flex-col">
          <h3 className="text-[14px] font-bold mb-4 text-white/10">Contact Us</h3>
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 text-[14px] font-Medium text-white whitespace-nowrap">
              <Image
                src="/footer/phone.png"
                alt="Phone"
                width={16}
                height={16}
                className="w-4 h-4 shrink-0 object-contain brightness-0 invert"
              />
              <span>040-2222 5555/6666/7777</span>
            </div>
            <div className="flex items-center gap-2.5 text-[10px] font-normal text-white whitespace-nowrap">
              <Image
                src="/footer/email.png"
                alt="Email"
                width={16}
                height={16}
                className="w-4 h-4 shrink-0 object-contain brightness-0 invert"
              />
              <p>
                info@phoenixindia.net
              </p>
            </div>
          </div>
        </div>

        {/* Column 4: About US */}
        <div className="w-full lg:w-[15%] lg:px-8 lg:border-r lg:border-white/10 flex flex-col">
          <h3 className="text-[14px] font-bold mb-4 text-white">About Us</h3>
          <ul className="space-y-2.5 text-[14px] font-Medium text-white/10">
            <li>Our Partner</li>
            <li>Leadership</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Column 5: News */}
        <div className="w-full lg:w-[15%] lg:pl-8 flex flex-col">
          <h3 className="text-[14px] font-bold mb-4 text-white">News</h3>
          <ul className="space-y-2.5 text-[14px] font-Medium text-white/10">
            <li>Blogs</li>
            <li>Press Releases</li>
            <li>Newsletters</li>
          </ul>
        </div>

      </div>

      {/* Divider line that touches left and right edges */}
      <div className="w-full border-t border-white/10 mt-8" />

      {/* Bottom Copyright Section */}
      <div className="max-w-7xl mx-auto pt-3 text-center px-4 md:px-12 lg:px-20">
        <p className="flex items-center justify-center text-[10px] gap-2 font-light text-white">
          Copyright © Phoenix 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
