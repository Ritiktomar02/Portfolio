import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> StudyNotion</h3>
              <p className="text-gray-400 mb-4">
              Developed a fully functional ed-tech platform that enables users to create, consume, and rate educational content.
              </p>
              

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Ritiktomar02/StudyNotion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">CaptureX</h3>
              <p className="text-gray-400 mb-4">
              Implemented a full-stack social media platform using ReactJS, NodeJS, ExpressJS, and
              MongoDB, enabling seamless user interaction.
              </p>
              
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Ritiktomar02/Insta_Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Youtube UI-Clone</h3>
              <p className="text-gray-400 mb-4">
              Fetched dynamic video content using Google Cloud API, enabling features like auto-
              complete search, trending videos, and related video suggestions.
              </p>
              
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Ritiktomar02/Youtube-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Random-Gif</h3>
              <p className="text-gray-400 mb-4">
              A GIF generator that allows users to generate random GIFs or search for specific ones.
              </p>
              
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/Ritiktomar02/Random-gif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
