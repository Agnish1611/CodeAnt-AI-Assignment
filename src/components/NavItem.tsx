import { NavigationItemProps } from "../utils/types";

export const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  title,
}) => {
  const current = 'Repositories';

  return (
    <li
      className={`flex rounded-lg items-center gap-2 px-6 py-2 font-inter font-semibold text-md text-[#414651] ${
        current == title && "bg-[#1570EF] text-white"
      }`}
    >
      <img
        src={current == title ? "/icons/repo-white.png" : icon}
        alt={title}
      />
      <span>{title}</span>
    </li>
  );
};
