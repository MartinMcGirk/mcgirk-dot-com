import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedPanel from "@/app/AnimatedPanel";
import ThreeRoot from "@/app/graphics/three-root";
import MovingPicture from "@/app/components/MovingPicture";
import ContentWithStickyImage from "@/app/components/ContentWithStickyImage";

export default function Home() {
  const links = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/martin-mcgirk",
      icon: IconBrandLinkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/MartinMcGirk",
      icon: IconBrandTwitter,
    },
    {
      name: "Email",
      href: "mailto:martin@mcgirk.com",
      icon: IconMail,
    },
    {
      name: "Github",
      href: "https://github.com/martinmcgirk",
      icon: IconBrandGithub,
    },
  ];

  const posts = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    // More posts...
  ];

  const timeline = [
    {
      name: "Founded company",
      description:
        "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
      date: "Aug 2021",
      dateTime: "2021-08",
    },
    {
      name: "Secured $65m in funding",
      description:
        "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
      date: "Dec 2021",
      dateTime: "2021-12",
    },
    {
      name: "Released beta",
      description:
        "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
      date: "Feb 2022",
      dateTime: "2022-02",
    },
    {
      name: "Global launch of product",
      description:
        "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
      date: "Dec 2022",
      dateTime: "2022-12",
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
        <main
          className="h-full flex flex-col justify-between md:justify-start items-center py-8 px-4 lg:px-8 lg:py-24 dark:bg-gray-900 lg:dark:bg-transparent"
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
            <dl className="grid lg:max-w-2xl grid-cols-4 gap-x-2 md:gap-x-8 gap-y-4 lg:gap-y-16 lg:max-w-none lg:grid-cols-4">
              {links.map((link, idx) => (
                <AnimatedPanel key={link.href} index={idx}>
                  <Link
                    href={link.href}
                    key={link.name}
                    className="transition ease-in-out flex flex-col bg-gray-900 rounded-2xl py-5 lg:py-5 px-5 md:px-20 shadow-xl cursor-pointer hover:bg-gray-950 hover:scale-105 dark:bg-gray-800"
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
        </main>
      </div>
      <ContentWithStickyImage />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative  py-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-blue-300"
              >
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-100/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-100">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
