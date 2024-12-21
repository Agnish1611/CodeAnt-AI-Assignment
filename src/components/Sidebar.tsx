import { SidebarProps } from "../utils/types";
import { UserNavigation } from "./UserNavigation";

export const Sidebar: React.FC<SidebarProps> = ({ menuOpen, onMenuToggle }) => (
  <nav className="sm:w-[242px] sm:h-[calc(100dvh-3rem)] sm:fixed">
    <div className="flex p-4 justify-between items-center border-b border-[#E9EAEB] bg-white">
      <img src="/icons/logo_with_title.png" alt="CodeAnt Logo" className="h-8" />
      <button
        onClick={onMenuToggle}
        className="sm:hidden"
        aria-label="Toggle menu"
      >
        <img
          src={menuOpen ? "/icons/cross.png" : "/icons/hamburger.png"}
          alt=""
          className="h-4"
        />
      </button>
    </div>

    <UserNavigation menuOpen={menuOpen} />
  </nav>
);