<<<<<<< HEAD
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopLogin from "../components/Shop/ShopLogin";

const ShopLoginPage = () => {

  const navigate = useNavigate();
  const { isSeller,isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate("/dashboard");
    }
  }, [isLoading,isSeller])

  return (
    <div>
        <ShopLogin />
    </div>
  )
}

=======
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopLogin from "../components/Shop/ShopLogin";

const ShopLoginPage = () => {

  const navigate = useNavigate();
  const { isSeller,isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      //navigate(`/shop/${seller._id}`);
      navigate("/dashboard");
    }
  }, [isLoading,isSeller])

  return (
    <div>
        <ShopLogin />
    </div>
  )
}

>>>>>>> 70a7b4d18f820decbe5e08a8aff07762ed54d773
export default ShopLoginPage