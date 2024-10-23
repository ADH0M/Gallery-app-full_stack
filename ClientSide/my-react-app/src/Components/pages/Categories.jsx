import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcategories } from "../../store/reducers/categoryReducer";
import { Link } from "react-router-dom";
import HomeSlider from "../secetions/HomeSlider";

const Categories = () => {
  const { categories } = useSelector((select) => select.categoriesSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcategories());
  }, [dispatch]);
  console.log(categories);

  return (
    <>
      <div>
        <HomeSlider />
      </div>
      <div className="container relative m-auto dark:bg-gray-800 dark:text-gray-900 mt-10 w-full relative pt-3 flex justify-center">
        <h3 className="absolute -top-5 left-1/2 -translate-x-1/2 dark:text-blue-600 font-semibold text-gray-800">Categories</h3>
        <ul className=" grid sm:grid-cols-2 md:grid-cols-4 gap-3  border  justify-evenly outline-none p-4 text-center rounded-lg ">
          {categories &&
            categories.data &&
            categories.data.map((item) => (
              <Link
                key={item.category_ID}
                // to={`/categorypage/${item.category_ID}`}
                to={`/shop`}
              >
                <li className="transition-all duration-200 mx-2 scale-1 border-b border-r  rounded-lg pb-2 pr-1 hover:scale-105 mb-2 dark:border-blue-400 border-purple-400">
                  <img
                    src="http://localhost:5173/gallery.icon.png"
                    className="rounded-lg"
                    width={200}
                    alt={`${item.category_name}`}
                  />
                  <span className="dark:text-gray-100 block mt-2">
                    {item.category_name}
                  </span>
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
