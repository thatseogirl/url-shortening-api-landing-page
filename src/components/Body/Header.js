import React from "react";
import illustration from "../../images/illustration.svg";
import Shorten from "./Shorten";

export default function Header() {
  return (
    <div>
      <header>
        <aside>
          <h2>More than just shorter links</h2>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button> Get Started</button>
        </aside>
        <aside>
          <img src={illustration} alt="illustration" />
        </aside>
      </header>
      <Shorten />
    </div>
  );
}
