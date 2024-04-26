import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: `url(images/ecommerce-campaign-animate.svg)`,
        backgroundSize: "auto 100%", 
        backgroundPosition: "right",
        
      }}
    >
     <img
        src="images/mobile-marketing.svg"
        alt=""
        className="absolute inset-0 w-[30%] h-full object-cover"
      />
      <div className={`${styles.section} w-[90%] 800px:w-[60%] pl-20`} >
        <h1 className={`text-[35px] pl-10 leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}>
         .  Best Collection for <br /> home Decoration
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
