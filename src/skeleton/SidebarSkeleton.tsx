import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SidebarSkeleton() {
  return (
    <aside className="w-64 border-l border-secondary-200 bg-white shadow-lg top-0 right-0 pt-20 overflow-y-auto h-full flex flex-col fixed">
      <h2 className="text-lg font-semibold text-gray-700 px-4 mb-4 text-center">
        <Skeleton width={120} height={24} />
      </h2>

      <ul className="space-y-2 px-4">
        <li className="px-4 py-2 rounded-lg bg-gray-200">
          <Skeleton width={100} height={20} />
        </li>

        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index} className="px-4 py-2 rounded-lg bg-gray-200">
            <Skeleton width={120} height={20} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
