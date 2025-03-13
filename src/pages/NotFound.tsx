import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

export default function NotFound() {
  const moveBack: () => void = useMoveBack();
  return (
    <div className="flex justify-center items-center h-screen container">
      <div className="sm:max-w-sm flex justify-center items-center pt-10 flex-col">
        <h1 className="text-xl font-bold text-secondary-700 mb-8">
          صفحه‌ای که دنبال آن بودید پیدا نشد!
        </h1>
        <button onClick={moveBack} className="flex items-center gap-x-2">
          <HiArrowRight className="w-6 h-6 text-primary-900" />
          <span className="text-primary-900">برگشت</span>
        </button>
      </div>
    </div>
  );
}
