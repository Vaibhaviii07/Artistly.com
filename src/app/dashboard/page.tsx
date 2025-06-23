"use client";
import { useState } from "react";
import Table from "@/Components/Table";

const mockArtists = [
  {
    id: 1,
    name: "Riya Sharma",
    category: "Singer",
    city: "Mumbai",
    fee: "₹10,000",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    category: "DJ",
    city: "Delhi",
    fee: "₹15,000",
  },
  {
    id: 3,
    name: "Neha Patel",
    category: "Dancer",
    city: "Ahmedabad",
    fee: "₹8,000",
  },
];

export default function ManagerDashboard() {
  const [artists, setArtists] = useState(mockArtists);

  const handleAction = (name: string) => {
    alert(`Viewing profile for ${name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">🎯 Manager Dashboard</h1>

      {artists.length > 0 ? (
        <Table data={artists} onAction={handleAction} />
      ) : (
        <p className="text-gray-500">No artist submissions yet.</p>
      )}
    </div>
  );
}
