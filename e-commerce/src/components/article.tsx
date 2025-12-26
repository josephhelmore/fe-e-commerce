import { useEffect, useState } from "react";
import articlepic from "./article.jpeg";

export default function Article() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 500);
  }, []);

  return (
    <div
      className={`
        w-full flex flex-row  rounded-2xl border-gray-500 transition-opacity duration-700
        ${visible ? "opacity-100" : "opacity-0"}
       "w-full flex flex-row"`}
    >
      <div className="relative ">
        <img
          src={articlepic}
          alt="A picture of Harry"
          className="block rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/100 to-transparent " />
      </div>
      <p className="pl-50 font-['Lugrasimo'] text-m text-left max-w-1/2 leading-8 pt-10">
        This is where the description of an item to sell goes. The description
        can include the cost of the product, the weight, dimentions and other
        things to do with the product.
      </p>
    </div>
  );
}

// add this comment 
