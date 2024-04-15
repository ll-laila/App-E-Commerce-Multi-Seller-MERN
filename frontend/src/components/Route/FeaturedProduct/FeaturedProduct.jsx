import React from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { server,backend_url } from "../../../server";


const FeaturedProduct = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${server}/product/get-all-products`).then((res) => {
        setData(res.data.products);
    }).catch((err) => {
      console.log(err);
    })
  }, []);
   
  return (  
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {/*
          products && products.length !== 0 &&(
              <>
               {products && products.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
           */}

           {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
