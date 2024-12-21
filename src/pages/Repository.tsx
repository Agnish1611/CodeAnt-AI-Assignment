import { useState } from "react";

import { RepositoryCard } from "../components/RepositoryCard";
import { Sidebar } from "../components/Sidebar";
import { REPOSITORIES } from "../utils/constants";

const Repository: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleMenuToggle = () => setMenuOpen(prev => !prev);

  return (
    <div className="h-fit w-dvw sm:flex sm:bg-[#FAFAFA]">
      <Sidebar menuOpen={menuOpen} onMenuToggle={handleMenuToggle} />

      <main 
        className={`
          h-full w-full sm:m-4 bg-white 
          sm:rounded-md sm:border-[#E9EAEB] sm:border sm:ml-[calc(242px+1rem)]
          ${menuOpen ? "bg-[#6C6C6C4D]" : ""}
        `}
      >
        <div className="p-4 flex flex-col gap-4">
          <header className="gap-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="font-inter flex flex-col gap-1">
              <h1 className="text-[#181D27] font-semibold text-3xl">
                Repositories
              </h1>
              <p className="text-[#414651] font-normal text-base">
                33 total repositories
              </p>
            </div>
            <div className="flex gap-3 font-inter text-sm font-normal">
              <button className="border-[#D5D7DA] border py-2.5 px-3.5 text-[#414651] rounded-lg flex gap-2">
                <img src="/icons/refresh.png" alt="" />
                Refresh All
              </button>
              <button className="bg-[#1570EF] flex text-white border-2 border-white py-2.5 px-3.5 gap-2 rounded-lg">
                <img src="/icons/add.png" alt="" />
                Add Repository
              </button>
            </div>
          </header>

          <div className="flex px-3.5 py-2.5 rounded-lg gap-3 items-center text-center text-base border border-[#D5D7DA]">
            <img src="/icons/search.png" alt="Search" className="h-6" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Repositories"
              className="focus:outline-none w-full"
            />
          </div>
        </div>

        <section>
          {REPOSITORIES.map((repo, index) => (
            <RepositoryCard key={index} {...repo} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Repository;