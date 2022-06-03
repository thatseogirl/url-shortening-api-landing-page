import React from 'react'
import "../../css/statistics.css"
import importedImages from '../index'
export default function Statistics() {
  return (
      <div className='statistic'>
      <section className='auto-margin'>
      <main>
          <div>
              <h2>Advanced Statistics</h2>
              <p>Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
          </div>
          <section className='brand-statics'>
              <div>
                  <img src={importedImages.brand} alt="brand" />
                  <div>
                      <p>Brand Recognition</p>
                      <p>Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</p>
                  </div>
              </div>
              <div>
              <img src={importedImages.detailed} alt="detailed" />
                 
                  <div>
                      <p>Detailed Records</p>
                      <p>Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.</p>
                  </div>
              </div>
              <div>
              <img src={importedImages.customizable} alt="customizable" />
                  <div>
                      <p> Fully Customizable</p>
                      <p>Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.</p>
                  </div>
              </div>
          </section>
         
      </main>
      <div className='boost'>
              <p>Boost your links today</p>
              <button>Get Started</button>
          </div>
      </section>
      </div>
  )
}
