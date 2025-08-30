function About() {
  return (
    <section
      className="bg-white px-4 "
      style={{
        background: `
      radial-gradient(circle at left center, #FFF5D1 0%, white 40%),
      radial-gradient(circle at right center, #FFF5D1 0%, white 40%)
    `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "50% 100%, 50% 100%", // left half, right half
        backgroundPosition: "left center, right center",
      }}
    >
      {/* Parent */}
      <section className="flex container mx-auto flex-col gap-12 items-center">
        {/* First Row */}
        <section className="flex flex-col sm:flex-row items-center mt-10 justify-center sm:justify-between w-full max-w-4xl gap-6">
          <div>
            <img
              src="/images/shop1.jpg"
              alt="shop1"
              className="w-40 h-32 sm:w-52 sm:h-40 lg:w-[250px] lg:h-[200px] rounded-3xl object-cover"
            />
          </div>
          <div className="text-center">
            <span
              style={{
                background: "linear-gradient(to right, #ccc, #000, #ccc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Jaro, sans-serif",
                fontSize: "5rem",
                fontWeight: "bold",
                display: "inline-block",
              }}
              className="font-jaro text-zinc-800 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center mx-auto"
            >
              EVOLUTION <br />{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #ccc, #000, #ccc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Jaro, sans-serif",
                  fontSize: "5rem",
                  fontWeight: "bold",
                  display: "inline-block",
                }}
              >
                OF
              </span>
            </span>
          </div>
          <div>
            <img
              src="/images/shop2.jpg"
              alt="shop2"
              className="w-32 h-28 sm:w-44 sm:h-36 lg:w-[180px] lg:h-[150px] rounded-3xl object-cover"
            />
          </div>
        </section>

        {/* Second Row */}
        <section className="flex flex-col sm:flex-row items-center mb-10 justify-center sm:justify-between w-full max-w-4xl gap-6">
          <div>
            <img
              src="/images/shop3.jpg"
              alt="shop3"
              className="w-32 h-28 sm:w-44 sm:h-36 lg:w-[180px] lg:h-[150px] rounded-3xl object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="font-jaro font-color-purple text-zinc-800 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-center mx-auto">
              ပန်းသဇင်
            </h3>
          </div>
          <div>
            <img
              src="/images/shop4.jpg"
              alt="shop4"
              className="w-32 h-28 sm:w-44 sm:h-36 lg:w-[180px] lg:h-[150px] rounded-3xl object-cover"
            />
          </div>
        </section>
      </section>

      {/* text */}
      <section className="container mx-auto px-6">
        <div className="text-zinc-800 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <h3 className="">
                     ပန်းသဇင်" အိမ်ဆောက်ပစ္စည်းလုပ်ငန်းကို     မတည်ရင်းနှီးငွေ
            သိန်း ၁၅၀ ဖြင့် အစပိုင်းတွင် ဆိုင်ခန်းအသေးစားဖြင့်
            စတင်လည်ပတ်ခဲ့သည်။  တရုတ်ပြည်သို့ ကိုယ်တိုင်သွားရောက်၍
            ကုန်ပစ္စည်းများ၀ယ်ယူခြင်း၊ အတင်အချလုပ်ငန်းစဉ်များကို လေ့လာခြင်းနှင့်
            အိမ်ဆောက်ပစ္စည်းဆိုင်ရာ နည်းပညာများကို လေ့လာသင်ယူပြီး မူဆယ်မြို့တွင်
            ဆိုင်ဖွင့်လှစ်ခဲ့သည်။  ထို့အပြင် အကို့ဆိုင်တွင် သွပ်ကြိတ်သည့်အတတ်ပညာ
            ကို လေ့လာခဲ့ကာ သွပ်စက်အဟောင်းတစ်လုံးကို အရစ်ကျဖြင့် ၀ယ်ယူပြီး
            သွပ်လုပ်ငန်းကို စတင်ခဲ့သည်။  ပထမဆိုင်အောင်မြင်မှုကိုအခြေခံကာ
            ဒုတိယမြောက်ဆိုင်ခွဲကို ၂၀၁၂ တွင် ဖွင့်လှစ်နိုင်ခဲ့သည်။  ၂၀၁၄ တွင်
            ကိုယ်ပိုင်ဂိုထောင် ဖွင့်လှစ်ကာ ကုန်ပစ္စည်းများကို
            စနစ်တကျသိုလှောင်နိုင်ခဲ့သည်။  သွပ်ကုန်ကြမ်းများနှင့်
            အခြားသောထုတ်ကုန်များစွာကိုတစ်‌‌ေနရာထဲတွင်ထိန်းသိမ်းနိုင်ခြင်းဖြင့်
            ဖောက်သည်လိုအပ်ချက်ကို အချိန်နှင့်တစ်ပြေးညီ ဖြည့်ဆည်းနိုင်လာသည်။
          </h3>
          <h3 className="">
            သွပ်စက်အဟောင်းအပြင် အခြားသော သွပ်စက်အသစ်များ ၀ယ်ယူပြီး လုပ်ငန်း၏
            အဓိကထုတ်ကုန်ဖြစ်သော
            သွပ်လုပ်ငန်း၏ထုတ်လုပ်မှုစွမ်းရည်ကိုတိုးမြှင့်နိုင်ခဲ့သည်။ 
            ယုံကြည်ရသော အရည်အသွေးနှင့်ကောင်းမွန်‌ သော၀န်ဆာင်မှုများ ကြောင့်
            ဈေးကွက်ကိုလွှမ်းမိုးနိုင် သောလုပ်ငန်းတစ်ခုဖြစ်လာကာ
            တတ်ယမြောက်ဆိုင်ကို ၂၀၁၉တွင်ဖွင့်လှစ်နိုင်ခဲ့သည်။ ၂၀၂၃တွင် Interior
            and exterior putty ကို အရည်အသွေးမြင့် ကုန်ကြမ်းများအသုံးပြု၍ N&N
            အမည်ဖြင့် ထုတ်လုပ်ဖြန့်ချီခဲ့ပါသည်။ 3*6 အထပ်သား N&N plywood 10mm
            နှင့် 12mmကိုလည်းထုတ်လုပ်ဖြန့်ချီခဲ့ပါသည်။ 2014တွင်
            မန္တလေးမြို့တွင်ဆိုင်ခွဲဖွင့်လှစ်နိုင်ခဲ့သည်။မန္တလေးမြို့တွင်အဓိကအနေဖြင့်
            ကာလာသွပ်ပြားများ(Alu-zinc Roofing sheets)နဲ့ square pipe များကို
            အထူးလျှော့စျေးနဲ့၊ ပစ္စည်းမှန် ဈေးတန်စွာ လက်လီလက်ကားရောင်းချနေပါသည်။
            ထို့အပြင် Angle Iron bar၊I been ၊H been၊Decking
            sheet၊ဘိလပ်‌‌ေမြ၊Exportသံ‌ချောင်းများနှင့်
            အခြား‌သောအိမ်ဆောက်ပစ္စည်းအမျိုးမျိုး၊ရေချိုးခန်းသုံးပစ္စည်းအမျိုးမျိုးကိုလည်းတစ်နေရာတည်းမှာ
            အဆင်ပြေစွာ ဈေးနှုန်းသက်သာစွာဖြင့် ဝယ်ယူနိုင်အောင် စီစဉ်ထားပါသည်။
          </h3>
        </div>
      </section>
    </section>
  );
}

export default About;
