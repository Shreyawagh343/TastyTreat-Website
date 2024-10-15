import React, { useState } from "react";
import { motion } from "framer-motion";
import List from "../../public/list.json";
import Card from "./Card";

const DeliveryCard = () => {
  const [sort, setsort] = useState(false);
  const [rating, setrating] = useState(false);
  const [del, setdel] = useState(false);
  const [veg, setveg] = useState(false);
  const [showRating3, setshowRating3] = useState(false);
  const [showRating4, setshowRating4] = useState(false);
  const [showRating5, setshowRating5] = useState(false);
  const [Veg, setVeg] = useState(false);
  const [nonVeg, setnonVeg] = useState(false);
  const [defaultList, setdefaultList] = useState(true);
  const [defaultMenu, setdefaultMenu] = useState(true);

  const showRatingFunct = () => {
    const ratingComponent = document.querySelector(".rating1");
    ratingComponent.addEventListener("click", () => {
      setshowRating3(true);
      setshowRating4(false);
      setshowRating5(false);
      setdefaultMenu(false);
    });
  };
  const showRatingFunct1 = () => {
    const ratingComponent = document.querySelector(".rating2");
    ratingComponent.addEventListener("click", () => {
      setshowRating3(false);
      setshowRating4(true);
      setshowRating5(false);
      setdefaultMenu(false);
    });
  };
  const showRatingFunct2 = () => {
    const ratingComponent = document.querySelector(".rating3");
    ratingComponent.addEventListener("click", () => {
      setshowRating3(false);
      setshowRating4(false);
      setshowRating5(true);
      setdefaultMenu(false);
    });
  };
  const showVeg = () => {
    const ratingComponent = document.querySelector(".veg");
    ratingComponent.addEventListener("click", () => {
      setVeg(true);
      setnonVeg(false);
    });
  };
  const showNonVeg = () => {
    const ratingComponent = document.querySelector(".nonVeg");
    ratingComponent.addEventListener("click", () => {
      setVeg(false);
      setnonVeg(true);
      setdefaultMenu(false);
    });
  };
  const sorthandle = () => {
    const sortComponent = document.querySelector(".sort");
    sortComponent.addEventListener("click", () => {
      setsort(true);
      setrating(false);
      setdel(false);
      setveg(false);
      setdefaultList(false);
    });
  };

  const rathandle = () => {
    const rating = document.querySelector(".rating");
    rating.addEventListener("click", () => {
      setrating(true);
      setsort(false);
      setdel(false);
      setveg(false);
      setdefaultList(false);
    });
  };

  const delhandle = () => {
    const delComponent = document.querySelector(".del");
    delComponent.addEventListener("click", () => {
      setdel(true);
      setsort(false);
      setrating(false);
      setveg(false);
      setdefaultList(false);
    });
  };
  const veghandle = () => {
    const vegComponent = document.querySelector(".veg");
    vegComponent.addEventListener("click", () => {
      setveg(true);
      setsort(false);
      setrating(false);
      setdel(false);
      setdefaultList(false);
    });
  };
  const fliterRating = List.filter((data) => data.rating > 3.5);
  const fliterRating1 = List.filter((data) => data.rating > 4);
  const fliterRating2 = List.filter((data) => data.rating > 4.5);
  const fliterVeg = List.filter((data) => data.category === "Veg");
  const fliterNonVeg = List.filter((data) => data.category === "Non-Veg");




  return (
    <>
      <div className="">
        <motion.h1
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            delay: 0.6,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "ease-out",
            duration: 1,
          }}
          className="text-[1.7rem] ml-[3rem] md:ml-[10rem] font-bold mt-10"
        >
          Restaurants with online food delivery
        </motion.h1>

        <div className="flex mt-5">
          <div className="md:ml-[10rem] ">
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-2xl">Filter</h3>
                <br />
                <div className="flex">
                  <div className="cursor-pointer">
                    <li className="list-none text-xl font-semibold">
                      <p
                        className="sort"
                        onClick={(e) => {
                          e.persist();
                          sorthandle();
                        }}
                      >
                        Relevance (Sort)
                      </p>
                    </li>
                    <li className="list-none text-xl mt-2 font-semibold">
                      <p
                        className="rating"
                        onClick={(e) => {
                          e.persist();
                          rathandle();
                        }}
                      >
                        Rating
                      </p>
                    </li>
                    <li className="del list-none text-xl mt-2 font-semibold">
                      <p
                        className="del"
                        onClick={(e) => {
                          e.persist();
                          delhandle();
                        }}
                      >
                        Delivery Time
                      </p>
                    </li>
                    <li
                      className="veg list-none text-xl mt-2 font-semibold"
                      onClick={(e) => {
                        e.persist();
                        veghandle();
                      }}
                    >
                      Veg/Non-Veg
                    </li>
                  </div>
                  <div className="ml-10 bg-slate-100 pt-5  pl-10 pr-20 pb-10 ">
                    <div className={`${defaultList ? "block" : "hidden"}`}>
                      <li className="list-none">
                        <a className="text-[1.2rem] flex">
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                            />
                          </span>
                          Relevance(Default)
                        </a>
                      </li>
                      <li className="list-none">
                        <a className="text-[1.2rem] flex">
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                            />
                          </span>
                          Delivery Time
                        </a>
                      </li>
                      <li className="list-none">
                        <a className="text-[1.2rem] flex">
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                            />
                          </span>
                          Rating
                        </a>
                      </li>
                      <li className="list-none">
                        <a className="text-[1.2rem] flex">
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                            />
                          </span>
                          Cost:Low to High
                        </a>
                      </li>
                      <li className="list-none">
                        <a className="text-[1.2rem] flex">
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                            />
                          </span>
                          Cost:High to Low
                        </a>
                      </li>
                    </div>
                    <div className={`${sort ? "block" : "hidden"}`}>
                      <li className="list-none">
                        <a className="text-[1.2rem] flex">
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                            />
                          </span>
                          Relevance(Default)
                        </a>
                      </li>
                      <li className="list-none">
                        <a className="text-[1.2rem] flex">
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                            />
                          </span>
                          Delivery Time
                        </a>
                      </li>
                      <li className="list-none">
                        <a className="text-[1.2rem] flex">
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                            />
                          </span>
                          Rating
                        </a>
                      </li>
                      <li className="list-none">
                        <a className="text-[1.2rem] flex">
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                            />
                          </span>
                          Cost:Low to High
                        </a>
                      </li>
                      <li className="list-none">
                        <a className="text-[1.2rem] flex">
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                            />
                          </span>
                          Cost:High to Low
                        </a>
                      </li>
                    </div>
                    <div className={`${rating ? "block" : "hidden"}`}>
                      <li className="list-none">
                        <a className="rating3 text-[1.2rem] flex">
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                              onClick={showRatingFunct2}
                            />
                          </span>
                          4.5+ Rating
                        </a>
                      </li>
                      <li className="list-none">
                        <a
                          className="rating2 text-[1.2rem] flex"
                          onClick={showRatingFunct1}
                        >
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                            />
                          </span>
                          4.0+ Rating
                        </a>
                      </li>
                      <li className="list-none">
                        <a className="rating1 text-[1.2rem] flex">
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                              onClick={showRatingFunct}
                            />
                          </span>
                          3.5+ Rating
                        </a>
                      </li>
                    </div>
                    <div className={`${del ? "block" : "hidden"}`}>
                      <li className="list-none">
                        <a className="text-[1.2rem] flex">
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                            />
                          </span>
                          Fast Delivery
                        </a>
                      </li>
                    </div>
                    <div className={`${veg ? "block" : "hidden"}`}>
                      <li className="list-none">
                        <a className="veg text-[1.2rem] flex">
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                              onClick={showVeg}
                            />
                          </span>
                          Veg
                        </a>
                      </li>
                      <li className="list-none">
                        <a className="nonVeg text-[1.2rem] flex">
                          <span>
                            <input
                              type="radio"
                              name="default"
                              id="default"
                              className="mr-6"
                              onClick={showNonVeg}
                            />
                          </span>
                          Non-Veg
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Filter
            </button>
          </div>
          <div className="dropdown dropdown-bottom ml-4">
            <div tabIndex={0} role="button" className="btn">
              Sort By
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[10] w-52 p-2 shadow"
            >
              <li>
                <a className="text-[1rem]">
                  Relevance(Default){" "}
                  <span>
                    <input
                      type="radio"
                      name="default"
                      id="default"
                      className="ml-3"
                    />
                  </span>{" "}
                </a>
              </li>
              <li>
                <a className="text-[1rem]">
                  Delivery Time{" "}
                  <span>
                    <input
                      type="radio"
                      name="default"
                      id="default"
                      className="ml-[2.7rem]"
                    />
                  </span>{" "}
                </a>
              </li>
              <li>
                <a className="text-[1rem]">
                  Rating{" "}
                  <span>
                    <input
                      type="radio"
                      name="default"
                      id="default"
                      className="ml-[5.7rem]"
                    />
                  </span>{" "}
                </a>
              </li>
              <li>
                <a className="text-[1rem]">
                  Cost:Low to High{" "}
                  <span>
                    <input
                      type="radio"
                      name="default"
                      id="default"
                      className="ml-5"
                    />
                  </span>{" "}
                </a>
              </li>
              <li>
                <a className="text-[1rem]">
                  Cost:High to low{" "}
                  <span>
                    <input
                      type="radio"
                      name="default"
                      id="default"
                      className="ml-6"
                    />
                  </span>{" "}
                </a>
              </li>
            </ul>
          </div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "ease-out",
              duration: 1,
            }}
            className=""
          >
            <div role="button" className="btn ml-4 ">
              Fast Delivery
            </div>
            <div role="button" className="btn ml-4 ">
              Rating
            </div>
            <div role="button" className=" btn ml-4 ">
              Veg
            </div>
            <div role="button" className="btn ml-4 ">
              Non-veg
            </div>
          </motion.div>
        </div>
        <div
          className={`${
            defaultMenu ? "block" : "hidden"
          } flex gap-9 ml-24 mt-10 flex-wrap`}
        >
         {fliterRating1.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
        <div
          className={`${
            showRating3 ? "block" : "hidden"
          } flex gap-9 ml-24 mt-10 flex-wrap`}
        >
          {fliterRating.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
        <div
          className={`${
            showRating4 ? "block" : "hidden"
          } flex gap-9 ml-24 mt-10 flex-wrap`}
        >
          {fliterRating1.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
        <div
          className={`${
            showRating5 ? "block" : "hidden"
          } flex gap-9 ml-24 mt-10 flex-wrap`}
        >
          {fliterRating2.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
        <div
          className={`${
            Veg ? "block" : "hidden"
          } flex gap-9 ml-24 mt-10 flex-wrap`}
        >
          {fliterVeg.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
        <div
          className={`${
            nonVeg ? "block" : "hidden"
          } flex gap-9 ml-24 mt-10 flex-wrap`}
        >
          {fliterNonVeg.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DeliveryCard;
