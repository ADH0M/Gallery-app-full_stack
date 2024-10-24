import { Link } from "react-router-dom";

const NotFoundUser = () => {
  return (
    <div>
      <div
        id="modal"
        className="container mx-auto flex justify-center items-center px-4 md:px-10 py-20"
      >
        <div className="bg-white dark:bg-gray-800 px-3 md:px-4 py-12 flex flex-col justify-center items-center">
          <h1 className="leading-normal font-bold text-center text-gray-800  dark:text-white text-3xl">
            {" "}
            G-app
          </h1>
          <h2 className="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800 text-center md:w-9/12 lg:w-7/12 dark:text-white">
            Welcome to the family of G-App!
          </h2>
          <p className="mt-10 text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12 dark:text-white">
            you must log in to  G-app before you can access the page{" "}
          </p>
          <div className="mt-12 md:mt-14 w-full flex justify-center">
            <Link to={'/login'}>
            <button className=" dark:border-white rounded-md dark:text-blue-400  w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white dark:hover:text-white dark:hover:bg-gray-700">
              Login
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundUser;
