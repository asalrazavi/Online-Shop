import { useSelector } from "react-redux";
import { RootState } from "../../services/store";

export default function CartContainer() {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  console.log(cartItems);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-800 text-white text-center">
              <th className="p-4">#</th>
              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Category</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {cartItems.map((item, index) => (
              <tr
                key={item.id}
                className="even:bg-gray-100 odd:bg-white hover:bg-gray-200 transition text-center"
              >
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{item.title}</td>
                <td className="p-4">${item.price}</td>
                <td className="p-4">{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
