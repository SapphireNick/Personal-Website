import * as React from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-100 text-base-content">
      <div className="grid grid-flow-col gap-4">
        <Link href="privacy-policy" className="link link-hover">
          Privacy Policy (DE)
        </Link>
        <Link href="legal-notice" className="link link-hover">
          Impressum (DE)
        </Link>
        <Link
          href="mailto:nikita.nick.funk@gmail.com"
          className="link link-hover pl-2 pr-2"
        >
          Contact
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://www.linkedin.com/in/nikita-nick-funk/">
            <LinkedInIcon className="w-6 h-6 inline-block mx-2.5" />
          </Link>
          <Link href="https://github.com/SapphireNick">
            <GitHubIcon className="w-6 h-6 inline-block mx-2.5" />
          </Link>
          <Link href="mailto:nikita.nick.funk@gmail.com">
            <EmailIcon className="w-6 h-6 inline-block mx-2.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
