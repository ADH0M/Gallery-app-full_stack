import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className=" flex flex-col justify-center bg-white dark:bg-gray-900 text-center items-center">
      <img
        src="../../../public/NotFound.svg"
        alt="not found page"
        width={900}
      />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Whoops! That page doesn’t exist.
              home page.{" "}
            </p>
            <Link
              to={'/'}
              className="cursor-pointer text-white bg-indigo-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-white font-lg rounded-lg text-lg px-5 py-2.5 text-center dark:focus:ring-gray-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
