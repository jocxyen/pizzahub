import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrash, FaUpload } from 'react-icons/fa';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { categories } from '../utils/data';
import Loader from './Loader';
import { storage } from '../firebase';
import { saveItem } from '../utils/firebaseFunctions';

const Create = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0.00);
  const [category, setCategory] = useState('');
  const [desc, setDesc] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [field, setField] = useState(false);
  const [imgSrc, setImg] = useState('');
  const [calories, setCalories] = useState(0.00);
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState('');

  const uploadImg = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    console.log(imageFile);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on('state_changed', (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    }, (error) => {
      console.log(error);
      setField(true);
      setStatus('err');
      setMsg('Error while uploading.Try again.');
      setTimeout(() => {
        setField(false);
        setIsLoading(false);
      }, 7000);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
        setImg(downloadUrl);
        console.log(downloadUrl);
        setIsLoading(false);
        setField(true);
        setMsg('Image uploaded successfully.');
        setTimeout(() => {
          setField(false);
          setIsLoading(false);
        }, 7000);
      });
    });
  };

  const deleteImg = () => {
    setIsLoading(true);
    setIsLoading(true);
    const deleteRef = ref(storage, imgSrc);
    deleteObject(deleteRef).then(() => {
      setImg(null);
      setIsLoading(false);
      setField(true);
      setMsg('Image deleted successfully.');
      setTimeout(() => {
        setField(false);
        setIsLoading(false);
      }, 7000);
    });
  };

  const clearData = () => {
    setName('');
    setImg('');
    setDesc('');
    setCalories('');
    setPrice('');
    setCategory('');
  };

  const saveDetails = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = {
        id: `${Date.now()}`,
        title: name,
        imgurl: imgSrc,
        price,
        category,
        desc,
        calories,
      };
      saveItem(data);
      clearData();
      setIsLoading(false);
      setField(true);
      setMsg('Data Uploaded successfully');
      setStatus('success');
      setTimeout(() => {
        setField(false);
      }, 4000);
    } catch (err) {
      console.log(err);
      setField(true);
      setMsg('Error while saving. Try again');
      setStatus('err');
      setTimeout(() => {
        setField(false);
        setIsLoading(false);
      }, 9000);
    }
  };

  return (
    <div className="w-[70%] pb-8 h-auto mt-20 justify-center items-center flex flex-col mx-auto">
      {field && (
        <motion.p className={`initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} w-full p-2 rounded-lg text-center mx-auto text-white font-semibold text-lg ${status === 'err' ? 'bg-orange-600' : 'bg-green-600'}`}>{msg}</motion.p>
      )}
      <div className="flex w-full">
        <form className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1 w-full">

            <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700 font-semibold">Product Name</label>
            <input
              type="text"
              name="product_name"
              id="name"
              className="shadow rounded appearance-none bg-gray-200 focus:bg-white focus:outline-none focus:border-blue-500 border-2 py-2 px-4 transition
        ease-in-out"
              onChange={(e) => setName(e.target.value)}
              placeholder="Chicken Mushroom Pizza"
              value={name}
              required
            />
          </div>

          <div className="flex flex-col gap-1 w-full">

            <label
              htmlFor="exampleInputEmail1"
              className="form-label inline-block mb-2 text-gray-700 font-semibold transition
        ease-in-out"
            >Categories
            </label>
            <select
              name="categories"
              id="categories"
              className="focus:outline-none focus:border-blue-500 border-2 py-2 px-4 transition ease-in-out rounded"
              onChange={(e) => setCategory(e.target.value)}
              required
            >

              {categories && categories.map((c) => <option value={c.urlParamName} key={c.id}>{ c.name}</option>)}
            </select>
          </div>
          <>
          <label className="form-label inline-block text-gray-700 font-semibold">Cover Image</label>
          <div className="flex flex-col h-225 w-full justify-center rounded items-center border-dotted border-2 md:h-420 border-gray-300 py-8">
            {isLoading ? <Loader /> : <>{!imgSrc
              ? (
                <>

                <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 hover:text-gray-700 text-gray-500 transition-all ease-in">

                      <FaUpload className=" text-3xl " />
                      <p>
                        Click here to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={(e) => { uploadImg(e); }}
                      className="w-0 h-0"
                      required
                    />
                </label>
                </>

              ) : (
                <>
                  <div className="relative h-full">
                    <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
                    <button type="button" className="bg-red-500 cursor-pointer absolute p-3 bottom-3 right-3 rounded text-xl outline-none hover:shadow-md  duration-500 transition-all ease-in-out" onClick={deleteImg}>
                      <FaTrash className="text-white" />
                    </button>
                  </div>
                </>
              )}
                                      </>}
          </div>
          </>
          <div className="flex flex-col gap-1 w-full">

            <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700 font-semibold">Description</label>
            <textarea
              name="product_desc"
              id="desc"
              className="shadow rounded appearance-none bg-gray-200 focus:bg-white focus:outline-none focus:border-blue-500 border-2 py-2 px-4 h-56 transition
        ease-in-out"
              placeholder="Provides some infomation about the product"
              required
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">

            <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700 font-semibold">Price</label>
            <input
              type="number"
              name="product_name"
              id="name"
              step="0.01"
              className="shadow rounded appearance-none bg-gray-200 focus:bg-white focus:outline-none focus:border-blue-500 border-2 py-2 px-4 transition
        ease-in-out"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              value={price}
              required
            />
          </div>

          <div className="flex flex-col gap-1 w-full">

            <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700 font-semibold">Calories</label>
            <input
              type="number"
              name="calories"
              id="name"
              value={calories}
              className="shadow rounded appearance-none bg-gray-200 focus:bg-white focus:outline-none focus:border-blue-500 border-2 py-2 px-4 transition
        ease-in-out"
              onChange={(e) => setCalories(e.target.value)}
              placeholder="0.00"
              required
            />
          </div>
          <button type="submit" className="px-4 p-2 bg-blue-600 text-white rounded" onClick={(e) => saveDetails(e)}>Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
