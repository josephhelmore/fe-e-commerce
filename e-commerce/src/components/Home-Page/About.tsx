export default function About() {
  return (
    <section className=" relative flex   text-white mb-20">
      <img
        src="/products/BoLagotto.jpeg"
        alt="Lagotto"
        className="h-50 w-1/2 object-cover  opacity-25"
      />
      <img
        src="/products/HarryOnBench.jpeg"
        alt="Harry on bench"
        className="h-50 w-1/2 object-cover  opacity-25"
      />
      <p className="absolute inset-0 flex items-center justify-center px-40 text-center font-['Lugrasimo'] md:px-16 lg:px-40 text-center font-['Lugrasimo']
  text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]" >
        You may notice this website has a number of pictures of dogs... The
        black Lab is named Harry, who is the inspiration for the name of the
        website. There are other dogs too, whos names will be omitted here... 👀{" "}
        <br />
        The 'about' section can go here, overlaying the images you like the look
        of. It does not have to be too comprehensive, just a little insight into
        what the website is doing!
      </p>
    </section>
  );
}
