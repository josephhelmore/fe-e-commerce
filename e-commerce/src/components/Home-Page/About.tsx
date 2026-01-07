export default function About() {
  return (
    <section className=" relative flex pb-10  text-white">
      <img
        src="/products/BoLagotto.jpeg"
        alt="puff the sausage"
        className="h-50 w-1/2 object-cover opacity-25"
      />
      <img
        src="/products/HarryOnBench.jpeg"
        alt="Harry on bench"
        className="h-50 w-1/2 object-cover  opacity-25"
      />
      <p className="absolute inset-0 flex items-center justify center px-50 text-center">The 'about' section can go here, overlaying the images you like the look of. It does not have to be too comprehensive, just a little insight into what the website is doing!</p>
    </section>
  );
}
