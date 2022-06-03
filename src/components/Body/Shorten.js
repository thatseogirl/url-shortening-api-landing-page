import React from 'react'
import "../../css/shorten.css"
export default function Shorten() {
  return (
    <div className='shorten'>
    <section className='auto-margin'>
    <form>
        <input type="text" placeholder='Shorten a link here...'/>
        <button>Shorten It!</button>
    </form>
</section>
</div>
  )
}
