import { NavigationItemProps } from "../utils/types";

export const NavigationItem: React.FC<NavigationItemProps> = ({ icon, title }) => (
  <li className="flex items-center gap-2 px-6 py-2 font-inter font-semibold text-md text-[#414651]">
    <img src={icon} alt={title} />
    <span>{title}</span>
  </li>
);