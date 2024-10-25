import { Card, CardContent } from "@/components/ui/card";
import { CastMember } from "@/types";
export default function ActorCard({ actor }: { actor: CastMember }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4">
        {actor.profile_path ? (
          <img
            src={`http://image.tmdb.org/t/p/w185${actor.profile_path}`}
            alt={actor.name}
            className="w-full h-[200px] object-cover rounded-lg mb-2"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-[200px] bg-secondary rounded-lg mb-2 flex items-center justify-center">
            <span className="text-muted-foreground">No image</span>
          </div>
        )}
        <h4 className="font-semibold truncate">{actor.name}</h4>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {actor.character}
        </p>
      </CardContent>
    </Card>
  );
}
