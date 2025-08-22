import { Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Opacity } from "@mui/icons-material";

function Home() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // pause at current time
      } else {
        videoRef.current.play(); // continue from paused time
      }
      setIsPlaying(!isPlaying);
    }
  };

  const imageLoadedHandler = () => {
    setImageLoaded(true);
  };

  return (
    <section className="flex flex-grow flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-custom h-full relative min-h-screen flex overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-bold gradient font-jaro text-7xl mt-15 md:mt-5 md:text-7xl md:w-full leading-tight">
            BUILD YOUR <br /> DREAM <br /> WITH US
          </h2>
          <p className="mt-10 md:mt-5 text-lg text-gray-200 font-bold leading-9 max-w-2xl tracking-wide">
            အရည်အသွေးပြည့်မှီသော အိမ်ဆောက်ပစ္စည်းမျိုးစုံကိုတစ်နေရာထဲတွင် စုံလင်
            စွာဖြင့် လက်လီလက်ကား ထုတ်လုပ်ဖြန့်ဖြူးရောင်းချပေးနေပါသည်...
          </p>
          <button className="mt-15 md:mt-5 bg-amber-400 hover:bg-amber-200 text-black px-6 py-3 rounded-full font-bold shadow-lg transition">
            GET QUOTE
          </button>

          {/* Background Image */}
          <div className="relative mt-55 md:mt-90">
            {!imageLoaded && (
              <div className="animate-pulse absolute inset-0 rouded-md bg-gray-200"></div>
            )}
            <img
              src="./images/house.webp"
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] md:w-[105%] max-w-none object-cover z-0 transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              alt="House"
              onLoad={imageLoadedHandler}
            />
          </div>
        </div>
      </section>

      {/* Next Section */}
      <section className="bg-white">
        <section className="py-10 container mx-auto px-6">
          {/* heading */}
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-black font-jaro text-3xl md:text-5xl font-bold">
              WHAT WE ARE?
            </h2>
            <div className="flex-grow h-px bg-zinc-900"></div>
          </div>

          {/* card-video */}

          <div className="relative rounded-3xl overflow-hidden shadow-lg mb-8 h-[400px] md:h-[500px]">
            <video
              ref={videoRef}
              src="/videos/HomeVideo.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              playsInline
            />

            {/* Play Demo Button */}

            <button
              onClick={handleToggle}
              className="absolute bottom-4 right-4 flex items-center gap-2 border border-white text-white px-4 py-2 rounded-full backdrop-blur-md bg-black/20 hover:bg-black/30 transition"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              <span className="text-sm">
                {isPlaying ? "Pause" : "Play"} Demo
              </span>
            </button>
          </div>

          {/* Description */}

          <p className="text-lg text-gray-700 leading-relaxed">
            ကျွန်တော်တို့ Nom & Naw Pann Tha Zin Company Ltd. ကို မူဆယ်မြို့မှာ
            ၂၀၁၁ ခုနှစ်မှာ စတင်တည်ထောင်ခဲ့ပါတယ်။
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            ပထမဆုံး သွပ်ပြားစက်ရုံကို တည်ဆောက်ခဲ့ပြီးအရည်အ‌သွေးပြည့်မှီတဲ့
            ကုန်ကြမ်းပစ္စည်းများကိုတင်သွင်းထုတ်လုပ်ပြီး
            customerများရဲ့လိုအပ်ချက်များကို ကောင်းမွန်သော၀န်ဆောင်မှုများဖြင့်
            ဖြည့်ဆည်း‌‌ပေးနိုင်ခဲ့ခြင်းကြောင့် တစ်ဖြည်းဖြည်းအောင်မြင်လာခဲ့ပါတယ်။
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            မူဆယ်မြို့မှာတော့ ကျွန်တော်တို့ရဲ့ ကိုယ်ပိုင်အမှတ်တံဆိပ်ဖြစ်တဲ့ N&N
            Exterior & Interior Putty နဲ့ N&N Plywood တို့ကို
            ထုတ်လုပ်ခဲ့ပြီး၊အရည်အသွေးကောင်းမွန်တဲ့ပစ္စည်းတွေနဲ့ customer
            များ၏ယုံကြည်မှုကို တည်ဆောက်နိုင်ခဲ့လို့ မူဆယ်မြို့မှာ လူသိများတဲ့
            အမှတ်တံဆိပ်တစ်ခု ဖြစ်လာခဲ့ပါတယ်။
          </p>

          <button className="bg-amber-400 mt-8 hover:bg-amber-200 text-black px-6 py-3 rounded-full rounded-full font-bold shadow-md transition ">
            <Link to="/about">Learn More</Link>
          </button>
        </section>
      </section>
    </section>
  );
}

export default Home;
