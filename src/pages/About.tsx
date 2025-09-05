import CompanyJourney from "../components/CompanyJourney";

function About() {
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
          {/* Mobile layout - text in center with images around */}
          <div className="grid grid-cols-2 gap-4 sm:hidden">
            <img
              src="/images/shop1.jpg"
              alt="shop1"
              className="w-full h-32 object-cover rounded-2xl shadow-md"
            />
            <img
              src="/images/shop2.jpg"
              alt="shop2"
              className="w-full h-32 object-cover rounded-2xl shadow-md"
            />

            <div className="col-span-2 text-center my-4">
              <h1 className="font-jaro font-bold text-4xl bg-gradient-to-r from-zinc-300 via-black to-zinc-300 bg-clip-text text-transparent">
                EVOLUTION
                <br />
                OF
              </h1>
              <h2 className="font-jaro font-color-purple text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-zinc-800 text-center">
                ပန်းသဇင်
              </h2>
            </div>

            <img
              src="/images/shop3.jpg"
              alt="shop3"
              className="w-full h-32 object-cover rounded-2xl shadow-md"
            />
            <img
              src="/images/shop4.jpg"
              alt="shop4"
              className="w-full h-32 object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Desktop / Tablet layout */}
          <div className="hidden sm:flex flex-col items-center gap-12">
            {/* First Row */}
            <div className="flex items-center justify-between w-full gap-6">
              <img
                src="/images/shop1.jpg"
                alt="shop1"
                className="w-40 h-32 sm:w-52 sm:h-40 lg:w-[250px] lg:h-[200px] rounded-3xl object-cover"
              />
              <h1 className="font-jaro font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-zinc-300 via-black to-zinc-300 bg-clip-text text-transparent text-center">
                EVOLUTION
                <br />
                OF
              </h1>

              <img
                src="/images/shop2.jpg"
                alt="shop2"
                className="w-32 h-28 sm:w-44 sm:h-36 lg:w-[180px] lg:h-[150px] rounded-3xl object-cover"
              />
            </div>

            {/* Second Row */}
            <div className="flex items-center justify-between w-full gap-6">
              <img
                src="/images/shop3.jpg"
                alt="shop3"
                className="w-32 h-28 sm:w-44 sm:h-36 lg:w-[180px] lg:h-[150px] rounded-3xl object-cover"
              />
              <h2 className="font-jaro font-color-purple text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-zinc-800 text-center">
                ပန်းသဇင်
              </h2>
              <img
                src="/images/shop4.jpg"
                alt="shop4"
                className="w-32 h-28 sm:w-44 sm:h-36 lg:w-[180px] lg:h-[150px] rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="container mx-auto px-6 mb-16">
        <div className="text-zinc-800 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 leading-relaxed">
          <p>
            ပန်းသဇင် အိမ်ဆောက်ပစ္စည်းလုပ်ငန်းကို မတည်ရင်းနှီးငွေ သိန်း ၁၅၀ ဖြင့်
            ဆိုင်ခန်းအသေးစားဖြင့် စတင်လည်ပတ်ခဲ့သည်။ တရုတ်ပြည်သို့
            ကိုယ်တိုင်သွားရောက်၍ ကုန်ပစ္စည်းများ၀ယ်ယူခြင်း၊ လေ့လာခြင်းများနှင့်
            နည်းပညာများကို သင်ယူပြီး မူဆယ်မြို့တွင် ဆိုင်ဖွင့်ခဲ့သည်။ ထို့အပြင်
            သွပ်ကြိတ်သည့်အတတ်ပညာကိုလည်း လေ့လာခဲ့ကာ သွပ်စက်အဟောင်းတစ်လုံးကို
            အရစ်ကျဖြင့် ၀ယ်ယူပြီး လုပ်ငန်းကို စတင်ခဲ့သည်။ ၂၀၁၂ တွင်
            ဒုတိယဆိုင်ခွဲကို ဖွင့်နိုင်ခဲ့ပြီး ၂၀၁၄ တွင်
            ကိုယ်ပိုင်ဂိုထောင်တည်ဆောက်ကာ သိုလှောင်ရေးစနစ်ကို
            တိုးချဲ့နိုင်ခဲ့သည်။
          </p>
          <p>
            ထို့နောက် သွပ်စက်အသစ်များဝယ်ယူကာ ထုတ်လုပ်မှုစွမ်းရည်
            တိုးချဲ့နိုင်ခဲ့သည်။ ယုံကြည်စိတ်ချရသော အရည်အသွေးနှင့်
            ဝန်ဆောင်မှုကြောင့် ဈေးကွက်တွင်အောင်မြင်ခဲ့ပြီး ၂၀၁၉ တွင်
            တတိယဆိုင်ကိုဖွင့်ခဲ့သည်။ ၂၀၂၃ တွင် Interior & Exterior putty ကို N&N
            အမည်ဖြင့် ထုတ်လုပ်ချပေးခဲ့ပြီး plywood များကိုလည်း ထုတ်လုပ်ခဲ့သည်။
            ထို့အပြင် မန္တလေးတွင် ဆိုင်ခွဲဖွင့်ကာ Alu-zinc Roofing Sheets၊
            Square Pipes၊ Angle Iron၊ Decking Sheets နှင့် အခြား
            အိမ်ဆောက်ပစ္စည်းများကို သက်သာစွာ ရောင်းချနေပါသည်။
          </p>
        </div>
      </section>

      {/* What You Can Hope & Trust */}
      <section className="w-full bg-gradient-to-b from-yellow-100 via-white to-yellow-50 px-6 md:px-20 py-12">
        {/* What You Can Hope */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-black font-jaro font-bold text-xl md:text-2xl">
                What You Can Hope
              </h2>
              <div className="flex-grow h-px bg-black"></div>
            </div>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              ခေတ်မှီဆန်းသစ်ပြီးခိုင်ခံ့လှပသောဘ၀များကိုပိုင်ဆိုင်နိုင်စေရန်
              အရည်အသွေးပြည့်မှီသောအိမ်ဆောက်ပစ္စည်းမျိုးစုံကို တစ်နေရာထဲတွင်
              စုံလင်စွာလက်လီလက်ကား ရောင်းချပေးနေပါသည်။
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/-3.jpg"
              alt="Factory"
              className="rounded-2xl shadow-md w-full md:w-4/5 h-72 md:h-96 object-cover"
            />
          </div>
        </div>

        {/* Why Should You Trust */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center">
            <img
              src="/images/shop4.jpg"
              alt="Color Zone"
              className="rounded-2xl shadow-md w-full md:w-4/5 h-72 md:h-96 object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-grow h-px bg-black"></div>
              <h2 className="text-black font-jaro font-bold text-xl md:text-2xl">
                Why Should You Trust
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              ပန်းသဇင်သည် မြန်မာနိုင်ငံအိမ်ဆောက်ပစ္စည်းဈေးကွက်တွင်
              အယုံကြည်ဆုံးနှင့် အောင်မြင်ဆုံးလုပ်ငန်းတစ်ခုဖြစ်သည်။
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="container mx-auto mb-16 px-4 md:px-6">
        <div className="text-center w-full mb-12 flex justify-center">
          <h3 className="font-jaro border rounded-4xl text-2xl mt-10 sm:text-3xl md:text-6xl p-4 md:p-5 text-zinc-800">
            Our Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center items-start">
          {/* Left */}
          <div className="space-y-10 md:space-y-16">
            <h3 className="font-jaro border rounded-4xl lg:mb-70 sm:text-xl md:text-2xl lg:text-3xl p-4 text-zinc-800">
              အရည်အသွေးပြည့်မှီခြင်း
            </h3>
            <h3 className="font-jaro border rounded-4xl sm:text-xl  md:text-2xl lg:text-3xl p-4 text-zinc-800">
              ပစ္စည်းစုံလင်ခြင်း
            </h3>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              className="rounded-4xl w-64 sm:w-72 md:w-80 lg:w-96 object-cover"
              src="./images/-18.jpg"
              alt="Services"
            />
          </div>

          {/* Right */}
          <div className="space-y-10 md:space-y-16">
            <h3 className="font-jaro border rounded-4xl sm:text-xl lg:mb-70 md:text-2xl lg:text-3xl p-4 text-zinc-800">
              ဈေးနှုန်းချိုသာခြင်း
            </h3>
            <h3 className="font-jaro border rounded-4xl sm:text-xl md:text-2xl lg:text-3xl p-4 text-zinc-800">
              စိတ်ကျေနပ်မှု အာမခံခြင်း
            </h3>
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <CompanyJourney />

      {/* Meet the Owner */}
      <section className=" bg-gradient-to-b from-yellow-100 via-white to-yellow-50">
        <section className="container pb-20 mx-auto px-4 ">
          {/* Title */}
          <div className="text-center w-full mb-12 flex justify-center ">
            <h3 className="font-jaro text-2xl mt-10 sm:text-3xl md:text-6xl tracking-wider p-4 md:p-5 text-zinc-800">
              MEET THE OWNER
            </h3>
          </div>

          {/* Mission - Image - Vision */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center items-start">
            {/* Left: Mission */}
            <div className="space-y-6 md:space-y-10">
              <div>
                <h3 className="font-jaro text-left text-xl md:text-2xl lg:text-3xl text-zinc-800">
                  Mission
                </h3>
                <hr className="border-2 border-zinc-950 w-20 my-2" />
                <p className="font-jaro text-left text-base md:text-lg lg:text-xl text-zinc-800">
                  To provide tailored legal solutions with compassion and
                  professionalism
                </p>
              </div>
              <img
                src="./images/shop4.jpg"
                className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover mx-auto rounded-3xl"
                alt="Mission"
              />
            </div>

            {/* Center: Owner Image */}
            <div className="flex justify-center items-center">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-4xl overflow-hidden bg-gray-100">
                <img
                  className="w-full h-full object-cover object-top"
                  src="./images/-3.jpg"
                  alt="Owner"
                />
              </div>
            </div>

            {/* Right: Vision */}
            <div className="space-y-6 md:space-y-10">
              {/* Mobile Image (shows only on small screens) */}
              <div className="flex justify-center md:hidden">
                <img
                  src="./images/-7.jpg"
                  className="w-40 h-40 object-cover rounded-3xl"
                  alt="Vision"
                />
              </div>

              {/* Text Section */}
              <div>
                <h3 className="font-jaro text-left text-xl md:text-2xl lg:text-3xl text-zinc-800">
                  Vision
                </h3>
                <hr className="border-2 border-zinc-950 w-20 my-2" />
                <p className="font-jaro text-left text-base md:text-lg lg:text-xl text-zinc-800">
                  To provide you best materials at reasonable price
                </p>
              </div>

              {/* Desktop Image (hidden on mobile) */}
              <div className="hidden md:flex justify-center">
                <img
                  src="./images/-7.jpg"
                  className="md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-3xl"
                  alt="Vision"
                />
              </div>
            </div>
          </div>

          {/* CEO Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 items-center">
            <h3 className="font-jaro text-zinc-900 text-3xl md:text-4xl">
              CEO @ Pan Tha Zin
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
