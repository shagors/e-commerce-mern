import { useState } from "react";
import { assets } from "../assets/assets";

const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  return (
    <form className="flex flex-col w-full items-start gap-3">
      <div className="">
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=""
              className="w-20"
              required
            />
            <input
              type="file"
              id="image1"
              hidden
              required
              onChange={(e) => setImage1(e.target.files[0])}
            />
          </label>
          <label htmlFor="image2">
            <img
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=""
              className="w-20"
            />
            <input
              type="file"
              id="image2"
              hidden
              onChange={(e) => setImage2(e.target.files[0])}
            />
          </label>
          <label htmlFor="image3">
            <img
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=""
              className="w-20"
            />
            <input
              type="file"
              id="image3"
              hidden
              onChange={(e) => setImage3(e.target.files[0])}
            />
          </label>
          <label htmlFor="image4">
            <img
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=""
              className="w-20"
            />
            <input
              type="file"
              id="image4"
              hidden
              onChange={(e) => setImage4(e.target.files[0])}
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          type="text"
          placeholder="Write content here"
          required
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div className="">
          <p className="mb-2">Product Category</p>
          <select className="w-full px-3 py-2">
            <option value="Men" className="">
              Men
            </option>
            <option value="Women" className="">
              Women
            </option>
            <option value="Kids" className="">
              Kids
            </option>
          </select>
        </div>

        <div className="">
          <p className="mb-2">Sub Category</p>
          <select className="w-full px-3 py-2">
            <option value="Topwear" className="">
              Topwear
            </option>
            <option value="Bottomwear" className="">
              Bottomwear
            </option>
            <option value="Winterwear" className="">
              Winterwear
            </option>
          </select>
        </div>

        <div className="">
          <p className="mb-2">Product Price</p>
          <input
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="25"
          />
        </div>
      </div>

      <div className="">
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          <div className="">
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">S</p>
          </div>
          <div className="">
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">M</p>
          </div>
          <div className="">
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">L</p>
          </div>
          <div className="">
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">XL</p>
          </div>
          <div className="">
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">XXL</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input type="checkbox" id="bestseller" />
        <label htmlFor="bestseller" className="cursor-pointer">
          Add to Bestseller
        </label>
      </div>

      <button
        type="submit"
        className="w-32 py-3 mt-4 bg-black text-white cursor-pointer"
      >
        ADD
      </button>
    </form>
  );
};

export default Add;
