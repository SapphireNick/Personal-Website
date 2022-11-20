import * as React from "react";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const Hero: React.FC = () => {
  return (
    <div className="hero min-h-fit bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="me.jpg"
          className="max-w-12rem md:max-w-sm lg:max-w-md mt-12 md:mt-16 ml-8 mr-8 rounded-full shadow-2xl animate-fade-in-on-load"
        />
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-4xl md:text-5xl text-primary font-bold text-center animate-[fadeInOnLoadWithDelay_1s_linear]">
            Hello there!
          </h1>
          <p className="font-bold text-md md:text-xl text-center animate-[fadeInOnLoadWithDelay_1.5s_linear]">
            I&apos;m Nikita. A computer science student from Heidelberg!
          </p>
          <p className="font-bold text-center animate-[fadeInOnLoadWithDelay_2s_linear]">
            Let&apos;s connect
            <ChevronRightIcon className="w-6 h-6 inline-block" />
            <Link href="https://www.linkedin.com/in/nikita-nick-funk/">
              <LinkedInIcon className="w-6 h-6 inline-block mx-2.5 fill-primary" />
            </Link>
            <Link href="https://github.com/SapphireNick">
              <GitHubIcon className="w-6 h-6 inline-block mx-2.5 fill-primary" />
            </Link>
            <Link href="mailto:nikita.nick.funk@gmail.com">
              <EmailIcon className="w-6 h-6 inline-block mx-2.5 fill-primary" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
