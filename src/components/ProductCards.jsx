import React from "react";

function ProductCards({img,name}) {
  return (
    <>
      <div className="flex flex-col relative">
        <img
          className="absolute left-5 bottom-20 text-2xl"
          src={img}
          alt="productPic"
        />
        <div className="h-70 w-90 flex justify-center items-end p-15 rounded-xl bg-[#393939] ">
          <span className="  font-bold text-xl ">{name}</span>
        </div>
      </div>
    </>
  );
}

export default ProductCards;
