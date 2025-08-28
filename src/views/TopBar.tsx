import Link from "next/link";

function TopBar() {
  return (
    <header className="bg-container">
      <div className="fg-container flex items-center mx-auto h-14">
        <Link className="flex items-center justify-center" href="/">
          <span className="text-2xl font-bold">CLK Construction</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-md font-medium hover:underline underline-offset-4"
            href="/#services"
          >
            Services
          </Link>
          <Link
            className="text-md font-medium hover:underline underline-offset-4"
            href="/#about"
          >
            About Us
          </Link>
          <Link
            className="text-md font-medium hover:underline underline-offset-4"
            href="/#contact"
          >
            Contact
          </Link>
          <Link
            className="text-md font-medium hover:underline underline-offset-4"
            href="/gallery2"
          >
            Gallery
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default TopBar;
