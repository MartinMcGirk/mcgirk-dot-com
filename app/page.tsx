import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconCircleChevronsDown,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import AnimatedPanel from "@/app/AnimatedPanel";
import ThreeRoot from "@/app/graphics/three-root";
import MovingPicture from "@/app/components/MovingPicture";
import ScrollDown from "@/app/components/ScrollDown";
import ContentWithStickyImage from "@/app/components/ContentWithStickyImage";
import { motion } from "framer-motion";

export default function Home() {
  const links = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/martin-mcgirk",
      icon: IconBrandLinkedin,
    },
    {
      name: "Email",
      href: "mailto:martin@mcgirk.com",
      icon: IconMail,
    },
    {
      name: "X",
      href: "https://twitter.com/MartinMcGirk",
      icon: IconBrandX,
    },
    {
      name: "Github",
      href: "https://github.com/martinmcgirk",
      icon: IconBrandGithub,
    },
  ];

  return (
    <>
      <div className="relative h-[100vh] md:h-[100vh]">
        <section
          className="fixed top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white via-blue-50 to-blue-300 dark:from-indigo-800 dark:via-50% dark:to-indigo-950"
          style={{ zIndex: -1 }}
        >
          <ThreeRoot />
        </section>
        <ScrollDown />
        <main
          className="h-full flex flex-col justify-between md:justify-start items-center py-8 px-4 lg:px-8 lg:py-24 lg:dark:bg-transparent"
          style={{ zIndex: 100 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <MovingPicture />

            <div>
              <h1 className="text-4xl font-extrabold tracking-tight uppercase dark:text-gray-50">
                Martin McGirk
              </h1>
              <p className="text-2xl text-gray-600 py-2 lg:pt-10 lg:pb-2 dark:text-gray-400">
                Contract Lead Software Engineer in Sydney, Australia
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                <Link href="mailto:martin@mcgirk.com">martin@mcgirk.com</Link>
              </p>
              <p className="text-lg text-gray-600 lg:pb-10 dark:text-gray-400">
                <Link href="tel:+61433709600">+61 433 709 600</Link>
              </p>
            </div>
          </div>
          <div className="mx-auto w-full lg:w-auto mt-8 max-w-3xl sm:mt-20 lg:mt-24">
            <dl className="hidden lg:grid lg:max-w-2xl grid-cols-4 gap-x-2 md:gap-x-8 gap-y-4 lg:gap-y-16 lg:max-w-none lg:grid-cols-4">
              {links.map((link, idx) => (
                <AnimatedPanel key={link.href} index={idx}>
                  <Link
                    href={link.href}
                    key={link.name}
                    className="transition ease-in-out flex flex-col rounded-2xl py-5 lg:py-5 px-5 md:px-20 shadow-xl cursor-pointer hover:scale-105 backdrop-blur-sm bg-gray-900/70 hover:bg-gray-950/80 dark:bg-gray-800/70 dark:hover:bg-gray-800/80 border border-gray-700/30"
                  >
                    <dt className="flex flex-col items-center gap-x-3 text-base font-semibold leading-7 text-white">
                      <div className="w-10 h-10 lg:w-20 lg:h-20 flex items-center justify-center">
                        <link.icon
                          className="w-full h-full text-gray-100"
                          aria-hidden="true"
                        />

                      </div>
                      <h2 className="hidden md:block text-xl">{link.name}</h2>
                    </dt>
                  </Link>
                </AnimatedPanel>
              ))}
            </dl>
          </div>
        </main>
      </div>
      <ContentWithStickyImage />
      <div className="mx-auto w-full h-screen flex flex-row justify-center items-center">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight dark:text-gray-50">
              Sound like I can help you?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-800 dark:text-gray-200">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Get in touch and let's talk about how I can help deliver your next
              project.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <dl className="grid lg:max-w-2xl grid-cols-4 gap-x-2 md:gap-x-8 gap-y-4 lg:gap-y-16 lg:max-w-none lg:grid-cols-4">
                {links.map((link, idx) => (
                  <AnimatedPanel key={link.href} index={idx}>
                    <Link
                      href={link.href}
                      key={link.name}
                      className="transition ease-in-out flex flex-col rounded-2xl py-5 lg:py-5 px-5 md:px-20 shadow-xl cursor-pointer hover:scale-105 backdrop-blur-sm bg-gray-900/70 hover:bg-gray-950/80 dark:bg-gray-800/70 dark:hover:bg-gray-800/80 border border-gray-700/30"
                    >
                      <dt className="flex flex-col items-center gap-x-3 text-base font-semibold leading-7 text-white">
                        <link.icon
                          className="h-10 w-10 lg:h-20 lg:w-20 text-gray-100"
                          aria-hidden="true"
                        />
                        <h2 className="hidden md:block text-xl">{link.name}</h2>
                      </dt>
                    </Link>
                  </AnimatedPanel>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
