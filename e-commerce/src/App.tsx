import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Home-Page/header";
import Topics from "./components/topics";
import Product from "./components/products";

function App() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 0);
  }, []);

  return (
    <section
      className={`transition-opacity duration-1500 ${
        visible ? "opacity-100" : "opacity-0"
      } text-center justify-self-center p-10 mt-5  mx-auto bg-black text-white`}
    >
      <div>
        <Header />
      </div>
      <div className="sticky top-0 z-50 bg-black">
        <Topics />
      </div>
      <div>
        <Product />
      </div>
    </section>
  );
}

export default App;
