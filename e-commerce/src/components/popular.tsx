import ProductCard from "./ProductCard";
import articlepic from "./article.jpeg";

const products = [
  {
    image: articlepic,
    description: "This is where the description of an item to sell goes. The description can include the cost of the product, the weight, dimentions and other things to do with the product.",
    delay: 500
  },
  {
    image: articlepic,
    description: "This is where the description of an item to sell goes. The description can include the cost of the product, the weight, dimentions and other things to do with the product.",
    delay: 700
  }
];

export default function Article() {
  return (
    <>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          description={product.description}
          delay={product.delay}
        />
      ))}
    </>
  );
}