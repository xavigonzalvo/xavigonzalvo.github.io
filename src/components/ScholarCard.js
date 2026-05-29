import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Metric({ label, all, recent }) {
  return (
    <li class="flex items-baseline justify-between gap-4">
      <dt class="text-xs text-zinc-600 dark:text-zinc-400">{label}</dt>
      <dd class="flex items-baseline gap-3">
        <span class="text-sm font-semibold tabular-nums text-zinc-900 dark:text-zinc-100">
          {all.toLocaleString()}
        </span>
        {recent != null && (
          <span class="w-10 text-right text-xs tabular-nums text-zinc-400 dark:text-zinc-500">
            {recent.toLocaleString()}
          </span>
        )}
      </dd>
    </li>
  );
}

function ScholarCard() {
  const { scholarStats } = useStaticQuery(graphql`
    query {
      scholarStats {
        profileUrl
        citationsAll
        citationsRecent
        hIndexAll
        hIndexRecent
        i10IndexAll
        i10IndexRecent
      }
    }
  `);

  // The build-time fetch failed (e.g. Scholar blocked the request): render
  // nothing rather than an empty card.
  if (!scholarStats || scholarStats.hIndexAll == null) {
    return null;
  }

  // Scholar's "recent" column covers the last five full years.
  const recentSince = new Date().getFullYear() - 5;

  return (
    <div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="h-6 w-6 flex-none fill-zinc-400 dark:fill-zinc-500"
        >
          <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"></path>
        </svg>
        <span class="ml-3">Google Scholar</span>
      </h2>

      <div class="mt-6 flex items-baseline justify-end gap-3 text-[0.65rem] font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
        <span>All</span>
        <span class="w-10 text-right">Since {recentSince}</span>
      </div>
      <ol class="mt-2 space-y-3">
        <Metric
          label="Citations"
          all={scholarStats.citationsAll}
          recent={scholarStats.citationsRecent}
        />
        <Metric
          label="h-index"
          all={scholarStats.hIndexAll}
          recent={scholarStats.hIndexRecent}
        />
        <Metric
          label="i10-index"
          all={scholarStats.i10IndexAll}
          recent={scholarStats.i10IndexRecent}
        />
      </ol>

      <a
        class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group"
        href={scholarStats.profileUrl}
        target="_blank"
        rel="noreferrer"
      >
        View profile
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
        >
          <path
            d="M6.75 3.25h6m0 0v6m0-6-7.5 7.5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default ScholarCard;
