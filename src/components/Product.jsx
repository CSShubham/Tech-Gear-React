import React from "react";


function Product({headingName,disc}) {
  return (
    <div>
      <div className=" h-50  border-0 px-10 py-10 flex flex-col justify-center items-center">
        <p className="text-7xl font-normal leading-7 text-blue-400 opacity-30 tracking-tight">
          {headingName}
        </p>
        <p className="text-3xl  bottom-12 tracking-tighter">
          {disc}
        </p>
        <p className="text-md text-blue-500 mt-4 bottom-12 tracking-tighter flex items-center gap-2">
          View More <span className="text-2xl">&#8594;</span>
        </p>
      </div>
      
    </div>
  );
}

export default Product;
