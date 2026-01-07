export default function Header() {
  return (
    <header className="flex items-center gap-4 mb-10 max-h-20 justify-center">
      <img
        src="/products/HarryPortrait.jpeg"
        alt="A picture of Harry"
        className="h-20 w-20 object-cover rounded-full"
      />
      <h1 className='font-["Tangerine"] text-6xl'>
        Harry's Holds
      </h1>
    </header>
  );
}
