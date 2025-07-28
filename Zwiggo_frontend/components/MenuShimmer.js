const MenuShimmer = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-6 px-4">
      {/* Restaurant name shimmer */}
      <div className="h-7 w-1/4 bg-gray-300 rounded mb-3 animate-pulse mx-auto" />
      <div className="h-4 w-1/3 bg-gray-200 rounded mb-6 animate-pulse mx-auto" />

      {/* Shimmer for multiple categories */}
      {Array(5).fill(0).map((_, catIndex) => (
        <div key={catIndex} className="mb-6">
          {/* Category title shimmer */}
          <div className="h-5 w-1/3 bg-gray-300 rounded mb-4 animate-pulse" />

          {/* Placeholder for 3 items in a category */}
          {Array(3).fill(0).map((_, itemIndex) => (
            <div
              key={itemIndex}
              className="flex justify-between items-start mb-5 animate-pulse"
            >
              {/* Left: Item details */}
              <div className="flex-1">
                <div className="h-4 w-2/3 bg-gray-300 rounded mb-2" />
                <div className="h-3 w-1/2 bg-gray-200 rounded mb-1" />
                <div className="h-3 w-1/3 bg-gray-200 rounded" />
              </div>

              {/* Right: Image placeholder */}
              <div className="w-20 h-20 bg-gray-200 rounded-lg ml-4" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuShimmer;
