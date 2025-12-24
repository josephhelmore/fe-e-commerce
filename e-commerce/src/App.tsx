import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Topics from "./components/topics";
import Article from "./components/article";

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
      
        <Topics />
      <Article/>
    </section>
  );
}

export default App;
