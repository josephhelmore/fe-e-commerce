interface NavigationItemProps {
  href: string;
  children: React.ReactNode;
}

export default function NavigationItem({
  href,
  children,
}: NavigationItemProps) {
  return (
    <div className="relative flex-1 text-center">
      <a
        href={href}
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
        {children}
      </a>
    </div>
  );
}
