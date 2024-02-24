/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function CustomAnimatedCard({
  showCard,
  ImageHref,
  category,
  title,
  button,
  buttonHref,
}: any) {
  return (
    <div className={`px-4 mt-5 min-h-[50vh] md:w-1/2 xl:w-1/3 z-20 ${
      showCard === "all" || showCard === category.toLowerCase()
        ? "block"
        : "hidden"
    }`}>
      <PinContainer
        title={button}
        href={buttonHref}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
        <h1 className="max-w-xs !pb-2 !m-0 text-md text-black">
        {category}
        </h1>
          <img src={ImageHref} alt="portfolio" className="w-full aspect-video" />
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
          {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-darkGrey ">
              Customizable Tailwind CSS and Framer Motion Components. Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
