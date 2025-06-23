import React from "react";

type Props = {
  name: string;
  category: string;
  location: string;
  price: string;
};

const ArtistCard = ({ name, category, location, price }: Props) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
    <h3 className="text-xl font-bold text-gray-800">{name}</h3>
    <p className="text-purple-600">{category}</p>
    <p className="text-sm text-gray-600">📍 {location}</p>
    <p className="text-sm text-gray-600">💰 {price}</p>
    <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
      Ask for Quote
    </button>
  </div>
);

export default ArtistCard;
