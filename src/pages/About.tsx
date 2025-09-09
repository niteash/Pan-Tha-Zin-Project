import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CompanyJourney from "../components/CompanyJourney";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const { t } = useLanguage();

  useEffect(() => {
    gsap.utils.toArray(".reveal-up").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

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
              src="/images/shop1.jpg"
              alt="shop1"
              className="w-full h-32 object-cover rounded-2xl shadow-md reveal-up"
            />
            <img
              src="/images/shop2.jpg"
              alt="shop2"
              className="w-full h-32 object-cover rounded-2xl shadow-md reveal-up"
            />

            <div className="col-span-2 text-center my-4 reveal-up">
              <h1 className="font-jaro font-bold text-4xl p-6 bg-gradient-to-r from-zinc-300 via-black to-zinc-300 bg-clip-text text-transparent">
                {t("AboutHeading")}
                <br />
                {t("AboutHeadingSecond")}
              </h1>
              <h2 className="font-jaro font-color-purple text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-center">
                {t("AboutHeadingThird")}
              </h2>
            </div>

            <img
              src="/images/shop3.jpg"
              alt="shop3"
              className="w-full h-32 object-cover rounded-2xl shadow-md reveal-up"
            />
            <img
              src="/images/shop4.jpg"
              alt="shop4"
              className="w-full h-32 object-cover rounded-2xl shadow-md reveal-up"
            />
          </div>

          {/* Desktop / Tablet layout */}
          <div className="hidden sm:flex flex-col items-center gap-12">
            <div className="flex items-center justify-between w-full gap-6">
              <img
                src="/images/shop1.jpg"
                alt="shop1"
                className="w-40 h-32 sm:w-52 sm:h-40 lg:w-[250px] lg:h-[200px] rounded-3xl object-cover reveal-up"
              />
              <h1 className="font-jaro font-bold pt-10 text-5xl md:text-6xl lg:text-7xl xl:text-7xl bg-gradient-to-r from-zinc-300 via-black to-zinc-300 bg-clip-text text-transparent text-center reveal-up">
                {t("AboutHeading")}
                <br />
                <br />
                {t("AboutHeadingSecond")}
              </h1>
              <img
                src="/images/shop2.jpg"
                alt="shop2"
                className="w-32 h-28 sm:w-44 sm:h-36 lg:w-[180px] lg:h-[150px] rounded-3xl object-cover reveal-up"
              />
            </div>

            <div className="flex items-center justify-between w-full gap-6">
              <img
                src="/images/shop3.jpg"
                alt="shop3"
                className="w-32 h-28 sm:w-44 sm:h-36 lg:w-[180px] lg:h-[150px] rounded-3xl object-cover reveal-up"
              />
              <h2 className="font-jaro font-color-purple text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-center reveal-up">
                {t("AboutHeadingThird")}
              </h2>
              <img
                src="/images/shop4.jpg"
                alt="shop4"
                className="w-32 h-28 sm:w-44 sm:h-36 lg:w-[180px] lg:h-[150px] rounded-3xl object-cover reveal-up"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="container mx-auto px-6 mb-16">
        <div className="text-zinc-800 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 leading-relaxed">
          <p className="reveal-up">{t("CompanyHistoryOne")}</p>
          <p className="reveal-up">{t("CompanyHistoryTwo")}</p>
        </div>
      </section>

      {/* What You Can Hope & Trust */}
      <section className="w-full bg-gradient-to-b from-yellow-100 via-white to-yellow-50 px-6 md:px-20 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
          <div className="reveal-up">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-black font-jaro font-bold text-xl md:text-2xl">
                {t("HopeTitle")}
              </h2>
              <div className="flex-grow h-px bg-black"></div>
            </div>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              {t("HopeDesc")}
            </p>
          </div>
          <div className="flex justify-center reveal-up">
            <img
              src="/images/-3.jpg"
              alt="Factory"
              className="rounded-2xl shadow-md w-full md:w-4/5 h-72 md:h-96 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center reveal-up">
            <img
              src="/images/shop4.jpg"
              alt="Color Zone"
              className="rounded-2xl shadow-md w-full md:w-4/5 h-72 md:h-96 object-cover"
            />
          </div>
          <div className="reveal-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-grow h-px bg-black"></div>
              <h2 className="text-black font-jaro font-bold text-xl md:text-2xl">
                {t("TrustTitle")}
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              {t("TrustDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="container mx-auto mb-16 px-4 md:px-6">
        <div className="text-center w-full mb-12 flex justify-center reveal-up">
          <h3 className="font-jaro border rounded-4xl text-2xl mt-10 sm:text-3xl md:text-6xl p-4 md:p-5 text-zinc-800">
            {t("ServiceTitle")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center items-start">
          <div className="space-y-10 md:space-y-16 reveal-up">
            <h3 className="font-jaro border rounded-4xl lg:mb-70 sm:text-xl md:text-2xl lg:text-3xl p-4 text-zinc-800">
              {t("Quality")}
            </h3>
            <h3 className="font-jaro border rounded-4xl sm:text-xl  md:text-2xl lg:text-3xl p-4 text-zinc-800">
              {t("Product")}
            </h3>
          </div>

          <div className="flex justify-center reveal-up">
            <img
              className="rounded-4xl w-64 sm:w-72 md:w-80 lg:w-96 object-cover"
              src="./images/-18.jpg"
              alt="Services"
            />
          </div>

          <div className="space-y-10 md:space-y-16 reveal-up">
            <h3 className="font-jaro border rounded-4xl sm:text-xl lg:mb-70 md:text-2xl lg:text-3xl p-4 text-zinc-800">
              {t("Price")}
            </h3>
            <h3 className="font-jaro border rounded-4xl sm:text-xl md:text-2xl lg:text-3xl p-4 text-zinc-800">
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
          <div className="text-center w-full mb-12 flex justify-center reveal-up">
            <h3 className="font-jaro text-2xl mt-10 sm:text-3xl md:text-6xl tracking-wider p-4 md:p-5 text-zinc-800">
              {t("Owner")}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center items-start">
            <div className="space-y-6 md:space-y-10 reveal-up">
              <div>
                <h3 className="font-jaro text-left text-xl md:text-2xl lg:text-3xl text-zinc-800">
                  {t("Mission")}
                </h3>
                <hr className="border-2 border-zinc-950 w-20 my-2" />
                <p className="font-jaro text-left text-base md:text-lg lg:text-xl text-zinc-800">
                  {t("MissionDesc")}
                </p>
              </div>
              <img
                src="./images/shop4.jpg"
                className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover mx-auto rounded-3xl"
                alt="Mission"
              />
            </div>

            <div className="flex justify-center items-center reveal-up">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-4xl overflow-hidden bg-gray-100">
                <img
                  className="w-full h-full object-cover object-top"
                  src="./images/-3.jpg"
                  alt="Owner"
                />
              </div>
            </div>

            <div className="space-y-6 md:space-y-10 reveal-up">
              <div className="flex justify-center md:hidden">
                <img
                  src="./images/-7.jpg"
                  className="w-40 h-40 object-cover rounded-3xl"
                  alt="Vision"
                />
              </div>
              <div>
                <h3 className="font-jaro text-left text-xl md:text-2xl lg:text-3xl text-zinc-800">
                  {t("Vision")}
                </h3>
                <hr className="border-2 border-zinc-950 w-20 my-2" />
                <p className="font-jaro text-left text-base md:text-lg lg:text-xl text-zinc-800">
                  {t("VisionDesc")}
                </p>
              </div>
              <div className="hidden md:flex justify-center">
                <img
                  src="./images/-7.jpg"
                  className="md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-3xl"
                  alt="Vision"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 items-center reveal-up">
            <h3 className="font-jaro text-zinc-900 text-3xl md:text-4xl">
              {t("CEO")}
            </h3>
            <p className="text-zinc-900 text-base md:text-lg lg:text-xl font-jaro leading-relaxed">
              Lorem Ipsum is simply text of the printing and typesetting
              industry. Standard dummy text ever since the Lorem is simply dummy
              text of
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}

export default About;
