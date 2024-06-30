import React from 'react'

// use Props
export default function Imagetextfront({first,sec,third,forth,fifth}) {
  return (
    <div>
      <div className="about-first2">
          <img src="/img/mountai-view.jpg" className="about-img" alt='backgrounImg'/>

          <div className="textes">
            <p className="img-text">{first}</p>
            <p className="img-text2">{sec}</p>
            <p className="img-text3">{third}</p>
          </div>
          <div className="textes2">
            <p className="img-text4">{forth}</p>
            <p className="img-text5">{fifth}</p>
          </div>
        </div>
    </div>
  )
}

