import React from "react";
import "../../css/header.css"
import importedImages from "../index";
import Shorten from "./Shorten";

export default function Header() {
  return (
    <>
    <div className="auto-margin">
      <header className="header-grid">
        <aside className="first-grid">
          <h2>More than just shorter links</h2>
          <p>
            Build your brand’s recognition and get detailed <br />insights on how your
            links are performing.
          </p>
          <button className="btn"> Get Started</button>
        </aside>
        <aside>
          <img src={importedImages.illustration} alt="illustration" className="illustration"/>
        </aside>
      </header>
      <Shorten />
    </div>
    </>
  );
}
