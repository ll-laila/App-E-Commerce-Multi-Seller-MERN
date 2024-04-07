import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Store from "./redux/store";
import { loadUser, loadSeller} from "./redux/actions/user";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
} from "./routes/Routes.js";
import ProtectedRoute from "./routes/ProtectedRoute.js";
import SellerProtectedRoute from "./routes/SellerProtectedRoute.js";
import {ShopHomePage,
  ShopDashboardPage,
  ShopCreateProduct,
} from "./routes/ShopRoutes.js"; 



const App = () => {
  
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);

  return (
 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
            <Route
              path="/seller/activation/:activation_token"
              element={<SellerActivationPage />}
            />
            <Route path="/product/:name" element={<ProductDetailsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/profile" element={
                <ProtectedRoute>
                  <ProfilePage/>
                </ProtectedRoute>
            } />
           
            {/* shop Routes */}
            <Route path="/shop-create" element={<ShopCreatePage />} />
            <Route path="/shop-login" element={<ShopLoginPage />} />
            <Route
              path="/shop/:id"
              element={
                <SellerProtectedRoute>
                  <ShopHomePage />
                </SellerProtectedRoute>
              }
            />
              <Route
              path="/dashboard"
              element={
                <SellerProtectedRoute>
                  <ShopDashboardPage />
                </SellerProtectedRoute>
              }
            />
            <Route
              path="/dashboard-create-product"
              element={
                <SellerProtectedRoute>
                  <ShopCreateProduct />
                </SellerProtectedRoute>
              }
        />
          </Routes>
        </BrowserRouter>
   
  );
};

export default App;
