import ProductsPage from "../shop/ProductsPage";
import ShopSidebar from "../shop/ShopSidebar";

const Shop = () => {
  return (
    <div className="flex dark:bg-gray-800  gap-4 ">
        <div className="flex w-full h-full overflow-hidden">
          <aside className=" h-full ">
            <ShopSidebar />
          </aside>
          <main className="flex-grow h-full overflow-auto">
            <ProductsPage />
          </main>
        </div>
    </div>
  );
};

export default Shop;
