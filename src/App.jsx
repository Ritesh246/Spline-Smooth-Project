import Header from "./components/header";
import Hero from "./components/Hero";
import ImageCursor from "./components/ImageCursor";
import ScrollVelocity from "./components/ui/ScrollVelocity";
 import ProfileCard from './components/ui/ProfileCard'
export default function App() {
  const velocity = 20;
  return (
    <main>
      {/* Gradient image */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="Gradient background"
      />

      {/* Blur Effect */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>

      <Header />
      <Hero />
      <ScrollVelocity
        texts={["Ritesh Design Websites", "Scroll Down for more feel"]}
        velocity={velocity}
        className="custom-scroll-text text-white"
      />
      <br />
      <br />
      <div className="flex ">
        <div className='w-3/4' >
        <ImageCursor />
        </div>
    <div className="w-1/4">
        <ProfileCard
        className="w-1/4"
          name="Ritesh Sonawane"
          title="Software Engineer"
          handle="codes"
          status="Online"
          contactText="Contact Me"
          avatarUrl="https://avatars.githubusercontent.com/u/158686439?v=4"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
    </div>
        
      </div>
    </main>
  );
}
