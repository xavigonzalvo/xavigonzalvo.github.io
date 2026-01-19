import * as React from "react";

function ResearchProjectCard({ title, summary, papers }) {
  return (
    <div class="group relative flex flex-col p-6 bg-white dark:bg-zinc-800/50 rounded-2xl border border-zinc-100 dark:border-zinc-700/40 shadow-sm hover:shadow-md transition-shadow">
      <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
        {title}
      </h3>
      <p class="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        {summary}
      </p>
      <div class="space-y-3">
        {papers.map((paper, idx) => (
          <div key={idx} class="flex items-start gap-3">
            <div class="flex-shrink-0 mt-1">
              <svg
                class="h-5 w-5 text-teal-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              {paper.url ? (
                <a
                  href={paper.url}
                  class="text-sm font-medium text-zinc-800 dark:text-zinc-100 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {paper.title}
                </a>
              ) : (
                <span class="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                  {paper.title}
                </span>
              )}
              <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                {paper.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearchProjectCard;
