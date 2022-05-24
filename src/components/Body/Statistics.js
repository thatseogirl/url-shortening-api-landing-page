import React from 'react'
import brand from "../../images/brand.svg";
export default function Statistics() {
  return (
      <main>
          <div>
              <h2>Advanced Statistics</h2>
              <p>Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
          </div>
          <section>
              <div>
                  <img src={brand} alt="brand" />
                  <div>
                      <p>Brand Recognition</p>
                      <p>Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</p>
                  </div>
              </div>
          </section>
      </main>
  )
}
