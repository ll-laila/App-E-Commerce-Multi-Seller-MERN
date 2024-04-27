<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";


const BestDeals = () => {
  const [data, setData] = useState([]);
  const {allProducts,isLoading} = useSelector((state) => state.products);

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
    const first = sortedData && sortedData.slice(0, 5);
    setData(first);
  }, [allProducts]);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Meilleures affaires</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
=======
import React, { useEffect, useState } from "react";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { server } from "../../../server";

const BestDeals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${server}/product/get-all-products`).then((res) => {
      const sortedData = res.data.products.sort((a, b) => b.price - a.price);
      const firstFive = sortedData.slice(0, 5);
      setData(firstFive);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
>>>>>>> 70a7b4d18f820decbe5e08a8aff07762ed54d773
