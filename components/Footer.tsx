/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaAt, FaFile, FaGithub, FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <BackgroundBeams className="left-0 bottom-0 h-[32rem]" />

      <div className="flex flex-col items-center gap-4 md:gap-0">
        <h1 className="heading lg:max-w-[45vw]">
          Готовы вывести <span className="text-purple">ваш</span> продукт на
          новый цифровой уровень?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Свяжитесь со мной, чтобы обсудить детали и начать работу вместе.
        </p>
        <div className="flex gap-4">
          <a href="mailto:michkov.evgeny@gmail.com">
            <MagicButton
              title="Написать мне"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a href="/Резюме_Мичков_Евгений_Владимирович.pdf" download>
            <MagicButton title="Резюме" icon={<FaFile />} position="right" />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col-reverse justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light my-4 md:my-0">
          © 2020-2024 Евгений Мичков
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <Link
            href="https://links.michkoff.com"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <img src="/brand/m.svg" alt="links" className="w-4 h-4" />
          </Link>
          <Link
            href="https://github.com/ParzivalEugene"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaGithub className="text-white-100" />
          </Link>
          <Link
            href="https://t.me/parzival_eugene"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaTelegramPlane className="text-white-100" />
          </Link>
          <Link
            href="mailto:michkov.evgeny@gmail.com"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaAt className="text-white-100" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
