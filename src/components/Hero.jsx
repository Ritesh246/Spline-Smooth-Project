import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
import SplitText from "./ui/HandleAnimationComplete";

function Hero() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <main className="flex text-white lg:mt-20 flex-col lg:flex-row items-center lg:items-start justify-between min-h-[calc(90vh-6rem)] px-4 lg:px-0">
      {/* Left Content */}
      <div className="max-w-xl ml-0 lg:ml-[5%] z-10 mt-8 lg:mt-0 order-2 lg:order-1">
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-sm">
            <i className="bx bx-diamond "></i> INTRODUCING
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          <SplitText
            text="EMAIL FOR"
            className="sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider "
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          
          <SplitText
            text="DEVELOPERS"
            className="sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider"
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          
        </h1>
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel expedita
          voluptates necessitatibus repellendus autem ratione fugiat pariatur
          quod voluptatum omnis neque reiciendis consequatur corrupti repellat,
          praesentium distinctio accusamus totam velit maxime veritatis aliquam
          nesciunt? Rerum quisquam quas eos?
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] text-center"
          >
            Documentation
            <i className="bx bx-link-external ml-2"></i>
          </a>
          <a
            href="#"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white text-center"
          >
            Get Started
            <i className="bx bx-link-external ml-2"></i>
          </a>
        </div>
      </div>

      {/* Right Spline Component */}
      <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[600px] order-1 lg:order-2 -mt-20 lg:mt-0">
        <div className="absolute inset-0 transform lg:translate-y-[-20%]">
          <Spline scene="https://prod.spline.design/7Yi346fnWNNGuWaS/scene.splinecode" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
