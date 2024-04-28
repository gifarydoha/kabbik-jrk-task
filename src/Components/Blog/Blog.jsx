import React from "react";
import img1 from "../../assets/Images/Blog/img1.png";
import img2 from "../../assets/Images/Blog/img2.png";
import img3 from "../../assets/Images/Blog/img3.png";
import img4 from "../../assets/Images/Blog/img4.png";

const content = [
  {
    image: img1,
    text: "Interior design is the art, the interior designer is the artist.",
  },
  {
    image: img2,
    text: "Interior design is the art, the interior designer is the artist.",
  },
  {
    image: img3,
    text: "Interior design is the art, the interior designer is the artist.",
  },
  {
    image: img4,
    text: "Interior design is the art, the interior designer is the artist.",
  },
];

const Blog = () => {
  return (
    <section className="section-padding mb-12">
      <div className="text-center">
        <h2 className="font-semibold text-3xl uppercase mb-7">
          Our <span className="text-sea-green-500">Blog</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6 lg:gap-11">
        {content.map((item, index) => (
          <div key={index}>
            <img
              className="object-cover rounded-sm object-center lg:h-[247px]"
              src={item.image}
              alt="blog image"
            />
            <p className="text-base lg:text-lg mt-2">{item.text}</p>
            <p className="my-2 lg:my-3 w-16 border-[#FFDD5F] border-2"></p>
            <p className="text-xs">October 02, 2022 / Hastheme / in Chair</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
