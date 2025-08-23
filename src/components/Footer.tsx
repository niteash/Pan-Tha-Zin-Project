import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTiktok,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-yellow-200 py-12">
      <div
        className="
          container mx-auto px-6 
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10
        "
      >
        {/* Left: Logo + Description */}
        <div className="space-y-4 text-center md:text-left">
          <img
            src="./images/logo.png"
            alt="Logo"
            className="mx-auto md:mx-0 w-28 h-28"
          />
          <p className="text-sm leading-relaxed">
            မြန်မာပြည်သူပြည်သားတိုင်း ခေတ်မှီဆန်းသစ်ပြီးခိုင်ခံ့လှပတဲ့
            ဘ၀တွေကိုပိုင်ဆိုင်နိုင်စေဖို့အရည်အသွေးပြည့်မှီတဲ့အိမ်ဆောက်ပစ္စည်းများဖြင့်
            ကျွန်‌တော်တို့ပန်းသဇင်
            အိမ်ဆောက်ပစ္စည်းဆိုင်မှတာ၀န်ယူဆောင်ရွက်ပေးပါရစေ ခင်ဗျာ
          </p>
        </div>

        {/* Middle: Contact Form */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-center md:text-left">
            Send us a Message
          </h3>
          <form
            method="POST"
            action="https://getform.io/f/azynxvyb"
            className="space-y-4"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
                className="w-full p-2 rounded-md text-black border border-yellow-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                required
                className="w-full p-2 rounded-md text-black border border-yellow-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Hi!"
                required
                className="w-full p-2 rounded-md text-black border border-yellow-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none resize-y min-h-28"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Contact & Socials */}
        <div className="flex flex-col gap-6 text-sm text-center md:text-left">
          {/* Phones */}
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <FaPhoneAlt className="text-yellow-400 shrink-0" />
              <span>09750777260</span>
            </div>
            <div className="pl-8">09750545775</div>
            <div className="pl-8">09750545778</div>
            <div className="pl-8">09787979377</div>
            <div className="pl-8">09256647406</div>
          </div>

          {/* Opening hours */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaClock className="text-yellow-400 shrink-0" />
            <span>7:30 AM - 5:30 PM</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaEnvelope className="text-yellow-400 shrink-0" />
            <span className="break-all">pannthazin545775@gmail.com</span>
          </div>

          {/* Addresses */}
          <div>
            <div className="flex mt-3 items-start gap-2 justify-center md:justify-start">
              <FaMapMarkerAlt className="text-yellow-400 shrink-0 mt-1" />
              <div className="flex flex-col gap-1 text-left">
                <span>
                  မန္တလေးဆိုင်ခွဲ-အ/17(61), 68 လမ်း 119လမ်းနှင့် 120လမ်းကြား၊
                  ပြည်ကြီးတံခွန်မြို့နယ်
                </span>
                <span>
                  ဂိုဒေါင်H-233, 139လမ်း 52လမ်းနှင့် 53 လမ်းကြား၊
                  ပြည်ကြီးတံခွန်မြို့နယ်
                </span>
                <span>
                  မူဆယ်ဆိုင်ခွဲ(1) အမှတ်(တ/146) တောင်ရပ်ကွက်၊ ဝီလ်ဘဲလမ်းကြား၊
                  မူဆယ်မြို့
                </span>
                <span>
                  မူဆယ်ဆိုင်ခွဲ(2) အမှတ်(ဟန/5) စိုးသစ္စာဆီဆိုင်အနောက်၊
                  ဘောလုံးကွင်းအနီး၊ မူဆယ်မြို့
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-4 text-lg justify-center md:justify-start">
            <a
              href="https://www.facebook.com/profile.php?id=61567334876170&mibextid=ZbWKwL"
              className="hover:text-yellow-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.tiktok.com/@pann.tha.zin.mdy?_t=ZS-8ylP2vYa1oK&_r=1"
              className="hover:text-yellow-400"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
