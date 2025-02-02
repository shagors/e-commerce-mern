const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert("Subscribed Successfully");
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error
        natus sequi ea quo consequatur incidunt unde consequuntur rem quae!
        Minima aliquid porro ab itaque quam optio dolor rem fugit.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 mx-auto flex items-center gap-3 my-6 pl-3 border"
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full sm:flex-1 outline-none cursor-pointer"
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
