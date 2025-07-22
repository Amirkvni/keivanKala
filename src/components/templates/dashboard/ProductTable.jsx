import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa6";

const sampleProducts = [
  {
    id: "P001",
    title: "Echoes Necklace",
    price: 990,
    quantity: 52,
    sales: 1145,
    image: "/images/necklace.jpg",
  },
  {
    id: "P002",
    title: "Ektöra",
    price: 8690,
    quantity: 30,
    sales: 978,
    image: "/images/table.jpg",
  },
  {
    id: "P003",
    title: "Flörven",
    price: 6250,
    quantity: 46,
    sales: 387,
    image: "/images/chair.jpg",
  },
  {
    id: "P004",
    title: "Nordic Lamp",
    price: 1250,
    quantity: 23,
    sales: 654,
    image: "/images/lamp.jpg",
  },
  {
    id: "P005",
    title: "Retro Watch",
    price: 4590,
    quantity: 17,
    sales: 234,
    image: "/images/watch.jpg",
  },
  {
    id: "P006",
    title: "Classic Bookshelf",
    price: 13490,
    quantity: 10,
    sales: 119,
    image: "/images/bookshelf.jpg",
  },
  {
    id: "P007",
    title: "Modern Clock",
    price: 730,
    quantity: 65,
    sales: 921,
    image: "/images/clock.jpg",
  },
  {
    id: "P008",
    title: "Desk Organizer",
    price: 340,
    quantity: 120,
    sales: 3401,
    image: "/images/organizer.jpg",
  },
  {
    id: "P009",
    title: "Leather Wallet",
    price: 1860,
    quantity: 78,
    sales: 1045,
    image: "/images/wallet.jpg",
  },
  {
    id: "P010",
    title: "Bluetooth Speaker",
    price: 2890,
    quantity: 44,
    sales: 762,
    image: "/images/speaker.jpg",
  },
  {
    id: "P011",
    title: "Minimal Vase",
    price: 640,
    quantity: 35,
    sales: 355,
    image: "/images/vase.jpg",
  },
  {
    id: "P012",
    title: "Canvas Painting",
    price: 9250,
    quantity: 12,
    sales: 97,
    image: "/images/painting.jpg",
  },
  {
    id: "P013",
    title: "Silk Scarf",
    price: 1120,
    quantity: 95,
    sales: 1243,
    image: "/images/scarf.jpg",
  },
  {
    id: "P014",
    title: "Gaming Mouse",
    price: 3690,
    quantity: 29,
    sales: 818,
    image: "/images/mouse.jpg",
  },
  {
    id: "P015",
    title: "Wooden Tray",
    price: 520,
    quantity: 64,
    sales: 503,
    image: "/images/tray.jpg",
  },
  {
    id: "P016",
    title: "Notebook Set",
    price: 210,
    quantity: 135,
    sales: 3125,
    image: "/images/notebook.jpg",
  },
  {
    id: "P017",
    title: "Yoga Mat",
    price: 2590,
    quantity: 41,
    sales: 689,
    image: "/images/yogamat.jpg",
  },
  {
    id: "P018",
    title: "Travel Mug",
    price: 880,
    quantity: 76,
    sales: 1014,
    image: "/images/mug.jpg",
  },
  {
    id: "P019",
    title: "Desk Plant",
    price: 430,
    quantity: 58,
    sales: 738,
    image: "/images/plant.jpg",
  },
  {
    id: "P020",
    title: "Smart Ring",
    price: 9990,
    quantity: 7,
    sales: 82,
    image: "/images/ring.jpg",
  },
];

export default function ProductsTable({ selected, setSelected }) {
  const [products, setProducts] = useState(sampleProducts);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSort = (key) => {
    if (sortConfig.key !== key) {
      setSortConfig({ key, direction: "asc" });
    } else if (sortConfig.direction === "asc") {
      setSortConfig({ key, direction: "desc" });
    } else {
      setSortConfig({ key: null, direction: null });
    }
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key)
      return <FaSort className="inline text-gray-400" />;
    if (sortConfig.direction === "asc") return <FaSortUp className="inline" />;
    if (sortConfig.direction === "desc")
      return <FaSortDown className="inline" />;
    return <FaSort className="inline text-gray-400" />;
  };

  const sortedProducts = [...products].sort((a, b) => {
    const { key, direction } = sortConfig;
    if (!key || !direction) return 0;
    return direction === "asc"
      ? a[key] > b[key]
        ? 1
        : -1
      : a[key] < b[key]
      ? 1
      : -1;
  });

  const toggleSelectAll = (e) => {
    setSelected(e.target.checked ? products.map((p) => p.id) : []);
  };

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <table className="w-full border-collapse text-right ">
      <thead>
        <tr className="bg-gray-100 text-sm">
          <th className="p-2">
            <input
              type="checkbox"
              checked={selected.length === products.length}
              onChange={toggleSelectAll}
            />
          </th>
          <th
            className="p-2 cursor-pointer"
            onClick={() => handleSort("title")}
          >
            محصول {getSortIcon("title")}
          </th>
          <th
            className="p-2 cursor-pointer"
            onClick={() => handleSort("price")}
          >
            قیمت {getSortIcon("price")}
          </th>
          <th
            className="p-2 cursor-pointer"
            onClick={() => handleSort("quantity")}
          >
            مقدار {getSortIcon("quantity")}
          </th>
          <th
            className="p-2 cursor-pointer"
            onClick={() => handleSort("sales")}
          >
            فروش {getSortIcon("sales")}
          </th>
          <th className="p-2 text-center">ویرایش</th>
        </tr>
      </thead>
      <tbody>
        {sortedProducts.map((product) => (
          <tr key={product.id} className="border-b hover:bg-gray-50">
            <td className="p-2">
              <input
                type="checkbox"
                checked={selected.includes(product.id)}
                onChange={() => toggleSelect(product.id)}
              />
            </td>
            <td className="p-2 flex items-center gap-3">
              <img
                src={product.image}
                alt={product.title}
                className="w-10 h-10 object-cover rounded"
              />
              <div>
                <div className="font-medium">{product.title}</div>
                <div className="text-xs text-gray-500">
                  کد محصول: {product.id}
                </div>
              </div>
            </td>
            <td className="p-2">{product.price.toLocaleString()} تومان</td>
            <td className="p-2">{product.quantity}</td>
            <td className="p-2">
              <div className="text-sm">{product.sales} فروش</div>
              <div className="bg-gray-200 h-2 rounded mt-1">
                <div
                  className={`h-full rounded ${
                    product.sales < 500 ? "bg-red-500" : "bg-green-500"
                  }`}
                  style={{ width: `${Math.min(product.sales / 12, 100)}%` }}
                ></div>
              </div>
            </td>
            <td className="p-2 flex gap-2 justify-center">
              <FaEdit className="text-blue-500 cursor-pointer" />
              <FaTrash className="text-red-500 cursor-pointer" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
