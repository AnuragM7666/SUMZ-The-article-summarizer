import React from "react";
import { logo } from "../assets";
import GithubButton from "../assets/GithubButton";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <GithubButton
          onClick={() =>
            window.open(
              "https://github.com/AnuragM7666/SUMZ-The-article-summarizer",
              "_blank"
            )
          }
        >
          Visit GitHub
        </GithubButton>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">THE SUMMARIZER</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
