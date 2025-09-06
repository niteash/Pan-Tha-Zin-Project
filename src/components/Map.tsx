import { useLanguage } from "../context/LanguageContext";

function Map() {
  const { t } = useLanguage();
  return (
    <section
      className="py-16 px-4 bg-white"
      style={{
        background: "radial-gradient(circle at center, #FFF5D1 0%, white 40%)",
      }}
    >
      <div className=" container mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-black font-jaro text-3xl md:text-5xl font-bold">
            {t("MapTitle")}
          </h2>
          <div className="flex-grow h-px bg-zinc-900"></div>
        </div>

        {/* Centered larger map */}
        <div className="overflow-hidden rounded-3xl shadow-lg mx-auto w-full max-w-xl ">
          <iframe
            title="Our Location"
            aria-label="Map showing our location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.9565005708237!2d97.89808088377575!3d23.997313123073514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x372e07d7fda70ec3%3A0x4092d34fdd0cae48!2z4YCV4YCU4YC64YC44YCe4YCH4YCE4YC6IOGAoeGAreGAmeGAuuGAhuGAseGArOGAgOGAuiDhgJXhgIXhgLnhgIXhgIrhgLrhgLgg4YCG4YCt4YCv4YCE4YC6!5e0!3m2!1sen!2sin!4v1755843033697!5m2!1sen!2sin"
            className="w-full h-80 md:h-96 rounded-3xl border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Map;
