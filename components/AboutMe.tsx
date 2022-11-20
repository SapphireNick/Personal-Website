import * as React from "react";

export const AboutMe: React.FC = () => {
  return (
    <div id="aboutme" className="flex bg-base-100 scroll-mt-12 md:scroll-mt-16">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-2 my-2 ml-4 mr-2 lg:my-5 lg:ml-28 lg:mr-20">
        <div className="grid grid-flow-row gap-5">
          <h1 className="text-4xl lg:text-5xl text-primary text-bold text-left animInView">
            About Me
          </h1>
          <h2 className="text-lg lg:text-2xl text-left">
            I&apos;m Nikita-Nick, a computer science student at Heidelberg
            University
          </h2>
          <p className="text-xs lg:text-base text-gray-500 dark:text-gray-400">
            Studying at Heidelberg University gives me the chance to specialize
            in the field of Algorithm Engineering, which is most interesting to
            me. I found out quickly that the engineering of efficient algorithms
            solving complex real world problems is something I am very
            passionate about.
          </p>
          <p className="text-xs lg:text-base text-gray-500 dark:text-gray-400">
            One problem which comes to mind is the Graph Partitioning Problem on
            which I have been working on in my student internship. More
            specifically, my task is the extension of a state-of-the-art graph
            partitioner to consider additional constraints, which includes
            optimizing not only the code but the algorithm aswell.
          </p>
          <p className="text-xs lg:text-base text-gray-500 dark:text-gray-400">
            Furthermore, I gathered experience as a Linux Server-Admin and
            Back-end Developer from my time working for the University as a
            working student. This tought me a lot about the importance of great
            leadership and teamwork aswell as the software engineering cycle!
          </p>
        </div>
        <div className="grid grid-row-3 gap-4 md-12 ml-2 mr-4 lg:mt-32 md:ml-8 md:mr-8">
          <div className="grid grid-rows-2">
            <div className="grid grid-cols-2 justify-center">
              <p className="font-bold uppercase text-left text-sm lg:text-xl">
                C++
              </p>
              <p className="font-bold uppercase text-right text-primary text-sm lg:text-xl">
                87%
              </p>
            </div>
            <div className="w-full h-2 lg:h-3 rounded-full bg-gray-200 dark:bg-gray-400">
              <div
                className="h-2 lg:h-3 rounded-full bg-primary"
                style={{ width: "87%" }}
              />
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="grid grid-cols-2 justify-center">
              <p className="font-bold uppercase text-left text-sm lg:text-xl">
                Typescript
              </p>
              <p className="font-bold uppercase text-right text-primary text-sm lg:text-xl">
                92%
              </p>
            </div>
            <div className="w-full h-2 lg:h-3 rounded-full bg-gray-200 dark:bg-gray-400">
              <div
                className="h-2 lg:h-3 rounded-full bg-primary"
                style={{ width: "92%" }}
              />
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="grid grid-cols-2 justify-center">
              <p className="font-semibold uppercase text-left text-sm lg:text-xl">
                Python
              </p>
              <p className="font-semibold uppercase text-right text-primary text-sm lg:text-xl">
                70%
              </p>
            </div>
            <div className="w-full h-2 lg:h-3 rounded-full bg-gray-200 dark:bg-gray-400">
              <div
                className="h-2 lg:h-3 rounded-full bg-primary"
                style={{ width: "70%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
