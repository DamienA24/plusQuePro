import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, Calendar, Clock, ArrowLeft } from "lucide-react";

import Spinner from "@/components/Spinner";
import MovieMetadata from "@/components/MovieMetadata";
import LoadingError from "@/components/LoadingError";
import ActorCard from "@/components/ActorCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { API_ENDPOINTS } from "@/config/api.config";
import { MovieDetails, Credits } from "@/types";
import { useTMDB } from "@/hooks/useTMDB";

export default function MoviePage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const {
    data: movie,
    error: movieError,
    isLoading: isLoadingMovie,
  } = useTMDB<MovieDetails>(API_ENDPOINTS.movie(id ?? ""));

  const {
    data: credits,
    error: creditsError,
    isLoading: isLoadingCredits,
  } = useTMDB<Credits>(API_ENDPOINTS.cast(id ?? ""));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoadingMovie || isLoadingCredits) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (movieError || creditsError || !movie) {
    return <LoadingError />;
  }

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="container mx-auto p-4 py-8">
      <Button
        variant="ghost"
        className="mb-6 hover:bg-transparent"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-6 h-6 mr-2" />
        Back
      </Button>
      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        <div className="space-y-4">
          <img
            src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full rounded-lg shadow-lg"
          />

          <div className="space-y-2">
            <MovieMetadata
              icon={Calendar}
              label="Release Date"
              value={new Date(movie.release_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            />
            <MovieMetadata
              icon={Clock}
              label="Runtime"
              value={formatRuntime(movie.runtime)}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {movie.genres?.map((genre: any) => (
                <Badge key={genre.id} variant="secondary">
                  {genre.name}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-yellow-400 w-6 h-6" />
              <span className="text-xl font-semibold">
                {movie.vote_average.toFixed(1)}/10
              </span>
              <span className="text-sm text-muted-foreground">
                ({movie.vote_count.toLocaleString()} votes)
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p className="text-lg leading-relaxed">{movie.overview}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Main Cast</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {credits?.cast.slice(0, 10).map((actor: any) => (
                <ActorCard key={actor.id} actor={actor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
