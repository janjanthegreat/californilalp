export default function Emergencykits() {
    return (
      <>
        {/* Marketplace */}
        <div
          id="emergencykits"
          className="md:min-h-[65vh] w-full lg:w-1/2 flex items-center justify-center bg-cover bg-center"
        >
          <div className="s_row_content flex relative h-full w-full">
              <div className="text-center w-full flex flex-col items-center z-5 p-8 md:p-20">
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#012c4f] uppercase mb-4">
                      Medical Emergency Kits
                  </h2>
                  <p className="text-xl md:text-2xl">Safety you can count on, your essential lifesaver</p>
                  <p className="text-xl md:text-2xl">always within the reach</p>
                  <a
                      href="https://emergencykits.californila.com/"
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
  