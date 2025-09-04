import { useState } from "react";

interface ZoomImageProps {
  src: string;
  alt: string;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src, alt }) => {
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setBackgroundPosition("50% 50%")}
      className="w-full h-[450px] overflow-hidden rounded-lg shadow-lg cursor-zoom-in"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "200%", // zoom level
        backgroundPosition: backgroundPosition,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* invisible img keeps accessibility */}
      <img
        src={src}
        alt={alt}
        className="opacity-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default ZoomImage;
