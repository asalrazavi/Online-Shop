import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function HeaderSkeleton() {
  return (
    <div className="flex justify-between py-4 px-8 bg-secondary-0 border-b border-secondary-200 top-0 fixed w-full col-span-5 z-20">
      <div className="flex items-center justify-start gap-x-4">
        <ul className="flex gap-x-4 items-center font-bold text-lg">
          <Skeleton width={60} height={24} />
          <Skeleton width={60} height={24} />
        </ul>
      </div>

      <div className="flex items-center justify-end gap-x-8">
        <Skeleton width={40} height={40} circle />
      </div>
    </div>
  );
}
