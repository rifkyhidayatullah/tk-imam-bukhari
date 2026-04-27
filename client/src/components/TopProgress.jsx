import { useEffect, useState } from "react";

function TopProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        (window.pageYOffset / total) * 100;

      setWidth(progress);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[999]">
      <div
        className="h-full bg-gold transition-all duration-200"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default TopProgress;