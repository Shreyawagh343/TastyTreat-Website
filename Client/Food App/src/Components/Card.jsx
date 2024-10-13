import React from "react";

const Card = ({item}) => {
  return (
    <>
      <div className="w-[19rem] h-[23rem]">
        <img src={item.image} alt="" className="w-[80%] h-[50%] ml-[2rem] mt-5 rounded-md" />
        <h1 className="ml-10 font-semibold text-xl mt-3">{item.name}</h1>
        <p className="ml-10 font-semibold text-[1.1rem] mt-1">{item.rating} .  <span>{item.deliveryTime}</span></p>
        <p className="ml-10 text-[1.1rem]">{item.Menu}</p>
        <p className="ml-10 text-[1.1rem]">{item.address}</p>

      </div>
    </>
  );
};

export default Card;
