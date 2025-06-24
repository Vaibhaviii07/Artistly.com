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
    <div className="min-h-screen w-full px-6 py-16 bg-gradient-to-br from-[#f7fafc] via-[#e0f2fe] to-[#f0fdfa] text-gray-800 relative overflow-hidden">
      {/* Blurred Blobs Background */}
      <div className="absolute top-[-100px] left-[-80px] w-96 h-96 bg-gradient-to-br from-sky-300 via-indigo-300 to-teal-200 opacity-20 rounded-full blur-[100px] z-0 animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-100px] w-96 h-96 bg-gradient-to-tr from-teal-300 via-blue-300 to-cyan-200 opacity-20 rounded-full blur-[100px] z-0 animate-pulse" />

      {/* Heading */}
      <header className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-700 via-teal-500 to-indigo-400 bg-clip-text text-transparent tracking-tight animate-fade-in-slow">
          🎤 Discover Incredible Performers
        </h1>
        <p className="text-lg mt-4 max-w-xl mx-auto text-gray-600 font-medium animate-fade-in-slow">
          From soothing soloists to full-band energy — find artists that match your vibe and elevate your event.
        </p>
        <div className="w-20 h-1 mt-5 mx-auto bg-gradient-to-r from-sky-400 via-teal-400 to-indigo-400 rounded-full shadow-md" />
      </header>

      {/* Filter Block */}
      <section className="max-w-5xl mx-auto mb-20 relative z-10">
        <div className="rounded-2xl border border-sky-100 bg-white/80 backdrop-blur-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-slate-700 mb-5 flex items-center gap-2">
            🎛️ Filter Artists
          </h2>
          <FilterBlock filters={filters} onChange={handleChange} />
        </div>
      </section>

      {/* Artist Cards */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative z-10">
        {filtered.length > 0 ? (
          filtered.map((artist) => (
            <div
              key={artist.id}
              className="rounded-2xl bg-white/90 border border-gray-100 shadow-md hover:shadow-teal-300 hover:scale-[1.03] transition-all duration-300 transform backdrop-blur-sm"
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
          <div className="col-span-full text-center mt-16">
            <p className="text-xl text-sky-600 font-semibold animate-pulse">
              😕 No artists match your vibe right now.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Tip: Reset filters or explore different categories.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
