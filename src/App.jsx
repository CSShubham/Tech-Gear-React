import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductCards from "./components/ProductCards";
import Cards from "./components/Cards";
import myImg from "./assets/download.png";
function App() {
  // const [count, setCount] = useState(0);
  // const obj={
  //   username:"shubham",
  //   techstack:"mernstack"
  // }

  return (
    <div className="h-screen w-full">
      <Navbar />
      <Home />
      <Product
        headingName="PRODUCTS"
        disc="Which type of Gear Are you Looking for ?"
      />
      <div className="flex p-10 mt-10 mb-15 justify-center items-center gap-10">
        <ProductCards
          img="https://techgear.netlify.app/static/media/gaming.c3726dc2.png"
          name="Gaming"
        />
        <ProductCards
          img="https://techgear.netlify.app/static/media/office.f4ec2462.png"
          name="Office "
        />
        <ProductCards img={myImg} name="Graphic Design" />
      </div>
      <Product
        headingName="SERVICES"
        disc="We Provide More Than High-tech Products"
      />
      <div className="flex flex-wrap w-[80vw] ml-35 justify-center items-center gap-8 p-10 mb-20">
        <Cards img='/lifetime.png' services='Lifetime Guarantee' />
        <Cards img='/goodprice.png' services='Good price' />
        <Cards img='/freesoftware.png' services='Free Software Updates' />
        <Cards img='/support.png' services='24/7 Support' />
      </div>
      <Product
        headingName="MEMBERS"
        disc="We proudly introduce our powerful members"
      />
    </div>
  );
}

export default App;
