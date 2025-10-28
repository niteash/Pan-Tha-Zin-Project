import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTiktok,
  FaClock,
} from "react-icons/fa";

import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className=" font-color-purple py-12 bg-footer">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <div>
          <img
            src="/images/logo.png"
            alt="Logo"
            className="md:h-30 md:w-30 w-20 h-20 mb-3"
          />
          <p className="text-sm leading-relaxed">{t("footerDesc")}</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t("contactUs")}</h3>

          {/* Phone Numbers */}
          <div className="flex items-start gap-2 mb-3">
            <FaPhoneAlt className="mt-1" />
            <p className="text-sm">
              09750777260, 09750545775, 09750545778, 09787979377, 09256647406
            </p>
          </div>

          {/* Emails */}
          <div className="flex items-start gap-2 mb-3">
            <FaEnvelope className="mt-1" />
            <p className="text-sm">pannthazin545775@gmail.com</p>
          </div>
          {/* clock */}
          <div className="flex items-start gap-2 mb-3">
            <FaClock className="mt-1" />
            <p className="text-sm">7:30AM - 5:30PM</p>
          </div>

          {/* Addresses */}
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1" />
            <div className="text-sm space-y-2">
              <p>
                <strong>မန္တလေးဆိုင်ခွဲ:</strong> အ/17(61), 68 လမ်း 119
                လမ်းနှင့် 120 လမ်းကြား၊ ပြည်ကြီးတံခွန်မြို့နယ်။
              </p>
              <p>
                <strong>ဂိုဒေါင်:</strong> H-233, 139 လမ်း 52 လမ်းနှင့် 53
                လမ်းကြား၊ ပြည်ကြီးတံခွန်မြို့နယ်။
              </p>
              <p>
                <strong>မူဆယ်ဆိုင်ခွဲ (1):</strong> အမှတ်(တ/146) တောင်ရပ်ကွက်၊
                ဝီလ်ဘဲလမ်းကြား၊ မူဆယ်မြို့။
              </p>
              <p>
                <strong>မူဆယ်ဆိုင်ခွဲ (2):</strong> အမှတ်(ဟန/5)
                စိုးသစ္စာဆီဆိုင်အနောက်၊ ဘောလုံးကွင်းအနီး၊ မူဆယ်မြို့။
              </p>
            </div>
          </div>
        </div>

        {/* Send Us Message */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t("sendMessage")}</h3>
          <form
            action="https://getform.io/f/bxozzmma"
            method="POST"
            className="flex flex-col md:flex-col flex-wrap gap-3"
          >
            <input
              type="text"
              name="username"
              placeholder={t("username")}
              className="flex-1 p-2 rounded-md text-neutral-500 
       border border-color-purple focus:border-color-purple focus:ring-2
       placeholder-gray-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder={t("email")}
              className="flex-1 p-2 rounded-md text-neutral-500 
       border border-color-purple focus:border-color-purple focus:ring-2 
       placeholder-gray-500"
              required
            />

            <textarea
              name="message"
              placeholder={t("yourMessage")}
              rows="3"
              className="flex-1 p-2 rounded-md text-neutral-500 resize-none 
       border border-color-purple focus:border-color-purple focus:ring-2 
       placeholder-gray-500"
              required
            ></textarea>

            <button
              type="submit"
              className="border-color-purple text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition"
            >
              {t("send")}
            </button>
          </form>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=61567334876170&mibextid=ZbWKwL"
              className="hover:text-yellow-400"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://www.tiktok.com/@pann.tha.zin.mdy?_t=ZS-8ylP2vYa1oK&_r=1"
              className="hover:text-yellow-400"
            >
              <FaTiktok size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs mt-10 text-[#ffe694]">
        © {new Date().getFullYear()} Pan Tha Zin All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
