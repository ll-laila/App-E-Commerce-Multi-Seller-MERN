import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../static/data";
import axios from "axios";
import { server } from "../../server";



const CreateProduct = () => {

  const { seller } = useSelector((state) => state.seller);
  const navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();


  const handleSubmit = async (e) => {
      e.preventDefault();
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const newForm = new FormData();
      images.forEach((image) => {
        newForm.append("images", image);
      });
      newForm.append("name", name);
      newForm.append("description", description);
      newForm.append("category", category);
      newForm.append("tags", tags);
      newForm.append("originalPrice", originalPrice);
      newForm.append("discountPrice", discountPrice);
      newForm.append("stock", stock);
      newForm.append("shopId",seller._id);


      axios.post(`${server}/product/create-product`, newForm,config
      ).then((res) => {
         alert(res.message);
         setName("");
         setDescription("");
         setCategory("");
         setTags("");
         setOriginalPrice("");
         setDiscountPrice("");
         setStock("");
         setImages([]);
         navigate("/dashboard");
         window.location.reload();

      })
      .catch((err) => {
         alert(err.message)
      })
    };
  
    const handleImageChange = (e) => {
      e.preventDefault();
      let files = Array.from(e.target.files);
      setImages((prevImages) => [...prevImages, ...files]);
    };
    



  return (
    <div className="w-[90%] 800px:w-[50%] bg-white  shadow-lg h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Créer un Produit</h5>
      {/* create product form */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
            placeholder="Entrer le nom du produit ..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            cols="30"
            required
            rows="8"
            type="text"
            name="description"
            value={description}
            className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Entrer la description du product..."
          ></textarea>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Categorie <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Choose a category">Choisir une categorie</option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        <br />
        <div>
          <label className="pb-2">Tags</label>
          <input
            type="text"
            name="tags"
            value={tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setTags(e.target.value)}
            placeholder="Entrer des tags pour le produit ..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">Prix ​​d'origine</label>
          <input
            type="number"
            name="price"
            value={originalPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="Entrer le prix du produit ..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Prix (Avec remise) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={discountPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDiscountPrice(e.target.value)}
            placeholder="Entrer le prix du product Avec remise ..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
          Stock de produits <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={stock}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setStock(e.target.value)}
            placeholder="Entrez votre stock de produits ..."
          />
        </div>
        <br />
      <div>    
          <label className="pb-2">
          Importer des images <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {images &&
              images.map((i) => (
                <img
                  src={URL.createObjectURL(i)}
                  key={i}
                  alt=""
                  className="h-[120px] w-[120px] object-cover m-2"
                />
              ))}
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="créer le produit"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
