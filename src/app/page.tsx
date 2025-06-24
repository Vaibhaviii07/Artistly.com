import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Artistly – Book Talented Performers Across India</title>
        <meta
          name="description"
          content="India’s top platform to discover and book singers, dancers, DJs, and more. Join Artistly to shine at events, fests, and shows."
        />
        <meta property="og:title" content="Artistly – Book Performers" />
        <meta property="og:image" content="/stage2.jpg" />
      </Head>

      <main className="relative h-screen text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/stage2.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70" />

        <section className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
            Welcome to <span className="text-purple-400">Artistly 🎭</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-200">
            India’s premier platform for discovering & booking talented artists for your next event.
          </p>
          <Link
            href="/artists"
            className="mt-8 px-8 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition hover:shadow-xl"
          >
            🎨 Explore Artists
          </Link>
        </section>
      </main>

      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-3">
          Spotlight on Talent
        </h2>
        <p className="text-lg font-medium text-center text-gray-600 mb-12">
          Meet the stars redefining entertainment across India ✨
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Riya Sharma",
              role: "🎤 Vocalist",
              img: "/vocalist.jpg",
              quote: "My journey changed when I joined Artistly!",
            },
            {
              name: "Arjun Mehta",
              role: "🎧 DJ & Producer",
              img: "/dj.jpg",
              quote: "This platform got me booked for top college fests!",
            },
            {
              name: "Neha Patel",
              role: "💃 Dancer",
              img: "/dancer.jpg",
              quote: "Artistly gave me a stage and the spotlight.",
            },
          ].map((artist) => (
            <div
              key={artist.name}
              className="relative rounded-2xl overflow-hidden group bg-white shadow-xl hover:shadow-purple-300 transition duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={artist.img}
                  alt={`Photo of ${artist.name}`}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-extrabold text-gray-800">{artist.name}</h3>
                <p className="text-purple-600 font-semibold">{artist.role}</p>
                <p className="text-sm text-gray-600 mt-2 italic">“{artist.quote}”</p>
              </div>

              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400 group-hover:shadow-lg transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

    
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-purple-50 rounded-3xl shadow-xl px-8 py-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 font-serif">
              Are You an Artist?
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Got talent? Whether you sing, dance, mix beats or speak – Artistly is your launchpad to the spotlight.
            </p>
            <p className="text-gray-700 text-base">
              Perform at college fests, cultural nights, and corporate shows. Submit your profile today!
            </p>

            <Link
              href="/onboard"
              className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-700 transition duration-300"
            >
              🚀 Onboard as an Artist
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/band.jpg"
              alt="Live band performing"
              className="w-full max-w-sm rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
