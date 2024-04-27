import React from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FiPackage, FiShoppingBag } from 'react-icons/fi'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
    const {user} = useSelector((state) => state.user);

  return (
         <div className="w-full h-[80px] bg-white shadow-lg sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
      <Link to="/">
              <img
                className="absolute top-4 left-38"
                width="56"
                height="56"
                src="https://img.icons8.com/external-jumpicon-line-gradient-ayub-irawan/32/external-E-commerce-digital-marketing-jumpicon-(line-gradient)-jumpicon-line-gradient-ayub-irawan.png"
                alt="external-E-commerce-digital-marketing-jumpicon-(line-gradient)-jumpicon-line-gradient-ayub-irawan"
              />
              
              <button className="pl-14 text-[#9e1ad75f] text-2xl font-[800]  ">
                E-Shop
              </button>
            </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
            <img
              src={`${user?.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
        </div>
      </div>
    </div>
  )
}

export default AdminHeader