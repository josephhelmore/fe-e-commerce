import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function CrimpDropdown() {
  return (
    <Menu as="div" className="relative">
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
  ">
        Crimps
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
    "      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-l text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Small Crimps
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-l text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Medium Crimps
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-l text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Large Crimps
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <a
                href="#"
              className="block px-4 py-2 text-l text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Edges
              </a>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
}
