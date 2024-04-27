import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import { server } from "../server";
import axios from "axios";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get(`${server}/product/get-all-products`).then((res) => {
      setAllProducts(res.data.products);
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  
  useEffect(() => {
    if (categoryData === null) {
      const d = allProducts && allProducts.sort((a, b) => a.sold_out - b.sold_out);
      setData(d);
    } else {
      const d =
      allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
    }
   
  }, [allProducts]);

  return (
      <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
          Aucun produit trouvé !
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
 
  );
};

export default ProductsPage;
