const Shimmer = () => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 max-w-7xl mx-auto">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="bg-white animate-pulse rounded-2xl shadow-lg overflow-hidden border border-gray-200"
        >
          {/* Image block */}
          <div className="h-48 bg-gray-300 w-full" />

          {/* Text placeholders */}
          <div className="p-4 space-y-4">
            <div className="h-5 bg-gray-200 rounded w-2/3" />
            <div className="h-4 bg-gray-100 rounded w-1/2" />
            <div className="h-4 bg-gray-100 rounded w-3/4" />
          </div>

          {/* Footer (like ratings and delivery time) */}
          <div className="flex items-center justify-between px-4 pb-4">
            <div className="h-4 w-10 bg-gray-200 rounded" />
            <div className="h-4 w-16 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
