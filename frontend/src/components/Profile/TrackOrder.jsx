import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";
import { RxCross1 } from "react-icons/rx";


const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      {" "}
      <div className="w-full h-[80vh] flex justify-center items-center shadow-lg ">
          <div className="w-[40%] 800px:w-[40%] h-[40vh] bg-white rounded-md shadow-lg p-4">
            {data && data?.status === "Processing" ? (
                <h1 className="text-[50px] flex justify-center p-12">
                Your Order is processing in shop.
              </h1>
            ) : data?.status === "Transferred to delivery partner" ? (
                <h1 className="text-[50px] flex justify-center p-12">
                Your Order is on the way for delivery partner.
              </h1>
            ) : data?.status === "Shipping" ? (
                <h1 className="text-[50px] flex justify-center p-12">
                Your Order is on the way with our delivery partner.
              </h1>
            ) : data?.status === "Received" ? (
                <h1 className="text-[50px] flex justify-center p-12">
                Your Order is in your city. Our Delivery man will deliver it.
              </h1>
            ) : data?.status === "On the way" ? (
                <h1 className="text-[50px] flex justify-center p-12">
                Our Delivery man is going to deliver your order.
              </h1>
            ) : data?.status === "Delivered" ? (
              <h1 className="text-[50px] flex justify-center p-12">
                Your order is delivered!
              </h1>
            ) : data?.status === "Processing refund" ? (
                <h1 className="text-[50px] flex justify-center p-12">
                Your refund is processing!
              </h1>
            ) : data?.status === "Refund Success" ? (
                <h1 className="text-[50px] flex justify-center p-12">
                Your Refund is success!
              </h1>
            ) : null}
          </div>
        </div>
      </div>
  );
};

export default TrackOrder;
