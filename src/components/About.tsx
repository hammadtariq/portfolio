import { forwardRef, useRef } from "react";
import { Code, Smartphone, Server } from "lucide-react";

const About = forwardRef<HTMLElement>((_props, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    // Pause and reset the video
    if (videoRef.current) {
      videoRef.current.pause();
       // Reset to the start if wants to play again
      // videoRef.current.currentTime = 0;
    }

    // Open video in a new tab
    window.open('/intro.mp4', '_blank');
  };

  const handleMouseEnter = () => {
    videoRef.current?.play(); // Play the video on hover
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause(); // Pause the video when the mouse leaves
    // Reset the video if wants to play again
    // videoRef.current!.currentTime = 0;
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Profile Section */}
        <div className="flex justify-center mb-8">
          <div
            className="relative w-40 h-40 md:w-48 md:h-48 group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Profile Image */}
            <img
              src="/profile-dp-small.png" // Replace with your profile picture path
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-blue-600 group-hover:opacity-0 transition-opacity"
            />
            {/* Profile Video */}
            <video
              ref={videoRef}
              src="/intro-compressed.mp4" // Replace with your video path
              className="absolute inset-0 w-full h-full rounded-full object-cover border-4 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
              loop
            />
            {/* Play Icon Overlay */}
            <a
              href="/intro.mp4"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleVideoClick} // Click handler stops video and opens in new tab
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-100 transition-opacity group-hover:opacity-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                className="w-10 h-10"
              >
                <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
              </svg>
            </a>
            {/* Verified Badge */}
            {/* Uncomment if needed */}
            {/* <div className="absolute bottom-0 right-0 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center border-2 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m2-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div> */}
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Code size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p>
              Expertise in React, Angular, and modern JavaScript frameworks.
            </p>
          </div>
          <div className="text-center">
            <Smartphone size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
            <p>Creating responsive and native mobile applications.</p>
          </div>
          <div className="text-center">
            <Server size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Backend & Cloud</h3>
            <p>Proficient in Node.js and AWS cloud services.</p>
          </div>
        </div>

        <p className="mt-12 text-lg text-center max-w-3xl mx-auto">
          With over a decade of experience in the ever-evolving world of web and
          mobile development, I've honed my skills to deliver cutting-edge
          solutions that drive business growth and user engagement. My passion
          lies in creating seamless, efficient, and scalable applications that
          make a real impact.
        </p>
      </div>
    </section>
  );
});

About.displayName = "About";
export default About;
