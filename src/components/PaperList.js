import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const PaperList = () => {
  const data = useStaticQuery(graphql`
    query CSVListQuery {
      allPapersCsv(sort: { Year: DESC }) {
        nodes {
          Year
          Authors
          Title
          URL
          Conference
        }
      }
    }
  `);

  return (
    <>
      <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Publications
      </h1>
      <ul class="mt-4 sm:mt-6">
        {data.allPapersCsv.nodes.map((row) => (
          <li key={row.id} class="hover:bg-gray-100 p-2 rounded-md">
            <dl class="flex gap-x-2">
              <dt class="sr-only">Year</dt>
              <dd class="text-sm text-zinc-400 dark:text-zinc-500">
                {row.Year}
              </dd>
              <div>
                <dt class="sr-only">Title</dt>
                <dd class="flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {row.URL ? (
                    <a href={row.URL} class="text-teal-500">
                      {row.Title}
                    </a>
                  ) : (
                    row.Title
                  )}
                </dd>
                <dt class="sr-only">Authors</dt>
                <dd class="w-full text-xs text-zinc-500 dark:text-zinc-400">
                  {row.Authors}
                </dd>
                <dt class="sr-only">Conference</dt>
                <dd class="text-xs text-zinc-500 dark:text-zinc-400">
                  {row.Conference}
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PaperList;
