import data from '../assets/data.json'

export default function Home() {
    
  return (
    <div className="flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text Content */}
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-[#b0bec5] text-lg">Hi all, I am</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {data.personalInfo.name}
            </h1>
            <p className="text-[#4dd0e1] text-xl font-mono">
              <span className="text-[#4dd0e1]">{">"}</span> {data.personalInfo.carrer}
            </p>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">About Me</h2>
            <p className="text-[#b0bec5] leading-relaxed text-lg">
              {data.about}
            </p>
          </div>

          {/* Contact Button */}
          {/* <div className="pt-4">
            <button className="bg-[#4dd0e1] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#26c6da] transition-colors duration-300">
              Get In Touch
            </button>
          </div> */}
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-[#4dd0e1] shadow-2xl">
              <img 
                src={data.personalInfo.profile} 
                alt={data.personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#4dd0e1] rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#ff6b6b] rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>

      </div>
    </div>
  )
}
