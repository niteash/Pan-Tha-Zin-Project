import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CompanyJourney from "../components/CompanyJourney";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const { t } = useLanguage();

  return (
    <section
      className="bg-white"
      style={{
        background: `
          radial-gradient(circle at left center, #FFF5D1 0%, white 40%),
          radial-gradient(circle at right center, #FFF5D1 0%, white 40%)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "50% 100%, 50% 100%",
        backgroundPosition: "left center, right center",
      }}
    >
      {/* Header Section */}
      <section className="container mt-30 mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Mobile layout */}
          <div className="grid grid-cols-2 gap-4 sm:hidden">
            <img
              src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764262928/shop1_roepo8.jpg"
              alt="shop1"
              className="w-full h-32 object-cover rounded-2xl shadow-md "
            />
            <img
              src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764262945/shop2_eha2lb.jpg"
              alt="shop2"
              className="w-full h-32 object-cover rounded-2xl shadow-md "
            />

            <div className="col-span-2 text-center my-4 ">
              <h1 className="font-ital-heading font-extrabold text-4xl p-6 bg-gradient-to-r from-zinc-300 via-black to-zinc-300 bg-clip-text text-transparent">
                {t("AboutHeading")}
                <br />
                {t("AboutHeadingSecond")}
              </h1>
              <h2 className="font-ital font-color-purple text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-center">
                {t("AboutHeadingThird")}
              </h2>
            </div>

            <img
              src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764263010/shop3_mo4qhp.jpg"
              alt="shop3"
              className="w-full h-32 object-cover rounded-2xl shadow-md "
            />
            <img
              src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764264658/IMG_20250815_155549_264_Medium_t8twkn.jpg"
              alt="shop4"
              className="w-full h-32 object-cover rounded-2xl shadow-md "
            />
          </div>

          {/* Desktop / Tablet layout */}
          <div className="hidden sm:flex flex-col items-center gap-12">
            <div className="flex items-center justify-between w-full gap-6">
              <img
                src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764262928/shop1_roepo8.jpg"
                alt="shop1"
                className="w-40 h-32 sm:w-52 sm:h-40 lg:w-[250px] lg:h-[200px] rounded-3xl object-cover "
              />
              <h1 className="font-ital-heading font-extrabold pt-10 text-4xl md:text-6xl lg:text-7xl xl:text-9xl bg-gradient-to-r from-zinc-300 via-black to-zinc-300 bg-clip-text text-transparent text-center ">
                {t("AboutHeading")}
                <br />
                <br />
                {t("AboutHeadingSecond")}
              </h1>
              <img
                src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764262945/shop2_eha2lb.jpg"
                alt="shop2"
                className="w-32 h-28 sm:w-44 sm:h-36 lg:w-[180px] lg:h-[150px] rounded-3xl object-cover "
              />
            </div>

            <div className="flex items-center justify-between w-full gap-6">
              <img
                src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764263010/shop3_mo4qhp.jpg"
                alt="shop3"
                className="w-32 h-28 sm:w-44 sm:h-36 lg:w-[180px] lg:h-[150px] rounded-3xl object-cover "
              />
              <h2 className="font-ital-heading font-color-purple text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-center ">
                {t("AboutHeadingThird")}
              </h2>
              <img
                src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764264658/IMG_20250815_155549_264_Medium_t8twkn.jpg"
                alt="shop4"
                className="w-32 h-28 sm:w-44 sm:h-36 lg:w-[180px] lg:h-[150px] rounded-3xl object-cover "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="container mx-auto px-6 mb-16">
        <div className="text-zinc-800 font-bold max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 leading-relaxed">
          <p className="">{t("CompanyHistoryOne")}</p>
          <p className="">{t("CompanyHistoryTwo")}</p>
        </div>
      </section>

      {/* What You Can Hope & Trust */}
      <section className="w-full bg-gradient-to-b from-yellow-100 via-white to-yellow-50 px-6 md:px-20 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
          <div className="">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-black font-ital-heading font-extrabold mb-10 text-4xl md:text-5xl">
                {t("HopeTitle")}
              </h2>
              <div className="flex-grow h-px bg-black mb-10"></div>
            </div>
            <p className="text-gray-700 font-bold leading-relaxed text-[17px]">
              {t("HopeDesc")}
            </p>
          </div>
          <div className="flex justify-center ">
            <img
              src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764264338/IMG_20250815_155548_735_Medium_mwt0bh.jpg"
              alt="Factory"
              className="rounded-2xl shadow-md w-full md:w-4/5 h-72 md:h-96 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center ">
            <img
              src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764264055/IMG_20250815_155211_503_Medium_stml1w.jpg"
              alt="Color Zone"
              className="rounded-2xl shadow-md w-full md:w-4/5 h-72 md:h-96 object-cover"
            />
          </div>
          <div className="">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-grow h-px bg-black mb-10"></div>
              <h2 className="text-black font-ital-heading font-extrabold text-4xl mb-10 md:text-5xl">
                {t("TrustTitle")}
              </h2>
            </div>
            <p className="text-gray-700 font-bold leading-relaxed text-[17px]">
              {t("TrustDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="container mx-auto mb-16 px-4 md:px-6">
        <div className="text-center w-full mb-12 flex justify-center ">
          <h3 className="font-ital-heading text-4xl mt-10 sm:text-7xl font-bold md:text-8xl p-4 md:p-5 text-zinc-800">
            {t("ServiceTitle")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center items-start">
          <div className="space-y-10 md:space-y-16 ">
            <h3 className="font-ital border relative mx-auto w-[30%] md:w-full rounded-4xl lg:mb-70 sm:text-xl md:text-2xl lg:text-3xl p-4 text-zinc-800">
              {t("Quality")}
            </h3>
            <h3 className="font-ital border relative mx-auto w-[30%] md:w-full rounded-4xl text-center sm:text-xl  md:text-2xl lg:text-3xl p-4 text-zinc-800">
              {t("Product")}
            </h3>
          </div>

          <div className="flex justify-center ">
            <img
              className="rounded-4xl w-64 sm:w-72 md:w-80 lg:w-96 object-cover"
              src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764265612/IMG_20250815_161335_129_Medium_ripjer.jpg"
              alt="Services"
            />
          </div>

          <div className="space-y-10 md:space-y-16 ">
            <h3 className="font-ital border relative mx-auto w-[30%] md:w-full  rounded-4xl sm:text-xl lg:mb-70 md:text-2xl lg:text-3xl p-4 text-zinc-800">
              {t("Price")}
            </h3>
            <h3 className="font-ital border relative mx-auto w-[30%] md:w-full rounded-4xl sm:text-xl md:text-2xl lg:text-3xl p-4 text-zinc-800">
              {t("Satisfaction")}
            </h3>
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <CompanyJourney />

      {/* Meet the Owner */}
      <section className=" bg-gradient-to-b from-yellow-100 via-white to-yellow-50">
        <section className="container pb-20 mx-auto px-4 ">
          <div className="text-center w-full mb-12 flex justify-center ">
            <h3 className="font-ital-heading text-7xl mt-10 sm:text-4xl md:text-8xl font-extrabold tracking-wider p-4 md:p-5 text-zinc-800">
              {t("Owner")}
            </h3>
          </div>
          <section className="mt-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Mission */}
              <div className="flex flex-col items-start space-y-8">
                <img
                  src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764265362/IMG_20250815_161334_704_Medium_zsbeq2.jpg"
                  alt="Mission"
                  className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-3xl shadow-xl"
                />

                <div>
                  <h3 className="font-ital-heading text-3xl md:text-2xl lg:text-3xl font-bold text-zinc-900">
                    {t("Mission")}
                  </h3>
                  <div className="w-16 h-1 bg-zinc-900 my-3"></div>
                  <p className="font-ital text-lg md:text-base lg:text-lg text-zinc-700 leading-relaxed">
                    {t("MissionDesc")}
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex flex-col items-start space-y-8">
                <img
                  src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764265218/IMG_20250815_161334_527_Medium_jjiqcb.jpg"
                  alt="Vision"
                  className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-3xl shadow-xl"
                />

                <div>
                  <h3 className="font-ital-heading text-3xl md:text-2xl lg:text-3xl font-bold text-zinc-900">
                    {t("Vision")}
                  </h3>
                  <div className="w-16 h-1 bg-zinc-900 my-3"></div>
                  <p className="font-ital text-lg md:text-base lg:text-lg text-zinc-700 leading-relaxed">
                    {t("VisionDesc")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-32 px-6 md:px-12 lg:px-20">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              {/* CEO Image */}
              <div className="flex justify-center md:justify-start">
                <div className="w-80 md:w-96 aspect-square">
                  <img
                    src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1772530991/owner_yv7vqg.jpg"
                    alt="Founder Ko Sai"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                </div>
              </div>

              {/* CEO Text */}
              <div className="flex flex-col justify-center max-w-2xl">
                <h3 className="text-4xl leading-15 md:text-5xl font-extrabold text-zinc-900 mb-10">
                  {t("CEO")}
                </h3>

                <div className="space-y-6 text-zinc-700 text-base md:text-lg leading-relaxed">
                  <p className="font-semibold text-zinc-900">
                    {t("founderGreeting")}
                  </p>

                  <p>{t("founderParagraph1")}</p>

                  <p>{t("founderParagraph2")}</p>

                  <p className="italic text-zinc-800 border-l-4 border-zinc-900 pl-4">
                    {t("founderQuote")}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default About;
