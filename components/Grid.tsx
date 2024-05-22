/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import GridGlobe from "./ui/GridGlobe";

const Grid = () => {
  const leftLists = ["NextJS", "NestJS", "Prisma"];
  const rightLists = ["Rust", "Python", "Postgres"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "michkov.evgeny@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <section id="about">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full py-20">
        <div
          className="row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 select-none lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="h-full">
            <div className="w-full h-full absolute">
              <img
                src="/b1.svg"
                alt="/b1.svg"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-end">
              <div className="font-sans font-extralight md:max-w-52 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10"></div>
              <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                I prioritize client collaboration, fostering open communication
              </div>
            </div>
          </div>
        </div>

        <div
          className="row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 select-none lg:col-span-2 md:col-span-3 md:row-span-2"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="h-full">
            <div className="transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-start">
              <div className="font-sans font-extralight md:max-w-52 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10"></div>
              <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                Открыт к новым проектам со всего мира
              </div>
              <GridGlobe />
            </div>
          </div>
        </div>

        <div
          className="row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 select-none lg:col-span-2 md:col-span-3 md:row-span-2"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="h-full">
            <div className="transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-center">
              <div className="font-sans font-extralight md:max-w-52 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                К вершинам мастерства
              </div>
              <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                Стэк технологий
              </div>
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  {leftLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                </div>
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                  {rightLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 select-none lg:col-span-2 md:col-span-3 md:row-span-1"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="h-full">
            <div className="w-full h-full absolute">
              <img
                src="/grid.svg"
                alt="/grid.svg"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute right-0 -bottom-5">
              <img
                src="/b4.svg"
                alt="/b4.svg"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-start">
              <div className="font-sans font-extralight md:max-w-52 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10"></div>
              <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                Технический энтузиаст со страстью к разработке
              </div>
            </div>
          </div>
        </div>

        <div
          className="row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 select-none md:col-span-3 md:row-span-2"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="h-full">
            <div className="w-full h-full absolute">
              <img
                src="/b5.png"
                alt="/b5.png"
                className="absolute right-0 bottom-0 md:w-96 w-60 object-cover object-center"
              />
            </div>
            <div className="absolute right-0 -bottom-5 w-full opacity-80">
              <img
                src="/grid.svg"
                alt="/grid.svg"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-center md:justify-start lg:justify-center">
              <div className="font-sans font-extralight md:max-w-52 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                Внутренняя кухня
              </div>
              <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                Прямо сейчас разрабатываю VPN сервис Helios
              </div>
            </div>
          </div>
        </div>

        <div
          className="row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 select-none lg:col-span-2 md:col-span-3 md:row-span-1"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="h-full flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
              <BackgroundGradientAnimation />
            </div>
            <div className="transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-center md:max-w-full max-w-60 text-center">
              <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                Хотите начать работу вместе?
              </div>
              <div className="mt-5 relative">
                <div
                  className={`absolute -bottom-5 right-0 ${
                    copied ? "block" : "block"
                  }`}
                >
                  <Lottie options={defaultOptions} height={200} width={400} />
                </div>

                <MagicButton
                  title={copied ? "Почта скопирована!" : "Моя почта"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
