export default function Home() {
  return (
    <main className="bg-[#FFFDF9]">

      {/* ======================================
          NAVBAR
      ======================================= */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-orange-500 rounded-md"></div>
          <span className="text-xl font-semibold text-gray-900">ParentPath</span>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-gray-800 font-medium">Login</button>
          <button className="bg-orange-500 text-white px-5 py-2 rounded-xl font-medium hover:bg-orange-600 transition">
            Sign Up
          </button>
        </div>
      </nav>

      {/* ======================================
          HERO SECTION
      ======================================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">

          {/* Left Text */}
          <div>
            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              Nurture Every <br />
              Moment with <br />
              <span className="text-orange-500">Confidence</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Expert guidance, curated courses, and AI-powered
              insights to help you become the parent you want to be.
            </p>

            <button className="mt-8 bg-orange-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-orange-600 transition flex items-center gap-2">
              Get Started →
            </button>
          </div>

          {/* Right Illustration Box */}
          <div className="bg-white shadow-xl rounded-3xl p-12">
            <div className="flex flex-col gap-10">

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex justify-center items-center text-2xl">❤️</div>
                <div className="flex-1">
                  <div className="h-4 bg-orange-200 rounded-lg w-40 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded-lg w-28"></div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex justify-center items-center text-2xl">✨</div>
                <div className="flex-1">
                  <div className="h-4 bg-yellow-200 rounded-lg w-40 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded-lg w-28"></div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex justify-center items-center text-2xl">📈</div>
                <div className="flex-1">
                  <div className="h-4 bg-orange-200 rounded-lg w-40 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded-lg w-28"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ======================================
          FEATURES SECTION
      ======================================= */}
      <section className="py-24 bg-[#FFFDF9]">
        <div className="max-w-6xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-gray-900">
            Everything You Need to Thrive
          </h2>

          <p className="text-gray-600 mt-3 text-lg">
            Comprehensive tools designed for modern parenting
          </p>

          {/* Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-14 h-14 flex items-center justify-center bg-orange-100 rounded-xl mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                AI Guidance
              </h3>
              <p className="text-gray-600 mt-3">
                Get personalized advice and instant answers to your parenting
                questions with our intelligent AI assistant, available 24/7.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition border border-orange-200">
              <div className="w-14 h-14 flex items-center justify-center bg-yellow-100 rounded-xl mb-6">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Curated Parenting Courses
              </h3>
              <p className="text-gray-600 mt-3">
                Expert-designed courses covering every stage of your parenting journey,
                from newborn care to teenage years.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="w-14 h-14 flex items-center justify-center bg-orange-100 rounded-xl mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Monthly Progress Insights
              </h3>
              <p className="text-gray-600 mt-3">
                Track your learning journey and celebrate milestones with detailed
                progress reports and personalized recommendations.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
