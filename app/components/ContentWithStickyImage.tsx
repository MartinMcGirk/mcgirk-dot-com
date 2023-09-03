import React from "react";

const ContentWithStickyImage = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-blue-600">
                About me
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                I lead software teams that deliver.
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Hi, nice to meet you! I'm Martin McGirk. I'm a Software Team
                Lead in Sydney, Australia, with nearly 15 years experience
                specialising in web development.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                People hire me because they have a team of developers working on
                a business-critical project, and they need someone to help the
                team deliver. I can help in a bunch of ways, usually by defining
                solution architectures, helping the team with the implementation
                details, liaising with stakeholders, running agile ceremonies,
                and making sure that we are solving the problems that are
                relevant to the business.
              </p>
              <p className="mt-4">
                Most recently I led a team of 8 people at a large construction
                firm to ship a first-of-its-kind platform for scoping and
                managing multi-million dollar construction projects.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  {/*<CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />*/}
                  <span>
                    <strong className="font-semibold text-gray-900">
                      I bring experience.
                    </strong>{" "}
                    With nearly 15 years commercial experience of driving web
                    application development, I like to think I set myself apart
                    with my ability to focus on how software can solve business
                    problems, rather than just how it can solve technical ones.
                    So far I've been doing that across the construction,
                    finance, education, oil & gas, and retail sectors.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/*<LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />*/}
                  <span>
                    <strong className="font-semibold text-gray-900">
                      I have full-stack experience.
                    </strong>{" "}
                    Full stack web development is where I started. My degree is
                    in software engineering and I've been working with code
                    since 2011. Since then I've done backend, frontend,
                    databases, (some) devops, and everything in between. I can
                    bring that holistic, technical view of how a prodcut is
                    built to help your project succeed.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Need help with something?
              </h2>
              <div className="mt-6">
                <button type="submit">Get in touch!</button>
              </div>
              {/*<p className="mt-6">*/}
              {/*  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam*/}
              {/*  consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod*/}
              {/*  vitae interdum mauris enim, consequat vulputate nibh. Maecenas*/}
              {/*  pellentesque id sed tellus mauris, ultrices mauris. Tincidunt*/}
              {/*  enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam*/}
              {/*  turpis ipsum eu a sed convallis diam.*/}
              {/*</p>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWithStickyImage;
