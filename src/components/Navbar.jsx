import React from "react";

function Navbar() {
  return (

      <div className=" flex mx-40 p-5 justify-between items-center">
        <div className=" font-bold text-3xl"><span className="text-blue-500">Tech</span>Gear</div>
        <div>
          <ul className="flex font-bold text-base  text-zinc-400 items-center gap-10">
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>SERVICES</li>
            <li>CONTACT US</li>
            <button className="border-2 px-5 py-2 rounded-md text-sm">SIGN IN</button>
          </ul>
        </div>
      </div>

  );
}

export default Navbar;
