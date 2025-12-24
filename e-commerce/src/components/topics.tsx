import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

let topics = ["Crimps", "Jugs", "Slopers", "Pinches", "Pockets", "Foot Holds"];

export default function Topics() {
  return (
    <section className="flex font-['Lugrasimo'] text-l  px-5 pb-20 rounded-xl font ">
      {topics.map((topic) => {
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
              {topic}
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
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-l text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Small {topic}
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-l text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Medium {topic}
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-l text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Large {topic}
                  </a>
                </MenuItem>
                <form action="#" method="POST">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-l text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Mega {topic}
                    </a>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </Menu>
        );
      })}
    </section>
  );
}

/*

export default function Topics() {
  return (
    <section className="flex font-['Tangerine'] text-2xl  px-5 rounded-xl font">
      <div className="flex-1 text-center">
        <CrimpDropdown />
      </div>

      <div className="flex-1 text-center">
        <JugsDropdown />
      </div>
      <div className="flex-1 text-center">
        <SlopersDropdown />
      </div>
      <div className="flex-1 text-center">
        <PinchesDropdown />
      </div>
      <div className="flex-1 text-center">
        <PocketsDropdown />
      </div>
    </section>
  );
}
*/
