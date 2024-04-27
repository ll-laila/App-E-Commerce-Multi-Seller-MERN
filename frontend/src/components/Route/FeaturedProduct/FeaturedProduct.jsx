<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { server } from "../../../server";

const FeaturedProduct = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get(`${server}/product/get-all-products`)
      .then((res) => {
        setAllProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let sortedData = [...allProducts];
    sortedData.sort((a, b) => b.discountPrice - a.discountPrice); 
    setData(sortedData.slice(0, 10)); // Affichage des 10 premiers produits
  }, [allProducts]);

  const goToPreviousProducts = () => {
    setCurrentIndex(currentIndex - 5 >= 0 ? currentIndex - 5 : data.length - 4);
  };

  const goToNextProducts = () => {
    setCurrentIndex(currentIndex + 5 < data.length ? currentIndex + 5 : 0);
  };

  return (  
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Produits populaires</h1>
        </div>
        <div className="grid grid-cols-5 gap-[20px] md:grid-cols-5 md:gap-[25px] lg:grid-cols-5 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
           {data.length > 0 && (
             <>
               {data.slice(currentIndex, currentIndex + 5).map((product, index) => (
                 <div key={index}>
                   <ProductCard data={product} />
                 </div>
               ))}

               <div className="col-span-5 flex justify-center">
                 <button onClick={goToPreviousProducts} className="bg-gray-200 px-3 py-1 rounded-md mr-2">
                   &lt; Précédent
                 </button>
                 <button onClick={goToNextProducts} className="bg-gray-200 px-3 py-1 rounded-md ml-2">
                 Suivant &gt;
                 </button>
               </div>
        
             </>
           )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
=======
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
>>>>>>> 70a7b4d18f820decbe5e08a8aff07762ed54d773
