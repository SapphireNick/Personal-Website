import * as React from "react";
import Link from "next/link";

export const Projects: React.FC = (props) => {
  return (
    <div id="projects">
      <div className="grid bg-base-200">
        <div className="grid grid-flow-row gap-4 my-2 ml-4 mr-4 lg:my-4 lg:ml-28 lg:mr-20">
          <h1 className="text-4xl lg:text-5xl text-bold text-primary">
            Projects
          </h1>
          {/* For larger screens */}
          <div className="overflow-x-auto">
            <table className="hidden sm:table sm:table-compact lg:table-normal w-full">
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Description</th>
                  <th>Language</th>
                  <th>Github Link</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(props).map(([key, value]: any) => {
                  return (
                    <tr key={key}>
                      <th className="text-primary">{value.repoName}</th>
                      <th>{value.description}</th>
                      <th>{value.language}</th>
                      <th>
                        <Link
                          href={value.html_url}
                          className="btn btn-ghost btn-sm text-left ml-2 text-base"
                        >
                          Link
                        </Link>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* For small screens/mobile */}
          <div className="grid grid-flow-row gap-4 sm:hidden">
            {Object.entries(props).map(([key, value]: any) => {
              return (
                <div key={key} className="grid grid-flow-row gap-2">
                  <h2 className="text-xl text-primary">{value.repoName}</h2>
                  <p className="text-xs">{value.description}</p>
                  <p className="text-xs">
                    <b>Language:</b> {value.language}
                  </p>
                  <div className="flex justify-center h-8">
                    <Link
                      href={value.html_url}
                      className="btn btn-xs btn-outline h-8 w-32 text-primary text-xs"
                    >
                      Link to GitHub
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
