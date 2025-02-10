/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { currency } from "../App";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000" + "/api/product/lists"
      );

      if (response?.data?.products) {
        setList(response?.data?.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:4000" + `/api/product/remove/${id}`,
        { headers: { token } }
      );
      console.log(response);
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* List Table Title */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b className="">Image</b>
          <b className="">Name</b>
          <b className="">Category</b>
          <b className="">Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* Product List */}
        {list?.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
          >
            <img src={item.image[0]} alt="productImage" className="w-12" />
            <p className="">{item.name}</p>
            <p className="">{item.category}</p>
            <p className="">
              {currency}
              {item.price}
            </p>
            <p
              onClick={() => removeProduct(item._id)}
              className="text-right md:text-center cursor-pointer text-lg"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
