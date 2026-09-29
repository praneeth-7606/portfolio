"use client";

import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { deploymentsData } from "@/utils/data/deployments-data";

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filtered = deploymentsData
    .map((group) => ({
      ...group,
      deployments: group.deployments.filter(
        (d) =>
          q === "" ||
          group.repo.toLowerCase().includes(q) ||
          group.info.toLowerCase().includes(q) ||
          d.name.toLowerCase().includes(q)
      ),
    }))
    .filter(
      (group) =>
        group.deployments.length > 0 ||
        (q !== "" &&
          (group.repo.toLowerCase().includes(q) ||
            group.info.toLowerCase().includes(q)))
    );

  const totalDeployments = deploymentsData.reduce(
    (sum, group) => sum + group.deployments.length,
    0
  );

  return (
    <div id="dashboard" className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            DASHBOARD
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <p className="text-gray-300 text-sm md:text-base mb-2">
          Every live deployment, project by project — each with its live link
          and corresponding source code.
        </p>
        <p className="text-[#16f2b3] font-mono text-xs md:text-sm mb-6">
          {deploymentsData.length} repositories · {totalDeployments} live
          deployments
        </p>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects or deployments..."
          className="w-full max-w-xl mb-8 px-4 py-2 text-sm text-white bg-[#0d1224] border border-[#1b2c68a0] rounded-md outline-none placeholder:text-gray-500 focus:border-pink-600"
        />

        {filtered.length === 0 && (
          <p className="text-gray-400 text-sm">
            No deployments match your search.
          </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((group) => (
            <div
              key={group.repo}
              className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full"
            >
              <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
              </div>
              <div className="px-4 lg:px-6 py-4">
                <p className="font-mono text-[#16f2b3] text-base lg:text-lg break-all">
                  {group.repo}
                </p>
                <p className="text-gray-300 text-xs md:text-sm mt-1">
                  {group.info}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {group.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-full border border-violet-700 text-violet-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {group.repoUrl ? (
                  <a
                    href={group.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-xs px-3 py-1.5 rounded-md border border-pink-600/50 text-white hover:bg-pink-600/20 transition-colors"
                  >
                    <FaGithub size={14} /> GitHub Repo
                  </a>
                ) : (
                  <p className="mt-3 text-[11px] text-gray-500">
                    Source not linked to GitHub
                  </p>
                )}
              </div>
              <div className="border-t-[2px] border-indigo-900 px-4 lg:px-6 py-3">
                <p className="font-mono text-[11px] text-gray-500 mb-2">
                  live deployments ({group.deployments.length})
                </p>
                <div className="flex flex-col gap-2">
                  {group.deployments.map((d) => (
                    <a
                      key={d.name}
                      href={d.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-2 px-3 py-2 rounded-md border border-[#1b2c68a0] hover:border-pink-600 transition-colors"
                    >
                      <span className="font-mono text-xs md:text-sm text-amber-300 break-all">
                        {d.name}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#16f2b3] whitespace-nowrap">
                        Live <FaExternalLinkAlt size={10} />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-[11px] mt-8">
          All deployments are hosted live on Vercel.
        </p>
      </div>
    </div>
  );
}
