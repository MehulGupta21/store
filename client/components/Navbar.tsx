import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white w-full border-b border-[#e8c1a9]">
      <div className="max-w-7xl mx-auto px-4 py-4">

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-3 items-center">
          
          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="logo"
              width={120}
              height={120}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Buttons - Center */}
         <div className="flex justify-center gap-8">
            <Link href="/" className="nav-btn">Home</Link>
            <Link href="/shop" className="nav-btn">Shop</Link>
            <Link href="/Design" className="nav-btn">Design</Link>
            <Link href="/Studio" className="nav-btn">Studio</Link>
         </div>


          {/* Spacer */}
          <div />
        </div>

        {/* MOBILE */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          
          {/* Logo */}
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={120}
            height={120}
            className="h-20 w-auto object-contain"
            priority
          />

          {/* Pills - ONE ROW */}
          <div className="flex gap-4">
            <Link href="/" className="nav-btn">Home</Link>
            <Link href="/shop" className="nav-btn">Shop</Link>
            <Link href="/Design" className="nav-btn">Design</Link>
            <Link href="/Studio" className="nav-btn">Studio</Link>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
