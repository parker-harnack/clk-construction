import React from "react";
import Link from "next/link";

interface MenuButtonProps {
  options: { label: string; href: string }[];
}

const MenuButton: React.FC<MenuButtonProps> = ({ options }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative inline-block text-left">
      <button
        className="px-4 py-2 bg-primary text-white rounded shadow hover:bg-primary-dark focus:outline-none"
        onClick={() => setOpen((o) => !o)}
      >
        Menu
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
          {options.map((opt) => (
            <Link key={opt.href} href={opt.href} legacyBehavior>
              <a
                className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                onClick={() => setOpen(false)}
              >
                {opt.label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuButton;
