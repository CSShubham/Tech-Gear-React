import React from "react";

function Cards({ img, services }) {
  // console.log(props);
  return (
    <>
      <div className=" relative bg-[#393939] flex flex-row-reverse h-40 w-md rounded-xl  py-3">
        <img 
        className="absolute h-35 w-35 left-4 bottom-9"
        src={img}
        alt={services} 
        />
        <div className="flex flex-col w-70 gap-3">
          <p className="text-xl">
          {services}
          </p>
          <p className="text-xs text-zinc-400 pr-10  text-justify tracking-tight [word-spacing:-2px] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam id
            ab dolore tenetur exercitationem perferendis fugit inventore! At,
            repudiandae ex iusto autem iure laudantium hic animi laboriosam ad
            esse illum!
          </p>
        </div>
      </div>
    </>
  );
}

export default Cards;
