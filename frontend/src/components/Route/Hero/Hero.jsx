import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat shadow-lg ${styles.noramlFlex}`}
      style={{
        backgroundImage: `url(images/ecommerce-campaign-animate.svg)`,
        backgroundSize: "auto 100%", 
        backgroundPosition: "right",
        
      }}
    >
     <img
        src="images/mobile-marketing.svg"
        alt=""
        className="absolute inset-0 w-[30%] h-full object-cover "
      />
      <div className={`${styles.section} w-[90%] 800px:w-[60%] pl-20`} >
        <h1 className={`text-[35px] pl-10 leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}>
         . Profitez d'un choix <br />illimité de produits. 
        </h1>
        <p className="p-3">
             Découvrez une variété impressionnante de produits provenantde vendeurs 
             de confiance  <br />sur notre plateforme. Explorez, trouvez et achetez en toute 
            simplicité, tout est là, à portée de clic<br />
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} bg-[#dea23b] mt-5 shadow-lg `}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Explorer 
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
