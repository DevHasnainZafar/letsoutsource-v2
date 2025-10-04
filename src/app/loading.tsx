export default function GlobalLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 px-4">
      <div className="text-center flex flex-col items-center justify-center">
        <div className="relative mb-6">
          <div className="w-20 h-20 border-4 border-orange-200 rounded-full"></div>
          <div className="w-20 h-20 border-4 border-transparent border-t-orange-500 rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
        <div className="flex justify-center items-center space-x-1 mb-6">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Loading Page</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Preparing your content...
        </p>
      </div>
    </div>
  );
}
