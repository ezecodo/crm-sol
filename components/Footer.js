import Link from "next/link";
import { FaShoppingCart, FaUsers, FaBox } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white">
      <div className="flex justify-around p-4">
        <Link href="/ventas">
          <span className="flex flex-col items-center cursor-pointer">
            <FaShoppingCart /> Ventas
          </span>
        </Link>
        <Link href="/stock">
          <span className="flex flex-col items-center cursor-pointer">
            <FaBox /> Stock
          </span>
        </Link>
        <Link href="/clientes">
          <span className="flex flex-col items-center cursor-pointer">
            <FaUsers /> Clientes
          </span>
        </Link>
      </div>
    </footer>
  );
}
