import { ReactTyped } from "react-typed";
import HeroBg from "./body_hero.webp";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        style={{ backgroundImage: `url(${HeroBg})` }}
        className={`mobile-hero-height md:section-height mx-auto flex items-center justify-items-start bg-black bg-[length:90%_auto] bg-fixed bg-[100%_10vh] bg-no-repeat md:max-w-2xl md:bg-[length:80%_auto] md:bg-[100%_10vh] lg:max-w-4xl lg:bg-[length:auto_100%] widescreen:lg:bg-[length:auto_90%] widescreen:lg:bg-[70%_100%]`}
      >
        <h1 className="flex flex-col gap-6 p-4 *:tracking-[0.4rem] lg:gap-6">
          <span className="font-primary text-[20vw] leading-[20vw] text-primary md:text-9xl">
            MATRIX
          </span>
          <span className="font-primary text-[15vw] leading-[15vw] md:text-8xl">
            FITNESS
          </span>
          <ReactTyped
            className="font-primary text-[12vw] leading-[12vw] text-gray-500 md:text-7xl"
            strings={["EAT", "WORKOUT", "SLEEP", "REPEAT"]}
            typeSpeed={50}
            backSpeed={50}
            loop
          ></ReactTyped>
        </h1>
      </section>
    </>
  );
};

export default Hero;
