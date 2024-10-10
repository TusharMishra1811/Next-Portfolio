"use client";

import { skills1, skills2 } from "@/constants/index";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Skills = () => {
  return (
    <section id="skills" className="pt-20">
      <h1 className="heading">
        Tools &<span className="text-purple"> Technologies</span>
      </h1>

      <div className="flex flex-col items-center md:mt-10 max-lg:mt-10">
        <div className="h-[15vh] sm:h-[25vh] md:h-[15rem] rounded-md  antialiased  relative overflow-hidden">
          <InfiniteMovingCards items={skills1} direction="right" speed="slow" />
        </div>
        <div className="h-[15vh] sm:h-[25vh] md:h-[15rem] rounded-md antialiased relative overflow-hidden">
          <InfiniteMovingCards items={skills2} direction="left" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
