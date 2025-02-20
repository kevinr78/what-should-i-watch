import { getIcon } from "@/config/icons";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

type RowProps = {
  title: string;
  children?: React.ReactNode;
  to?: string;
  type: string;
};

export default function Row({ title, children, to, type }: RowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Scroll Functions
  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden my-6 relative p-4 ">
      {/* Title */}
      <h2 className="text-2xl font-bold text-white mb-4 px-6">
        {title}

        <span className={`mx-4 ${type === "Cast" ? "hidden" : ""}`}>
          |
          <button
            className="btn btn-outline ml-4"
            onClick={() => {
              if (to) {
                navigate(to);
              }
            }}
          >
            View All
          </button>
        </span>
      </h2>

      <div className="relative flex items-center w-full">
        {/* Left Scroll Button */}
        <button
          className="absolute left-0 z-10 bg-black/60 p-2 text-white rounded-full hover:bg-black transition hidden md:block"
          onClick={scrollLeft}
        >
          <img src={getIcon("Previous")} alt="Previous" />
        </button>

        {/* Movie Row with Smooth Scroll */}
        <div
          ref={rowRef}
          className=" flex overflow-x-scroll  space-x-4 px-6 snap-x snap-mandatory scroll-smooth w-full"
        >
          {children}
        </div>

        {/* Right Scroll Button */}
        <button
          className="absolute right-0 z-10 bg-black/60 p-2 text-white rounded-full hover:bg-black transition hidden md:block"
          onClick={scrollRight}
        >
          <img src={getIcon("Next")} alt="Next" />
        </button>
      </div>
    </div>
  );
}
