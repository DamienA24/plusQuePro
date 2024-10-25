import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto">
        <Link
          to="/"
          className="text-2xl font-bold hover:opacity-80 transition-opacity inline-block"
        >
          TMDB
        </Link>
      </div>
    </header>
  );
}
