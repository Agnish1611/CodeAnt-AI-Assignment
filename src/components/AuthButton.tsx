import { Link } from "react-router";

import { AuthButtonProps } from "../utils/types";

const AuthButton = ({ signinMethod, icon }: AuthButtonProps) => (
  <li className="w-full max-w-[446px]">
    <Link to="/repositories">
      <button className="w-full text-inter text-[16px] font-[600] text-[#171717] py-4 rounded-[8px] border-[1px] border-[#D8DAE5] flex items-center justify-center gap-4">
        <img src={icon} className="h-[25px]" alt={`${signinMethod} icon`} />
        {signinMethod}
      </button>
    </Link>
  </li>
);

export default AuthButton;
