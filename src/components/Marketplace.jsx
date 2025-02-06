export default function Marketplace() {
  return (
    <>
      {/* Marketplace */}
      <div
        id="marketplace"
        className="md:min-h-[65vh] w-full lg:w-1/2 flex items-center justify-center bg-cover bg-center"
      >
        <div className="s_row_content flex relative h-full w-full">
            <div className="text-right w-full flex flex-col items-end z-5 p-8 md:p-20">
                <h2 className="text-4xl md:text-7xl font-bold leading-tight text-[#012c4f] uppercase mb-4">
                    Shop, Ship <br /> and Save
                </h2>
                <p className="text-xl md:text-2xl">Your one stop solution for hassle-free</p>
                <p className="text-xl md:text-2xl">US shopping and shipping</p>
                <a
                    href="https://shop.californila.com"
                    id="shop_btn"
                    className="bg-[#012c4f] text-white text-xl font-bold uppercase rounded-full text-center py-2.5 px-8 mt-5"
                >
                    Shop more
                </a>
            </div>
        </div>

      </div>
    </>
  );
}
