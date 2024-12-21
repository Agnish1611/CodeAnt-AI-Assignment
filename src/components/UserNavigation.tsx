import { NAV_ITEMS, OTHER_NAV } from "../utils/constants";
import { UserNavigationProps } from "../utils/types";
import { NavigationItem } from "./NavItem";

export const UserNavigation: React.FC<UserNavigationProps> = ({ menuOpen }) => {
  const NavigationContent = () => (
    <>
      <div className="flex justify-between items-center rounded-md border border-[#D5D7DA] px-6 py-2">
        <span className="font-inter text-[#181D27] font-normal text-base">
          Agnish Bhattacharya
        </span>
        <img src="/icons/down-arrow.png" alt="" />
      </div>
      <ul className="flex flex-col justify-between h-full">
        <div>
          {NAV_ITEMS.map((item, index) => (
            <NavigationItem key={index} {...item} />
          ))}
        </div>
        <div>
          {OTHER_NAV.map((item, index) => (
            <NavigationItem key={index} {...item} />
          ))}
        </div>
      </ul>
    </>
  );

  return (
    <>
      {menuOpen && (
        <div className="h-dvh absolute w-dvw bg-[#6C6C6C4D]">
          <div className="p-4 top-12 flex flex-col gap-3 animate-top z-10 bg-white w-full sm:hidden">
            <NavigationContent />
          </div>
        </div>
      )}
      <div className="max-sm:hidden p-4 h-full absolute top-12 flex flex-col gap-3 bg-white w-[242px]">
        <NavigationContent />
      </div>
    </>
  );
};
