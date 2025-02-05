import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col sm:flex-row gap-16">
        <img
          src={assets.about_img}
          alt="About"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            totam corporis enim temporibus tempora ad quis fuga laudantium
            provident nulla sequi ipsa, libero officia, maiores voluptate
            tenetur quasi, minus neque perspiciatis! Quaerat deleniti
            consectetur explicabo, quis fugiat officia placeat vel velit earum
            provident nam quod soluta eveniet? Voluptate iusto nulla enim
            aliquam quasi, assumenda perferendis expedita neque voluptates eius
            tempora doloribus repellat asperiores. Sint excepturi ipsam nostrum
            qui cupiditate, totam, velit ab quos earum deserunt explicabo
            quaerat placeat eos. Consequuntur ipsum minima explicabo optio nobis
            amet tempore deserunt, ipsa ratione quam numquam cum modi est
            blanditiis voluptatum, quod quia quos. Perferendis facere magni
            praesentium enim ab ex delectus?
          </p>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            odio soluta qui ut rem, tempora perspiciatis consequatur tenetur
            voluptas. a eligendi sit, sunt animi inventore, facere iure dolore
            quod!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            mollitia repellat vel dicta, soluta maxime adipisci non in veniam
            voluptatem labore cumque laudantium, nostrum quidem tempore
            architecto voluptate magnam ratione debitis dignissimos ut ipsum
            quae facilis! Aliquam omnis numquam eligendi sapiente cum molestiae,
            sit, veniam amet repellat, quis delectus nulla officia! Facere
            obcaecati exercitationem ipsam fugiat dolore! Officia, atque, fugiat
            eligendi eos voluptas doloremque error nam in excepturi possimus
            aspernatur quis commodi deserunt totam ratione corrupti facilis
            ipsam. Ullam iste ducimus deleniti quidem nam in saepe voluptatibus
            eaque quo voluptatem.
          </p>
        </div>
      </div>

      <div className="text-2xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            praesentium! Velit ut accusamus laborum quam porro magni explicabo
            in?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur iste similique iusto modi
            fugiat nulla dolorem voluptatem amet excepturi, laborum quam porro
            magni explicabo in?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur iste similique iusto modi
            fugiat nulla dolorem voluptatem amet excepturi, laborum quam porro
            magni explicabo in?
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
