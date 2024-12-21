import { RepositoryCardProps } from "../utils/types";

export const RepositoryCard: React.FC<RepositoryCardProps> = ({
  title,
  visibility,
  language,
  size,
  updates,
}) => (
  <div className="py-4 font-inter border-t border-[#D5D7DA] hover:bg-[#F5F5F5]">
    <div className="px-4 flex flex-col gap-3">
      <div className="text-[#181D27] text-lg font-medium flex gap-4">
        <span>{title}</span>
        <span className="text-[#175CD3] border-[#B2DDFF] bg-[#EFF8FF] rounded-full px-2 py-1 font-normal text-sm">
          {visibility}
        </span>
      </div>
      <div className="flex gap-6 text-sm font-normal text-[#181D27]">
        <div className="flex gap-2 items-center">
          <span>{language}</span>
          <div className="h-2 w-2 rounded-full bg-[#1570EF]" />
        </div>
        <div className="flex gap-2 items-center">
          <img src="/icons/size.png" alt="Repository size" />
          <span>{size}</span>
        </div>
        <span>{updates}</span>
      </div>
    </div>
  </div>
);