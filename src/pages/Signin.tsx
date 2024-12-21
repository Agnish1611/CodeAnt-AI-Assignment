import { useState } from "react";

import AuthButton from "../components/AuthButton";
import { SigninMode } from "../utils/types";
import { authProviders, stats } from "../utils/constants";

const Signin = () => {
  const [signinMode, setSigninMode] = useState<SigninMode>("SAAS");

  return (
    <div className="h-dvh w-dvw bg-[#FAFAFA] sm:flex">
      <section className="max-sm:hidden block h-full basis-1/2 border-[1px] border-[#E9EAEB] bg-white">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="bg-white rounded-[24px] shadow-primary">
            <div className="flex gap-4 items-center justify-start py-4 px-6">
              <img src="/icons/logo.png" alt="CodeAnt AI logo" />
              <h2 className="font-inter font-[700] text-[18px]">
                AI to Detect & Autofix Bad Code
              </h2>
            </div>
            <div className="flex gap-8 p-8 border-t-[1px] border-[#E6E8F0]">
              {stats.map((stat, index) => {
                return (
                  <div key={index} className="font-inter text-[14px] flex flex-col justify-center items-center">
                    <div className="font-[700]">{stat.value}</div>
                    <div className="font-[400]">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white w-[300px] rounded-[24px] shadow-primary z-10 relative -top-5 left-40">
            <div className="flex px-6 py-2 justify-between items-center">
              <img src="/icons/issues-fixed.png" alt="Issues fixed icon" />
              <div className="flex-col font-inter text-[12px] flex">
                <div className="text-[#0049C6] font-[700]">&#8593; 14&#37;</div>
                <div className="font-[400]">This week</div>
              </div>
            </div>
            <div className="flex flex-col py-2 px-6 font-[700] font-inter">
              <div className="text-[14px]">Issues Fixed</div>
              <div className="text-[32px]">500K+</div>
            </div>
          </div>
        </div>
        <img
          src="/images/signin-bg.png"
          alt="Decorative background"
          className="absolute bottom-0 left-0"
        />
      </section>
      <section className="h-full w-full sm:basis-1/2 flex flex-col gap-8 px-4 py-6 justify-center items-center">
        <div className="bg-white w-full shadow-sm border-[#E9EAEB] border-[1px] rounded-xl min-h-[582px]">
          <div className="flex flex-col justify-center items-center gap-5 border-b-[1px] border-[#D5D7DA] px-[16px] py-[36px]">
            <img
              src="/icons/logo_with_title.png"
              className="h-10"
              alt="CodeAnt AI logo with title"
            />
            <h1 className="font-inter text-[24px] font-[600] text-[#181D27]">
              Welcome to CodeAnt AI
            </h1>
            <div className="flex rounded-[8px] space-x-1 w-full items-center justify-center border-[1px] border-[#E9EAEB] bg-[#FAFAFA]">
              {(["SAAS", "Self"] as const).map((mode, index) => (
                <button
                  key={index}
                  className={`basis-1/2 ${
                    signinMode === mode
                      ? `bg-[#1570EF] text-white`
                      : `text-[#414651]`
                  } py-3 rounded-[8px] font-inter text-[20px] font-[600]`}
                  onClick={() => setSigninMode(mode)}
                >
                  {mode === "Self" ? "Self Hosted" : mode}
                </button>
              ))}
            </div>
          </div>
          <div className="px-4 w-full">
            <ul className="flex flex-col gap-4 py-6 items-center w-full">
              {authProviders[signinMode].map((provider, index) => (
                <AuthButton
                  key={index}
                  signinMethod={provider.method}
                  icon={provider.icon}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="text-[14px] font-inter font-[400px]">
          By signing up you agree to the{" "}
          <span className="font-[700]">Privacy Policy</span>.
        </div>
      </section>
    </div>
  );
};

export default Signin;
