import product_image_mobile from "./assets/images/image-product-mobile.jpg";
import product_image_desktop from "./assets/images/image-product-desktop.jpg";
const App = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="   m-5 rounded-xl max-w-sm flex flex-col lg:flex-row">
        <img
          src={product_image_mobile}
          alt="product_image"
          className="rounded-t-xl bg-cover lg:hidden "
        />
        <img
          src={product_image_desktop}
          alt="product_image"
          className="hidden lg:block rounded-t-xl lg:rounded-none lg:rounded-l-lg bg-cover "
        />
        <div className="p-5 bg-neutral-white lg:rounded-r-xl space-y-2">
          <p className=" uppercase text-neutral-dark-grayish-blue tracking-wide   font-extralight ">
            Perfume
          </p>
          <h1 className="font-weight-[700] font-extrabold text-3xl font-fraunces-700 ">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className=" text-neutral-dark-grayish-blue lg:text-xs">
            Preview Gabrielle Essence Eau De Parfum A floral, solar and
            voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL. $149.99 $169.99 Add to
            Cart
          </p>
          <p className=" flex items-center p-3">
            <span className=" text-primary-dark-cyan font-bold text-3xl font-fraunces-700">
              $149.99
            </span>
            <span className=" text-neutral-dark-grayish-blue pl-4 text-ellipsis line-through">
              $169.99
            </span>
          </p>
          <button className=" bg-primary-dark-cyan text-neutral-white p-3 w-full rounded-md font-semibold">
            <span className=" mr-4">
              <i className="fas fa-thin fa-cart-shopping text-white"></i>
            </span>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
