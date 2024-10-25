import { Card, CardContent } from "@/components/ui/card";
import { TrendingMovie } from "@/types";

export default function MovieCard({ movie }: { movie: TrendingMovie }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
      <CardContent className="p-4 space-y-4">
        <div className="overflow-hidden rounded">
          <img
            src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold text-lg">{movie.title}</h2>

          <div className="flex items-center gap-2">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-medium">
              {movie.vote_average.toFixed(1)}
            </span>
            <span className="text-sm text-muted-foreground">
              {new Date(movie.release_date).getFullYear()}
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {movie.overview}
        </p>
      </CardContent>
    </Card>
  );
}
