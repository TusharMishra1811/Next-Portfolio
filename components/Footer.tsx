"use client";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5 mt-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
        height={24}
        width={24}
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <div className="flex gap-5 flex-wrap">
          <MagicButton
            title="Github"
            icon={<FaGithub size={24} />}
            position="right"
            handleClick={() =>
              window.open("https://github.com/TusharMishra1811")
            }
          />

          <MagicButton
            title="LinkedIn"
            icon={<FaLinkedin size={24} />}
            position="right"
            handleClick={() =>
              window.open("https://www.linkedin.com/in/tushar8/")
            }
          />

          <MagicButton
            title="Twitter"
            icon={<FaTwitter size={24} />}
            position="right"
            handleClick={() => window.open("https://x.com/TusharMishra897")}
          />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Tushar Mishra
        </p>
      </div>
    </footer>
  );
};

export default Footer;
