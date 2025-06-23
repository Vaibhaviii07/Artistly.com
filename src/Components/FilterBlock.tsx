import React from "react";

type Props = {
  filters: {
    category: string;
    location: string;
    price: string;
  };
  onChange: (key: string, value: string) => void;
};

const FilterBlock = ({ filters, onChange }: Props) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
    <select
      className="border p-2 rounded"
      value={filters.category}
      onChange={(e) => onChange("category", e.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Vocalist">Vocalist</option>
      <option value="DJ">DJ</option>
      <option value="Dancer">Dancer</option>
    </select>

    <select
      className="border p-2 rounded"
      value={filters.location}
      onChange={(e) => onChange("location", e.target.value)}
    >
      <option value="">All Locations</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Delhi">Delhi</option>
      <option value="Bangalore">Bangalore</option>
    </select>

    <select
      className="border p-2 rounded"
      value={filters.price}
      onChange={(e) => onChange("price", e.target.value)}
    >
      <option value="">All Price Ranges</option>
      <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
      <option value="₹7,000 - ₹15,000">₹7,000 - ₹15,000</option>
      <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
    </select>
  </div>
);

export default FilterBlock;
