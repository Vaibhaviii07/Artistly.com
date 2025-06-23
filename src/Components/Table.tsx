import { FiEye } from "react-icons/fi";

type Artist = {
  id: number;
  name: string;
  category: string;
  city: string;
  fee: string;
};

export default function Table({
  data,
  onAction,
}: {
  data: Artist[];
  onAction: (name: string) => void;
}) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-full bg-white shadow-2xl rounded-xl border border-purple-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 text-left">Artist</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">City</th>
              <th className="px-6 py-4 text-left">Fee</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {data.map((artist, index) => (
              <tr
                key={artist.id}
                className="hover:bg-purple-50 transition-all duration-200"
              >
                <td className="px-6 py-4 flex items-center gap-4 font-semibold text-gray-800">
                 
                  <div className="w-10 h-10 bg-purple-100 text-purple-700 font-bold flex items-center justify-center rounded-full shadow">
                    {artist.name.charAt(0).toUpperCase()}
                  </div>
                  {artist.name}
                </td>

                <td className="px-6 py-4 text-gray-600">{artist.category}</td>
                <td className="px-6 py-4 text-gray-600">{artist.city}</td>
                <td className="px-6 py-4 text-purple-700 font-medium">{artist.fee}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => onAction(artist.name)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 shadow-lg transition duration-300 text-sm"
                  >
                    <FiEye />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
