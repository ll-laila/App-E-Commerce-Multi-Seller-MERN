<<<<<<< HEAD
import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import BestEvent from "../components/Events/BestEvent";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
//import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />  
      <BestEvent />
      <FeaturedProduct />
      {/*<Sponsored />*/}
      <Footer />
    </div>
  )
}

=======
import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import BestEvent from "../components/Events/BestEvent";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />  
      <BestEvent />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </div>
  )
}

>>>>>>> 70a7b4d18f820decbe5e08a8aff07762ed54d773
export default HomePage