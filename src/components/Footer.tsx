import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted mt-8 sticky bottom-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="h-full flex items-center justify-center">
          <p className="text-gray-600 flex items-center gap-2">
            Created with <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
            using
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              TMDB
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
