import { Card, CardContent } from "@/components/ui/card";
import { TrendingMovie } from "@/types";

export default function MovieCard({ movie }: { movie: TrendingMovie }) {
  return (
    <Card>
      <CardContent className="p-4">
        <img
          src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-48 object-cover mb-2 rounded"
        />
        <h2 className="font-semibold text-center">{movie.title}</h2>
      </CardContent>
    </Card>
  );
}
