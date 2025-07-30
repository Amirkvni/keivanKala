import { useState, useMemo } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa6";
import { priceFormatter } from "@/utils/priceFormatter ";
export default function ProductsTable({ selected, setSelected, allProducts }) {
  const [products] = useState(allProducts);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [searchQuery, setSearchQuery] = useState("");

  const handleSort = (key, direction = null) => {
    if (direction) {
      setSortConfig({ key, direction });
    } else {
      if (sortConfig.key !== key) {
        setSortConfig({ key, direction: "asc" });
      } else if (sortConfig.direction === "asc") {
        setSortConfig({ key, direction: "desc" });
      } else {
        setSortConfig({ key: null, direction: null });
      }
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

  const sortedProducts = useMemo(() => {
    const sorted = [...products].sort((a, b) => {
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
    return sorted;
  }, [products, sortConfig]);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return sortedProducts;
    return sortedProducts.filter((product) =>
      product.persianName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedProducts]);

  const toggleSelectAll = (e) => {
    setSelected(e.target.checked ? products.map((p) => p._id) : []);
  };

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <>
      <div className="my-6 flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
        <input
          type="text"
          placeholder="جستجو"
          className="px-4 py-2 w-40 md:w-52 lg:w-64 rounded-lg border border-gray-300 focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-0 cursor-pointer"
          onChange={(e) => handleSort("price", e.target.value)}
        >
          <option value="">مرتب‌سازی قیمت</option>
          <option value="desc">گران‌ترین</option>
          <option value="asc">ارزان‌ترین</option>
        </select>

        <select
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-0 cursor-pointer"
          onChange={(e) => handleSort("stock", e.target.value)}
        >
          <option value="">مرتب‌سازی موجودی</option>
          <option value="asc">کم‌ترین</option>
          <option value="desc">بیشترین</option>
        </select>

        <select
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-0 cursor-pointer"
          onChange={(e) => handleSort("sales", e.target.value)}
        >
          <option value="">مرتب‌سازی فروش</option>
          <option value="asc">کم‌ترین</option>
          <option value="desc">بیشترین</option>
        </select>
      </div>

      <table className="w-full border-collapse text-right">
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
              onClick={() => handleSort("persianName")}
            >
              محصول {getSortIcon("persianName")}
            </th>
            <th
              className="p-2 cursor-pointer text-center"
              onClick={() => handleSort("price")}
            >
              قیمت {getSortIcon("price")}
            </th>
            <th
              className="p-2 cursor-pointer text-center"
              onClick={() => handleSort("stock")}
            >
              موجودی {getSortIcon("stock")}
            </th>
            <th
              className="p-2 cursor-pointer text-center"
              onClick={() => handleSort("sales")}
            >
              فروش {getSortIcon("sales")}
            </th>
            <th className="p-2 text-center">ویرایش</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr
              key={product._id}
              className="border-b hover:bg-gray-50 border-gray-300"
            >
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selected.includes(product._id)}
                  onChange={() => toggleSelect(product._id)}
                />
              </td>
              <td className="p-2 flex items-center gap-3">
                <img
                  src={product.mainImage}
                  alt={product.englishFullName}
                  className="w-10 h-10 object-cover rounded"
                />
                <div>
                  <div className="font-medium">{product.persianName}</div>
                  <div className="text-xs text-gray-500">
                    {product.englishFullName}
                  </div>
                </div>
              </td>
              <td className="p-2">{priceFormatter(product.price)}</td>
              <td className="p-2">
                <div className="text-sm">{product.stock} تا</div>
                <div className="bg-gray-200 h-2 rounded mt-1">
                  <div
                    className={`h-full rounded ${
                      product.stock < 500 ? "bg-red-500" : "bg-green-500"
                    }`}
                    style={{ width: `${Math.min(product.stock / 12, 100)}%` }}
                  ></div>
                </div>
              </td>
              <td className="p-2 text-center">{product.sales}</td>
              <td className="p-2 flex gap-2 justify-center">
                <FaEdit className="text-blue-500 cursor-pointer" />
                <FaTrash className="text-red-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
