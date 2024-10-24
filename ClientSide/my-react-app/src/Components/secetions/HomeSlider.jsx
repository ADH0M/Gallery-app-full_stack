import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const HomeSlider = () => {
  const images = [
    "http://localhost:5173/gallery.icon.png",
    "http://localhost:4000/galler.icon.jpeg",
    "https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" m-4  rounded-lg relative">
      <div className="relative overflow-hidden h-96 w-full">
        <img
          src={images[currentIndex]}
          className="rounded-lg h-96 w-full object-cover transition-all duration-300   "
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full transition-all duration-300 hover:text-gray-100 mx-2 border hover:bg-blue-500"
      >
        <ArrowLeft/>
        
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full transition-all duration-300 border hover:text-gray-100 mx-2 hover:bg-blue-500"
      >
        <ArrowRight/>
      </button>
    </div>
  );
};

export default HomeSlider;

