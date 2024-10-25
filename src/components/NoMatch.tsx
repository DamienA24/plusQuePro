import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Home, Film } from "lucide-react";

export default function NoMatch() {
  return (
    <div className="flex-grow container mx-auto p-4 flex flex-col items-center justify-center text-center">
      <Film className="h-24 w-24 text-muted-foreground mb-8" />
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-xl text-muted-foreground mb-8">
        Oops! It looks like the scene you're looking for has been cut from our
        reel.
      </p>
      <Link to="/">
        <Button size="lg" className="gap-2">
          <Home className="h-5 w-5" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
