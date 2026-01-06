import { useEffect, useState } from "react";

interface ProductCardProps {
  image: string;
  description: string;
  delay?: number;
}

export default function ProductCard({ image, description, delay = 500 }: ProductCardProps) {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setVisible(true), delay);
  }, [delay]);

  return (
    <div
      className={`
        w-full flex flex-row rounded-2xl border-gray-500 transition-opacity duration-700 bg-black
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="relative">
        <img
          src={image}
          alt="Product"
          className="block rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/100 to-transparent" />
      </div>
      <p className="pl-50 font-['Lugrasimo'] text-m text-left max-w-1/2 leading-8 pt-10 text-white">
        {description}
      </p>
    </div>
  );
}