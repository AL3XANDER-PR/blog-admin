function App() {
  return (
    <>
      {/* <Article /> */}
      {true && (
        <div className="bg-slate-200 w-full h-screen">
          <header>Blog</header>
          <section className="grid grid-cols-3 mx-auto max-w-6xl  gap-7">
            <div className="col-span-1 flex flex-col gap-5">
              <input
                type="search"
                name=""
                id=""
                className="py-3 px-4 w-full rounded-full"
                placeholder="Search ..."
              />

              <div className="w-full bg-white flex flex-col px-6 py-4">
                <h2 className="text-xl font-bold text-[#201f59] mb-2">
                  Categories
                </h2>
                <a href="" className="py-3 text-[#201f59] font-semibold">
                  Creativity
                </a>
                <hr />
                <a href="" className="py-3 text-[#201f59] font-semibold">
                  Food
                </a>
                <hr />
                <a href="" className="py-3 text-[#201f59] font-semibold">
                  Travel
                </a>
                <hr />
                <a href="" className="py-3 text-[#201f59] font-semibold">
                  Humor
                </a>
                <hr />
                <a href="" className="py-3 text-[#201f59] font-semibold">
                  Music
                </a>
              </div>

              <div className="w-full bg-white flex flex-col px-6 py-4">
                <h2 className="text-xl font-bold text-[#201f59] mb-2">
                  Top Posts
                </h2>
                <a href="" className="py-3 text-[#201f59] font-semibold">
                  <div className="flex gap-4">
                    <span className="text-4xl font-bold">1</span>
                    <div>
                      <h3 className="text-md font-semibold ">
                        Aenean mattisg tortor sapen congue molestie.
                      </h3>{" "}
                      <span className="uppercase text-xs text-gray-500">
                        ART. TRAVEL - NOV 17,2020
                      </span>
                    </div>
                  </div>
                </a>
                <a href="" className="py-3 text-[#201f59] font-semibold">
                  <div className="flex gap-4">
                    <span className="text-4xl font-bold">2</span>
                    <div>
                      <h3 className="text-md font-semibold ">
                        Aenean mattisg tortor sapen congue molestie.
                      </h3>{" "}
                      <span className="uppercase text-xs text-gray-500">
                        ART. TRAVEL - NOV 17,2020
                      </span>
                    </div>
                  </div>
                </a>
                <a href="" className="py-3 text-[#201f59] font-semibold">
                  <div className="flex gap-4">
                    <span className="text-4xl font-bold">3</span>
                    <div>
                      <h3 className="text-md font-semibold ">
                        Aenean mattisg tortor sapen congue molestie.
                      </h3>{" "}
                      <span className="uppercase text-xs text-gray-500">
                        ART. TRAVEL - NOV 17,2020
                      </span>
                    </div>
                  </div>
                </a>
                <a href="" className="py-3 text-[#201f59] font-semibold">
                  <div className="flex gap-4">
                    <span className="text-4xl font-bold">4</span>
                    <div>
                      <h3 className="text-md font-semibold ">
                        Aenean mattisg tortor sapen congue molestie.
                      </h3>{" "}
                      <span className="uppercase text-xs text-gray-500">
                        ART. TRAVEL - NOV 17,2020
                      </span>
                    </div>
                  </div>
                </a>
                <a href="" className="py-3 text-[#201f59] font-semibold">
                  <div className="flex gap-4">
                    <span className="text-4xl font-bold">5</span>
                    <div>
                      <h3 className="text-md font-semibold ">
                        Aenean mattisg tortor sapen congue molestie.
                      </h3>{" "}
                      <span className="uppercase text-xs text-gray-500">
                        ART. TRAVEL - NOV 17,2020
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-7 grid-flow-row">
              <div className=" bg-white rounded-lg shadow">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="https://cosas.pe/wp-content/uploads/2021/09/ZAPATOS-VIAJE.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5 text-gray-500">
                  <span className="uppercase text-xs">
                    ART. TRAVEL - NOV 17,2020
                  </span>

                  <a href="#">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-[#201f59]">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
              <div className=" bg-white rounded-lg shadow">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="https://cosas.pe/wp-content/uploads/2021/09/ZAPATOS-VIAJE.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5 text-gray-500">
                  <span className="uppercase text-xs">
                    ART. TRAVEL - NOV 17,2020
                  </span>

                  <a href="#">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-[#201f59]">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
              <div className=" bg-white rounded-lg shadow">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="https://cosas.pe/wp-content/uploads/2021/09/ZAPATOS-VIAJE.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5 text-gray-500">
                  <span className="uppercase text-xs">
                    ART. TRAVEL - NOV 17,2020
                  </span>

                  <a href="#">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-[#201f59]">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default App;
