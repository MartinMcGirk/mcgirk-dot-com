import Image from 'next/image'
import {IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail} from "@tabler/icons-react";

export default function Home() {
    const features = [
        {
            name: 'Twitter',
            href: '#',
            icon: IconBrandTwitter,
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: IconBrandLinkedin,
        },
        {
            name: 'Email',
            href: '#',
            icon: IconMail,
        },
        {
            name: 'Github',
            href: '#',
            icon: IconBrandGithub,
        },
    ]

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col justify-center items-center p-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
              <Image
                  src="/images/martin-mcgirk.jpg"
                  alt="Martin McGirk"
                  width={300}
                  height={300}
                  className="rounded-full shadow-xl border-4 border-sky-600"
              />
          <div>
              <h1 className="text-4xl font-extrabold tracking-tight uppercase">
                  Martin McGirk
              </h1>
              <p className="text-2xl text-gray-600 py-2 lg:py-10">
                  Contract Lead Software Engineer in Sydney, Australia
              </p>
          </div>

      </div>
        <div className="mx-auto w-full lg:w-auto mt-8 max-w-3xl sm:mt-20 lg:mt-24">
            <dl className="grid lg:max-w-2xl grid-cols-1 gap-x-8 gap-y-4 lg:gap-y-16 lg:max-w-none lg:grid-cols-4">
                {features.map((feature) => (
                    <a key={feature.name} className="transition ease-in-out flex flex-col bg-gray-900 rounded-2xl lg:py-10 px-20 shadow-xl cursor-pointer hover:bg-gray-950 hover:scale-105">
                        <dt className="flex flex-col items-center gap-x-3 text-base font-semibold leading-7 text-white">
                            <feature.icon className="h-20 w-20 text-gray-100" aria-hidden="true" />
                            <h2 className="text-xl">{feature.name}</h2>
                        </dt>
                    </a>
                ))}
            </dl>
        </div>
    </main>
  )
}
