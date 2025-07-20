import React from "react";
// import mouse from '../assets/mouse.png'
function Home() {
  return (
    <div className=" flex justify-between ml-35 mb-15 mr-10  gap-10 ">
      <div className="mt-30 w-350 p-5 tracking-wide">
        <p className=" text-5xl font-bold">G502 Hero Wireless</p>
        <br />
        <p className="text-2xl/7 text-zinc-500">
          Logitech's High Performance Wireless Gaming Mouse
        </p>
        <br />
        <p>
          The Razer Ouroboros is outfitted with the most advanced & configurable
          sensor yet, the all-new 8200dpi 4G laser sensor. It tracks so
          precisely, you always hit targets exactly where you need to.
        </p>
        <br />
        <p className="text-xl text-blue-500 font-semibold">USD 99.99</p>
        <br />
        <div className="flex gap-6 text-base font-semibold">
          <button className="border-0 flex justify-center items-center gap-2 bg-blue-600 rounded-lg h-12 w-40">
            <img className="h-6 w-6" src="/add-to-cart.png" alt="favicon" />
            ADD TO CART
          </button>
          <button className="border-2 rounded-lg h-12 w-40">
            MORE DETAILS
          </button>
        </div>
      </div>
      <div className=" w-[90vw]">
        <img
          className="drop-shadow-lg rounded-md"
          src="https://resource.logitech.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-1.png"
          alt="mouse"
        />
      </div>
    </div>
  );
}

export default Home;
