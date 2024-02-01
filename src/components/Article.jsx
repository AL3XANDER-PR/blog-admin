import Etiquetas from "./Etiquetas";
import FormComment from "./FormComment";

function Article() {
  return (
    <div className="relative w-[90%] mx-auto">
      <img
        src="https://media.admagazine.com/photos/632a4076d75f2fd76bd14a60/16:9/w_1920,c_limit/toa-heftiba-4t8_1MKvPd8-unsplash.jpg"
        alt=""
        className="h-[600px] w-full object-cover object-bottom"
      />
      <div className="max-w-6xl mx-auto relative  -top-[150px] ">
        <div className="bg-white  px-20 py-16 text-gray-500">
          <span className="uppercase text-xs">ART. TRAVEL - NOV 17,2020</span>
          <div className="flex flex-col gap-7">
            <h1 className="text-3xl font-bold text-[#201f59]">
              Genean mattis tortor ac sapien congue molestie eget dolor
            </h1>
            <p>
              Quisquo sollicitudin lacinia sapion, ou tincidunt nunc accumsan
              laoroot. Curabitur fougiat posuoro odio noc tincidunt_
              Pollontosquo sagittis nibh vononatis sapioni conguo consoctotur.
              nulla nunc, officitur sit amot sagittis sed, suscipit ot magna.
              Nulla porttitor noquo non dapibus noc Olit tristiquo sagittis.
              Maoconas vivorra tortor sod magna volutpat. sod sompor 100
              intordum, Donec pharotra nulla ou mi mattis gravida.
            </p>
            <p>
              Proin blandit vulputato diam quis pulvinar, Fusco non libero
              sodalos. dictum som sod ornare onim. Maoconas officitur ost vol
              placorat oloifond. Donac vol quam sollicitudin. bibondum odio
              ogot, varius olit. Fusco sompor mauris ut olit dignissim, ac
              impordiot massa ullamcorpor.
            </p>
            <q className="italic text-xl text-[#201f59] ">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos húnenaeos. Nullam ac urna eufelis dapibus
              condúnentum sit amet a augue. Sed non neque elit. Sed ut
              intperdiet nisi. Proin condimentumfermentum nunc.
            </q>
            <p>
              Suspendisse viverra massa eget nibh ultricies mollis. sed lorem
              tincidunt. ultrices ligula ut. euismod sem. Mauris nec tincidunt
              diam. Donec varius magna vitae velit consectetur efficitur. Sed
              rutrum aliquet lígula. Cras non pellentesque nisi. id laoreet
              nibh. Aliquam in ante elit. Praesent blandit nibh ac justo auctor
              pretium. Maecenas mauris metus. vulputate ac volutpat sit amet.
              facilisis quis odio. Nam ut commodo neque.
            </p>
          </div>
          <div className=" flex gap-2 py-10">
            <Etiquetas name="Creative" />
            <Etiquetas name="design" />
          </div>
          <hr />
          <div className="flex justify-between py-6">
            <div className="flex flex-col items-start">
              <p className="uppercase text-[11px] font-semibold">
                Previus Post
              </p>
              <div className="flex gap-2 items-center font-semibold text-[#201f59]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
                Sellentesque tristiue neque
              </div>
            </div>
            <div className="flex flex-col  items-end">
              <p className="uppercase text-[11px] font-semibold ">
                Previus Post
              </p>

              <div className="flex gap-2 items-center font-semibold text-[#201f59]">
                Aliquam lobortis urna libero
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <hr />
          <div className="py-6 w-full">
            <FormComment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
