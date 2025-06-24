import React from "react";

type Artist = {
  id: number;
  name: string;
  category: string;
  city: string;
  fee: string;
};

type Props = {
  data: Artist[];
  onAction: (name: string) => void;
};

export default function Table({ data, onAction }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl shadow-md bg-white border border-gray-200">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-slate-100 text-xs uppercase text-gray-500">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">City</th>
            <th className="px-6 py-4">Fee</th>
            <th className="px-6 py-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((artist) => (
              <tr
                key={artist.id}
                className="border-b hover:bg-blue-50 transition duration-200"
              >
                <td className="px-6 py-4 font-medium">{artist.name}</td>
                <td className="px-6 py-4">{artist.category}</td>
                <td className="px-6 py-4">{artist.city}</td>
                <td className="px-6 py-4">{artist.fee}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => onAction(artist.name)}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-1 px-3 rounded-lg transition duration-200"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-6 text-gray-500">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
