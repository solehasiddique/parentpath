export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden font-sans text-gray-800 flex flex-col">

        {/* ---------------- HEADER (FIXED + OUTSIDE CONTAINER) ---------------- */}
        <header
          className="
            container
            mx-auto
            px-6
            py-6
            flex
            justify-between
            items-center
            fixed
            top-0
            left-0
            right-0
            z-50
            bg-gradient-to-b
            from-white/80
            to-white/0
            backdrop-blur-md
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-2 animate-fade-in-down">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart w-8 h-8 text-orange-500 animate-pulse"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-800">
              ParentPath
            </span>
          </div>

          {/* Right side buttons */}
          <div className="flex gap-4 animate-fade-in-down">
            {/* Login */}
            <button className="px-6 py-2 text-gray-700 hover:text-orange-600 transition-smooth font-medium relative group">
              Login
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></div>
            </button>

            <button className="px-6 py-2 bg-orange-500 text-white rounded-lg font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.07] hover:bg-orange-600 active:scale-95">
  Sign Up
</button>

          </div>
        </header>

        {/* ---------------- MAIN CONTENT ---------------- */}
        <main className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 flex-grow">

          {/* ---------------- HERO SECTION ---------------- */}
          <section className="container mx-auto px-0 py-32 pt-43">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                   <span className="text-[rgb(17,24,39)]">
                  Nurture Every Moment with
                  </span>
                  <span className="block text-parent-orange mt-2">
                    Confidence
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Expert guidance, curated courses, and AI-powered insights to help you become the parent you want to be.
                </p>

               <button className="group px-8 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 text-lg font-semibold flex items-center gap-2 w-fit animate-fade-in-up active:scale-95">
  <span>Get Started</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
</button>

              </div>

           {/* Right Card Section */}
<div className="relative">
  <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl blur-3xl opacity-30"></div>

  <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-orange-100
      animate-fade-in-up stagger-item-1
      transition-all duration-300 ease-out
      hover:shadow-[0_20px_50px_rgba(255,150,80,0.25)] hover:border-orange-200">

    <div className="space-y-8">

      {/* ITEM 1 */}
      <div className="flex items-center gap-4 group/item
          transition-all duration-300 ease-out
          hover:translate-x-3">

        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full 
            flex items-center justify-center shadow-sm
            transition-all duration-300 ease-out
            group-hover/item:scale-110 group-hover/item:shadow-md">

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-heart w-8 h-8 text-orange-500
            transition-all duration-300 ease-out group-hover/item:scale-110">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </div>

        <div className="flex-1">
          <div className="h-4 bg-orange-200 rounded w-3/4 mb-2
              transition-all duration-300 ease-out group-hover/item:bg-orange-300"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2
              transition-all duration-300 ease-out group-hover/item:bg-gray-300"></div>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="flex items-center gap-4 group/item
          transition-all duration-300 ease-out
          hover:translate-x-3">

        <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full 
            flex items-center justify-center shadow-sm
            transition-all duration-300 ease-out
            group-hover/item:scale-110 group-hover/item:shadow-md">

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-sparkles w-8 h-8 text-amber-500
            transition-all duration-300 ease-out group-hover/item:scale-110">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
            <path d="M5 3v4"/>
            <path d="M19 17v4"/>
            <path d="M3 5h4"/>
            <path d="M17 19h4"/>
          </svg>
        </div>

        <div className="flex-1">
          <div className="h-4 bg-amber-200 rounded w-2/3 mb-2
              transition-all duration-300 ease-out group-hover/item:bg-amber-300"></div>
          <div className="h-3 bg-gray-200 rounded w-1/3
              transition-all duration-300 ease-out group-hover/item:bg-gray-300"></div>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="flex items-center gap-4 group/item
          transition-all duration-300 ease-out
          hover:translate-x-3">

        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full 
            flex items-center justify-center shadow-sm
            transition-all duration-300 ease-out
            group-hover/item:scale-110 group-hover/item:shadow-md">

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-trending-up w-8 h-8 text-orange-500
            transition-all duration-300 ease-out group-hover/item:scale-110">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
            <polyline points="16 7 22 7 22 13"/>
          </svg>
        </div>

        <div className="flex-1">
          <div className="h-4 bg-orange-200 rounded w-5/6 mb-2
              transition-all duration-300 ease-out group-hover/item:bg-orange-300"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3
              transition-all duration-300 ease-out group-hover/item:bg-gray-300"></div>
        </div>
      </div>

    </div>
  </div>
</div>

            </div>
          </section>

          {/* ---------------- FEATURES ---------------- */}
          <section className="container mx-auto px-6 py-20 animate-fade-in-up">
            <div className="text-center mb-16 animate-fade-in-up margin-bottom: 4rem;">

             <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Thrive
              </h2>

              <p className="text-xl text-gray-600">
                Comprehensive tools designed for modern parenting
                </p>
                </div>

              <div className="grid md:grid-cols-3 gap-8">
{/* Feature 1 */}
<div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 
transition-all duration-300 ease-out 
hover:shadow-2xl hover:border-orange-300 hover:-translate-y-2 hover:bg-orange-50/20">

  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl 
  flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20
  transition-all duration-300 ease-out
  group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-orange-500/40">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      className="w-7 h-7 text-white transition-all duration-300 ease-out">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/>
      <path d="M19 17v4"/>
      <path d="M3 5h4"/>
      <path d="M17 19h4"/>
    </svg>
  </div>

  <h3 className="text-2xl font-bold mb-3 text-left">AI Guidance</h3>
  <p className="text-gray-600 text-left">
    Get personalized advice and instant answers to your parenting questions.
  </p>

  <div className="mt-6 pt-6 border-t border-gray-100 
  opacity-0 group-hover:opacity-100 
  transition-all duration-300 ease-out">

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5 text-orange-500 
      transition-all duration-300 ease-out 
      group-hover:translate-x-1">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  </div>
</div>



{/* Feature 2 */}
<div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 
transition-all duration-300 ease-out 
hover:shadow-2xl hover:border-orange-300 hover:-translate-y-2 hover:bg-orange-50/20">

  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl 
  flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20
  transition-all duration-300 ease-out
  group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-amber-500/40">

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-7 h-7 text-white transition-all duration-300 ease-out">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  </div>

  <h3 className="text-2xl font-bold mb-3 text-left">Curated Parenting Courses</h3>
  <p className="text-gray-600 text-left">
    Expert-designed courses covering every stage of your parenting journey.
  </p>

  <div className="mt-6 pt-6 border-t border-gray-100 
  opacity-0 group-hover:opacity-100 
  transition-all duration-300 ease-out">

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5 text-orange-500 
      transition-all duration-300 ease-out 
      group-hover:translate-x-1">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  </div>
</div>



{/* Feature 3 */}
<div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 
transition-all duration-300 ease-out 
hover:shadow-2xl hover:border-orange-300 hover:-translate-y-2 hover:bg-orange-50/20">

  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl 
  flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20
  transition-all duration-300 ease-out
  group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-orange-500/40">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      className="w-7 h-7 text-white transition-all duration-300 ease-out">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/>
      <path d="M19 17v4"/>
      <path d="M3 5h4"/>
      <path d="M17 19h4"/>
    </svg>
  </div>

  <h3 className="text-2xl font-bold mb-3 text-left">Monthly Progress Insights</h3>
  <p className="text-gray-600 text-left">
    Track your learning journey with monthly reports & recommendations.
  </p>

  <div className="mt-6 pt-6 border-t border-gray-100 
  opacity-0 group-hover:opacity-100 
  transition-all duration-300 ease-out">

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5 text-orange-500 
      transition-all duration-300 ease-out 
      group-hover:translate-x-1">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  </div>
</div>
              </div>
          </section>

          {/* ---------------- CTA ---------------- */}
          <section className="py-20">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-parent-orange text-white p-16 rounded-3xl text-center shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                  Begin Your Journey Today
                </h2>
                <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                  Join thousands of parents who are building stronger connections and growing with confidence.
                </p>
                <button className="group/btn px-10 py-5 bg-white text-orange-600 rounded-xl hover:bg-orange-50 
transition-all duration-300 ease-out 
hover:shadow-2xl hover:shadow-white/50 text-lg font-bold flex items-center gap-3 mx-auto 
active:scale-95 hover:scale-110">
  Get Started Free
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="lucide lucide-arrow-right w-6 h-6 group-hover/btn:translate-x-2 transition-all duration-300 ease-out">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
</button>

              </div>
            </div>
          </section>

          {/* ---------------- FOOTER ---------------- */}
          <footer className="container mx-auto px-6 py-12 border-t border-gray-200">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-up">
    
    {/* Left Side - Logo */}
    <div className="flex items-center gap-2 group">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-6 h-6 text-orange-500 group-hover:animate-pulse">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
      <span className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-smooth">
        ParentPath
      </span>
    </div>

    {/* Right Side - Text */}
    <p className="text-gray-600 hover:text-gray-900 transition-smooth text-center md:text-right">
      © 2025 ParentPath. Empowering parents, nurturing families.
    </p>

  </div>
</footer>


        </main>
      </div>
    </>
  );
}
