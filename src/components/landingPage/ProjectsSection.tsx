/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from "react";
import { CustomAnimatedCard } from "../CustomAnimatedCard";

const ProjectsSection = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category: any) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="relative bg-black px-10 md:px-24 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark mt-20 md:-mt-64">
      <div className="absolute h-full w-full top-0 md:-top-36 left-0">
          <img src="/bluebg.webp" className="h-full w-full" />
        </div>
      <div className="absolute opacity-80 h-full w-full bg-black top-0 md:-top-36 left-0"></div>
        <div className="container mx-auto z-20">
          <div className="flex flex-wrap -mx-4 z-20">
            <div className="w-full px-4 z-20">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2 className="text-white mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-white text-base dark:text-white-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4 z-20">
            <div className="w-full px-4 z-20">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1 ">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-white text-black"
                        : "inactiveClasses text-white dark:text-white-6 hover:bg-white hover:text-black"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("branding")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "branding"
                        ? "activeClasses bg-white text-white"
                        : "inactiveClasses text-white dark:text-white-6 hover:bg-white hover:text-black"
                    }`}
                  >
                    Branding
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("design")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-white text-white"
                        : "inactiveClasses text-white dark:text-white-6 hover:bg-white hover:text-black"
                    }`}
                  >
                    Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("marketing")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses bg-white text-white"
                        : "inactiveClasses text-white dark:text-white-6 hover:bg-white hover:text-black"
                    }`}
                  >
                    Marketing
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("development")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-white text-white"
                        : "inactiveClasses text-white dark:text-white-6 hover:bg-white hover:text-black"
                    }`}
                  >
                    Development
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 z-20">
            <CustomAnimatedCard 
            ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
            category="Branding"
            title="Creative Agency"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
            />
            <CustomAnimatedCard 
            ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
            category="marketing"
            title="Creative Agency"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
            />
            <CustomAnimatedCard 
           ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
           category="marketing"
           title="Creative Agency"
           button="View Details"
           buttonHref="#"
           showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}: any) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 z-20 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-black mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-black dark:text-white mb-5 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              className="text-black dark:text-white-6 hover:border-white hover:bg-white inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-black"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
