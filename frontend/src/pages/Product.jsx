import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [sizes, setSizes] = useState("");

  const fetchProductData = async () => {
    products.map((product) => {
      if (product._id === productId) {
        setProductData(product);
        setImage(product.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt="Image"
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="Image" className="w-full h-auto" />
          </div>
        </div>
        {/* product Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="text-3xl font-medium mt-5">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`border border-gray-100 py-2 px-4 cursor-pointer ${
                    item === sizes ? "border-orange-500" : ""
                  }`}
                  onClick={() => setSizes(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            className="bg-black text-white px-8 py-3 cursor-pointer active:bg-gray-700"
            onClick={() => addToCart(productData._id, sizes)}
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p className="">100% Original product.</p>
            <p className="">Cash on delivery available on this product.</p>
            <p className="">Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* description and Review Section */}
      <div className="mt-20">
        <div className="flex ">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni
            commodi nisi eveniet eaque est asperiores, atque voluptates
            perferendis tempore dolores neque distinctio recusandae id, esse
            deserunt ad animi illo, assumenda maiores aperiam? Quidem laborum
            itaque dignissimos, suscipit corporis obcaecati cupiditate
            excepturi, optio deserunt magni aliquam ab voluptate eveniet nihil,
            ex et quas iusto cum perferendis? Illum eveniet similique eos
            doloribus voluptates corporis reiciendis ipsum, dignissimos
            accusamus neque veritatis laudantium vero repellendus eius earum
            fugiat repudiandae illo maxime aliquam voluptas. Velit sunt, ab
            minus tempora natus alias numquam dolorem deserunt illo quibusdam
            optio tenetur facilis. Incidunt quaerat similique quo esse aliquid
            explicabo quidem porro. Sequi nam qui culpa veritatis, dolores animi
            perspiciatis tempora quo laborum explicabo est quaerat distinctio
            minus sint alias voluptates quam quia officiis cum esse eveniet ex
            natus accusamus! Ipsa, debitis nesciunt distinctio placeat ea
            perspiciatis similique consequatur est velit in dignissimos optio
            blanditiis architecto labore ad!
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            distinctio quam vel expedita aliquam corporis nemo accusantium,
            adipisci, nesciunt illo deleniti fugit itaque ratione? Voluptatibus
            id molestias, ipsum soluta dolorum laborum excepturi officia nostrum
            dolore alias amet ab facilis. Harum fugit dicta doloremque quibusdam
            beatae ducimus ea corrupti nihil enim quas, quae sapiente! Nesciunt,
            ipsum deserunt dignissimos id vitae cum voluptates voluptatum
            consectetur consequuntur pariatur iusto dolores omnis porro?
            Incidunt ad ipsa reprehenderit necessitatibus et, sapiente aliquam
            dolore. Assumenda ullam placeat, adipisci vero sapiente obcaecati
            magni ab itaque, doloremque error voluptatem vitae odio! Expedita,
            quasi sequi, mollitia unde consectetur in saepe quod optio eum odio
            vitae nam fugiat repudiandae tenetur nemo id omnis ratione. Omnis
            libero culpa at quae, id quis consequatur assumenda ea veritatis
            earum eum sit a! Voluptatibus voluptatum optio expedita ratione,
            distinctio minus nisi, quisquam sit tempora magni, consectetur
            dolorem est. Laudantium fuga asperiores consequuntur minima sunt
            optio quam temporibus qui voluptate minus itaque eos eligendi, ex
            corporis ab iure iusto assumenda voluptatem placeat illum expedita
            sit exercitationem ratione alias? Rem inventore eius illum error
            distinctio pariatur obcaecati reiciendis molestias vitae sapiente,
            fugiat laboriosam fugit excepturi cupiditate a, tenetur voluptatum
            sint quibusdam magni nesciunt, sequi similique ullam!
          </p>
        </div>
      </div>

      {/* display related products */}
      <div className="">
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0">Loading...</div>
  );
};

export default Product;
