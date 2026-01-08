import { Star, ChevronRight } from "lucide-react";

const RateNow = () => {
  return (
    <div
      className="
        flex items-center gap-3
        px-4 py-2
        rounded-xl
        bg-white/15 backdrop-blur-md
        text-white
        cursor-pointer
        hover:bg-white/25 transition
        w-fit
      "
    >
      {/* Star */}
      <Star size={20} fill="#FACC15" stroke="0" />

      {/* Rating Text */}
      <div className="flex items-center gap-1 text-sm md:text-base font-medium">
        <span className="text-lg font-semibold">9.3</span>
        <span className="text-gray-300">/10</span>
        <span className="text-gray-300 ml-1">(500K+ votes)</span>
      </div>

      {/* Arrow */}
      <ChevronRight size={22} className="text-gray-300" />
    </div>
  );
};

export default RateNow;
