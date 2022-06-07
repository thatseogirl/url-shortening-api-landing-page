import React from "react";
import "../../css/statistics.css";
import importedImages from "../index";
export default function Statistics() {
  return (
    <>
      <div className="statistic">
        <section className="auto-margin">
          <main className="statContainer">
            <div className="centered">
              <h2>Advanced Statistics</h2>
              <p>
                Track how your links are performing across the web with <br />{" "}
                our advanced statistics dashboard.
              </p>
            </div>
            <section className="brand-statics">
              <div className="grid-child first">
                <div className="image">
                  <img src={importedImages.brand} alt="brand" className="img" />
                </div>
                <div className="image-text">
                  <h3>Brand Recognition</h3>
                  <p>
                    Boost your brand recognition with each click. Generic links
                    don’t mean a thing. Branded links help instil confidence in
                    your content.
                  </p>
                </div>
              </div>
              <div className="grid-child second">
                <div className="image">
                  <img
                    src={importedImages.detailed}
                    alt="detailed"
                    className="img"
                  />
                </div>
                <div className="image-text">
                  <h3>Detailed Records</h3>
                  <p>
                    Gain insights into who is clicking your links. Knowing when
                    and where people engage with your content helps inform
                    better decisions.
                  </p>
                </div>
              </div>
              <div className="grid-child third">
                <div className="image">
                  <img
                    src={importedImages.customizable}
                    alt="customizable"
                    className="img"
                  />
                </div>
                <div className="image-text">
                  <h3> Fully Customizable</h3>
                  <p>
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </section>
      </div>
      <div className="boost">
        <h2>Boost your links today</h2>
        <button>Get Started</button>
      </div>
    </>
  );
}
