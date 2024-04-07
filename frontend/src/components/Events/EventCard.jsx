import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";


const EventCard = ({active}) => {


  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
        } lg:flex p-2`}
      >
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>IPhone 12</h2>
        <p>Le lorem ipsum est, en imprimerie, une suite de mots sans 
        signification utilisée à titre provisoire pour calibrer une mise en 
        page, le texte définitif venant remplacer le faux-texte dès qu'il est 
        prêt ou que la mise en page est achevée. Généralement, on utilise un
        texte en faux latin, le Lorem ipsum ou Lipsum
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              900$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              200$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            49 sold
          </span>
        </div>
        <CountDown />
        <br />
        <div className="flex items-center">
          <Link to="">
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div className={`${styles.button} text-[#fff] ml-5`} onClick={""}>Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
