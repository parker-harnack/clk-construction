import Link from "next/link";
import { useState } from "react"; // Step 1: Import useState

function TopBar() {
  // Step 1: Add state to manage the mobile menu's open/closed status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-container sticky top-0 z-50">
      {/* Increased the main container's padding on mobile (px-4) */}
      <div className="fg-container flex items-center justify-between mx-auto h-14 px-4 md:px-0">
        <Link
          className="flex items-center justify-center"
          href="/"
          onClick={() => setIsMenuOpen(false)} // Close menu on logo click
        >
          <span className="text-2xl font-bold">CLK Construction</span>
        </Link>

        {/* Step 2: Hamburger Menu Button (Visible on Mobile) */}
        <button
          className="md:hidden p-2" // Only show on screens smaller than 'md'
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle state on click
          aria-label="Toggle menu"
        >
          {/* This is a simple SVG for the hamburger/close icon */}
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Step 3: Navigation Links (Visible on Desktop) */}
        <nav className="hidden md:flex gap-4 sm:gap-6">
          {/* This nav is hidden on mobile and flex on medium screens and up */}
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

      {/* Mobile Menu Dropdown */}
      {/* This block is conditionally rendered based on the isMenuOpen state */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 py-4 bg-container">
          <Link
            className="text-md font-medium hover:underline underline-offset-4"
            href="/#services"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Services
          </Link>
          <Link
            className="text-md font-medium hover:underline underline-offset-4"
            href="/#about"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            About Us
          </Link>
          <Link
            className="text-md font-medium hover:underline underline-offset-4"
            href="/#contact"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Contact
          </Link>
          <Link
            className="text-md font-medium hover:underline underline-offset-4"
            href="/gallery2"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Gallery
          </Link>
        </nav>
      )}
    </header>
  );
}

export default TopBar;
