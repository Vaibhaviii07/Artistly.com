export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Artistly. All rights reserved.</p>
        <p className="text-xs mt-2">
          Built with 💜 by aspiring talents for emerging stars.
        </p>
      </footer>
  );
}
