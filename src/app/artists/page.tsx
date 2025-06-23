"use client";
import { useState, useEffect } from "react";
import ArtistCard from "@/Components/ArtistCard";
import FilterBlock from "@/Components/FilterBlock";
import data from "@/data/artists.json";

export default function ArtistsPage() {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    price: "",
  });

  const [filtered, setFiltered] = useState(data);

  useEffect(() => {
    const result = data.filter((artist) => {
      return (
        (filters.category ? artist.category === filters.category : true) &&
        (filters.location ? artist.location === filters.location : true) &&
        (filters.price ? artist.price === filters.price : true)
      );
    });
    setFiltered(result);
  }, [filters]);

  const handleChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="min-h-screen w-full px-6 py-16 bg-gradient-to-br from-[#ffffff] via-[#f7f2ff] to-[#f0f0f0] relative overflow-hidden text-gray-800">
 
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-br from-pink-300 via-purple-400 to-fuchsia-500 opacity-20 rounded-full blur-[100px] z-0 animate-pulse" />
      <div className="absolute bottom-[-70px] right-[-70px] w-72 h-72 bg-gradient-to-br from-yellow-300 via-pink-400 to-orange-400 opacity-20 rounded-full blur-[100px] z-0 animate-pulse" />

    
      <header className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 bg-clip-text text-transparent drop-shadow-md tracking-tight">
          Book Magical Performers
        </h1>
        <p className="text-lg mt-4 max-w-xl mx-auto text-gray-600 font-medium animate-fade-in-slow">
          From soulful singers to energetic dancers — pick your vibe and make your event unforgettable.
        </p>
        <div className="w-28 h-1 mt-5 mx-auto bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 rounded-full shadow-md" />
      </header>

  
      <section className="max-w-4xl mx-auto mb-16 relative z-10 animate-slide-up">
        <div className="rounded-2xl border border-pink-200 bg-white/90 backdrop-blur-lg shadow-2xl p-6 transition duration-300 hover:border-pink-400">
          <h2 className="text-2xl font-bold text-pink-600 mb-5 flex items-center gap-2">
            🎛️ Customize Your Artist Search
          </h2>
          <FilterBlock filters={filters} onChange={handleChange} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 z-10 relative">
        {filtered.length > 0 ? (
          filtered.map((artist, index) => (
            <div
              key={artist.id}
              className="rounded-2xl bg-white bg-opacity-95 border border-purple-100 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 transform"
            >
              <ArtistCard
                name={artist.name}
                category={artist.category}
                location={artist.location}
                price={artist.price}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center mt-16 animate-fade-in">
            <p className="text-xl text-pink-600 font-semibold animate-bounce">
              😕 No artists found. Try changing the vibe!
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
