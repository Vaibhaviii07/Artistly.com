"use client";
import { useState } from "react";
import Table from "@/Components/Table";

const mockArtists = [
  { id: 1, name: "Riya Sharma", category: "Singer", city: "Mumbai", fee: "₹10,000" },
  { id: 2, name: "Arjun Mehta", category: "DJ", city: "Delhi", fee: "₹15,000" },
  { id: 3, name: "Neha Patel", category: "Dancer", city: "Ahmedabad", fee: "₹8,000" },
  { id: 4, name: "Kabir Roy", category: "Stand-up Comedian", city: "Bangalore", fee: "₹12,000" },
  { id: 5, name: "Ayesha Khan", category: "Magician", city: "Kolkata", fee: "₹9,500" },
  { id: 6, name: "Rahul Das", category: "Folk Singer", city: "Rajasthan", fee: "₹7,000" },
  { id: 7, name: "Simran Verma", category: "Bharatanatyam Dancer", city: "Chennai", fee: "₹11,000" },
  { id: 8, name: "Zoya Sheikh", category: "Influencer Host", city: "Hyderabad", fee: "₹14,000" },
  { id: 9, name: "Manish Bansal", category: "Anchor", city: "Pune", fee: "₹9,000" },
  { id: 10, name: "Tara Iyer", category: "Instrumentalist", city: "Goa", fee: "₹13,000" },
];

export default function ManagerDashboard() {
  const [artists, setArtists] = useState(mockArtists);

  const handleAction = (name: string) => {
    alert(`Viewing profile for ${name}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-10">
      <h1 className="text-3xl font-bold text-slate-700 mb-6">🎯 Manager Dashboard</h1>

      {artists.length > 0 ? (
        <Table data={artists} onAction={handleAction} />
      ) : (
        <p className="text-gray-500">No artist submissions yet.</p>
      )}
    </div>
  );
}
