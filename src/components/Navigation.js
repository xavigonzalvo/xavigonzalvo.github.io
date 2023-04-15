import React from "react";
// import "../styles/tailwind.css";

const LINKS = [
  // {
  //   link: "about",
  //   text: "About",
  // },
  {
    link: "publications",
    text: "Publications",
  },
  {
    link: "projects",
    text: "Projects",
  },
  // {
  //   link: "contact",
  //   text: "Contact",
  // },
];

export default function Navigation() {
  return (
    <nav class="pointer-events-auto hidden md:block">
      <ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {LINKS.map((link) => (
          <li>
            <a
              class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
              href={`/${link.link}`}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function DialogNavigation({ onClose }) {
  return (
    <div>
      <div
        class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100"
        id="headlessui-popover-overlay-:r0:"
        aria-hidden="true"
        data-headlessui-state="open"
      ></div>
      <div
        class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100"
        id="headlessui-popover-panel-:r1:"
        tabindex="-1"
        data-headlessui-state="open"
      >
        <div class="flex flex-row-reverse items-center justify-between">
          <button
            aria-label="Close menu"
            class="-m-1 p-1"
            type="button"
            data-headlessui-state="open"
            tabindex="0"
            onClick={onClose}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-6 w-6 text-zinc-500 dark:text-zinc-400"
            >
              <path
                d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <h2 class="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
        </div>
        <nav class="mt-6">
          <ul class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            {LINKS.map((link) => (
              <li>
                <a
                  class="block py-2"
                  data-headlessui-state="open"
                  href={`/${link.link}`}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
