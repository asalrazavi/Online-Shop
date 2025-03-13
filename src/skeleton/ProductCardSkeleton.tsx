import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductCardSkeleton() {
  return (
    <div className="border border-gray-300 bg-white shadow-lg py-6 px-4 rounded-xl flex flex-col items-center gap-y-3">
      <Skeleton width={170} height={200} />
      <Skeleton width={80} height={24} containerClassName="self-end" />
      <Skeleton width={120} height={24} containerClassName="self-end" />
      <Skeleton width={170} height={40} />
    </div>
  );
}
