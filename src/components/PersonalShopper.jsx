export default function PersonalShopper() {
  return (
    <>
      {/* <!-- Personal Shopper Section --> */}
      <div id="personalShopper" className="md:min-h-[65vh] f_row_banner h-100 row w-full max-full">
        <div className="f_row_banner_content flex flex-col items-start justify-center h-full px-3 md:px-20 md:py-0 content-start">
          <div className="banner_text relative text-left d-flex flex-column align-items-start h-100 content-center w-9/10 mx-auto">
            <h2 className="uppercase text-white text-4xl md:text-7xl font-bold leading-tight mb-4">
              Shop the trends <br /> you love!
            </h2>
            <p className="text-white text-xl md:text-2xl m-0">
              Limited-time discounts you won't want to miss
            </p>
            <p className="text-white text-xl md:text-2xl mb-5">
              Grab them before they're gone.
            </p>

              <a
                id="shop_btn"
                href="https://personalshopper.californila.com"
                className="button_container inline-block bg-[#fcb215] text-dark text-xl font-bold uppercase rounded-full text-center py-2.5 px-8 mt-5"
              >
                Shop Now
              </a>
          </div>
        </div>
      </div>
    </>
  );
}
