import React from "react";
import {IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail} from "@tabler/icons-react";
import Image from 'next/image'
import Link from "next/link";
import AnimatedPanel from "@/app/AnimatedPanel";
import ThreeRoot from "@/app/graphics/three-root";
import MovingPicture from "@/app/components/MovingPicture";

export default function Home() {
    const links = [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/martin-mcgirk',
            icon: IconBrandLinkedin,
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/MartinMcGirk',
            icon: IconBrandTwitter,
        },
        {
            name: 'Email',
            href: 'mailto:martin@mcgirk.com',
            icon: IconMail,
        },
        {
            name: 'Github',
            href: 'https://github.com/martinmcgirk',
            icon: IconBrandGithub,
        },
    ]

    return (
        <>
            <section className="hidden lg:block fixed top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white via-blue-50 to-blue-300 dark:bg-gray-900" style={{zIndex: -1}}>
                <ThreeRoot />
            </section>
            <main className="min-h-screen flex flex-col justify-center items-center py-8 px-4 lg:px-8 lg:py-24 dark:bg-gray-900 lg:dark:bg-transparent" style={{zIndex: 100}}>
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
                    <dl className="grid lg:max-w-2xl grid-cols-1 gap-x-8 gap-y-4 lg:gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {links.map((link, idx) => (
                            <AnimatedPanel key={link.href} index={idx}>
                                <Link href={link.href} key={link.name}
                                      className="transition ease-in-out flex flex-col bg-gray-900 rounded-2xl py-2 lg:py-10 px-20 shadow-xl cursor-pointer hover:bg-gray-950 hover:scale-105 dark:bg-gray-800">
                                    <dt className="flex flex-col items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                        <link.icon className="h-10 w-10 lg:h-20 lg:w-20 text-gray-100" aria-hidden="true"/>
                                        <h2 className="text-xl">{link.name}</h2>
                                    </dt>
                                </Link>
                            </AnimatedPanel>
                        ))}
                    </dl>
                </div>
            </main>
        </>
    )
}
