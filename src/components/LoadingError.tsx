export default function LoadingError() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">An error occurred</h2>
        <p className="text-muted-foreground">Unable to load data</p>
      </div>
    </div>
  );
}
