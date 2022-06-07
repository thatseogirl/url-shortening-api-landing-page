import React from "react";
import { useEffect, useState } from "react";
import "../../css/shorten.css";

const getLocalStorage = () => {
  let links = localStorage.getItem("links");

  if (links) {
    return JSON.parse(localStorage.getItem("links"));
  } else {
    return [];
  }
};

export default function Shorten() {
  const [text, setText] = useState("");
  const [links, setLinks] = useState(getLocalStorage());
  const [buttonText, setButtonText] = useState("Copy");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("add a url");
    } else {
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
        const data = await res.json();
        setLinks(data.result);
        setText("");
      };

      shortenLink();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link);
    setButtonText("Copied!");
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <>
      <section className="shorten">
        <form className="form" onSubmit={handleSubmit}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Shorten a link here..."
            className="text"
          />
          <button onClick={handleSubmit}>Shorten It!</button>
        </form>
        <div className="copy">
          <div>
            <h6>{links.original_link}</h6>
          </div>

          <div>
            <p>{links.full_short_link}</p>
          </div>
          <div>
            <p>
              <button onClick={handleCopy} className="btncopy">
                {buttonText}
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
