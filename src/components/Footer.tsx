import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const FacebookIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
);

function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="font-color-purple py-12 bg-footer"
      style={{
        minHeight: "420px",
        contentVisibility: "auto",
        containIntrinsicSize: "0 420px",
      }}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 1 — Logo */}
        <div>
          <img
            src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto,w_160/v1764279742/logo_cwxwjh.png"
            srcSet="
              https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto,w_160/v1764279742/logo_cwxwjh.png 1x,
              https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto,w_320/v1764279742/logo_cwxwjh.png 2x
            "
            alt="Pan Tha Zin Logo"
            width="80"
            height="80"
            loading="lazy"
            className="md:h-30 md:w-30 w-20 h-20 mb-3"
          />
          <p className="text-sm leading-relaxed">{t("footerDesc")}</p>
        </div>

        {/* Col 2 — Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t("contactUs")}</h3>

          <div className="flex items-start gap-2 mb-3">
            <Phone className="mt-1 w-4 h-4 shrink-0" aria-hidden="true" />
            <p className="text-sm">
              09750777260, 09750545775, 09750545778, 09787979377, 09256647406
            </p>
          </div>

          <div className="flex items-start gap-2 mb-3">
            <Mail className="mt-1 w-4 h-4 shrink-0" aria-hidden="true" />
            <p className="text-sm">pannthazin545775@gmail.com</p>
          </div>

          <div className="flex items-start gap-2 mb-3">
            <Clock className="mt-1 w-4 h-4 shrink-0" aria-hidden="true" />
            <p className="text-sm">7:30AM - 5:30PM</p>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="mt-1 w-4 h-4 shrink-0" aria-hidden="true" />
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

        {/* Col 3 — Contact Form + Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t("sendMessage")}</h3>
          <form
            action="https://getform.io/f/bxozzmma"
            method="POST"
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              name="username"
              placeholder={t("username")}
              aria-label={t("username")}
              className="flex-1 p-2 rounded-md text-neutral-700
                border border-color-purple focus:border-color-purple focus:ring-2
                placeholder-gray-400 bg-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("email")}
              aria-label={t("email")}
              className="flex-1 p-2 rounded-md text-neutral-700
                border border-color-purple focus:border-color-purple focus:ring-2
                placeholder-gray-400 bg-white"
              required
            />
            <textarea
              name="message"
              placeholder={t("yourMessage")}
              aria-label={t("yourMessage")}
              rows={3}
              className="flex-1 p-2 rounded-md text-neutral-700 resize-none
                border border-color-purple focus:border-color-purple focus:ring-2
                placeholder-gray-400 bg-white"
              required
            />
            <button
              type="submit"
              aria-label="Send message to Pan Tha Zin"
              className="border-color-purple text-black px-4 py-2 rounded-md
                hover:bg-yellow-300 transition font-semibold"
            >
              {t("send")}
            </button>
          </form>

          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=61567334876170&mibextid=ZbWKwL"
              aria-label="Pan Tha Zin on Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.tiktok.com/@pann.tha.zin.mdy?_t=ZS-8ylP2vYa1oK&_r=1"
              aria-label="Pan Tha Zin on TikTok"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-[#f5c800]">
        © {new Date().getFullYear()} Pan Tha Zin All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
