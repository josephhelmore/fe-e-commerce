import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

interface DropdownProps {
  title: string;
  items: string[];
}

export default function Dropdown({ title, items }: DropdownProps) {
  return (
    <Menu as="div" className="relative flex-1 text-center">
      <MenuButton
        className="
          w-full
          flex
          items-center
          justify-center
          rounded-md
          hover:bg-gray-800
          transition-colors
          focus:outline-none
        "
      >
        {title}
      </MenuButton>
      <MenuItems
        transition
        className="
          absolute left-0 top-full z-10
          w-full
          origin-top
          rounded-md
          bg-white
          shadow-lg
          mt-1
          outline-1 outline-black/5
          transition
          data-closed:scale-95
          data-closed:opacity-0
          data-enter:duration-100
          data-enter:ease-out
          data-leave:duration-75
          data-leave:ease-in
        "
      >
        <div className="py-1">
          {items.map((item) => (
            <MenuItem key={item}>
              <a
                href="#"
                className="block px-4 py-2 text-l text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                {item}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}