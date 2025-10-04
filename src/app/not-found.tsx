import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-[#FE9C00] to-amber-500 bg-clip-text text-transparent">
              404
            </span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FE9C00] to-amber-500 mx-auto rounded-full"></div>
        </div>
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-3">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Sorry, we couldn't find the page you're looking for. The resource
            may have been moved, deleted, or you entered an incorrect URL.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3 bg-[#FE9C00] hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FE9C00] focus:ring-offset-2"
          >
            Return Home
          </Link>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Need help?{" "}
            <Link
              href="/contact"
              className="text-[#FE9C00] hover:text-amber-600 font-medium transition-colors duration-200"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
