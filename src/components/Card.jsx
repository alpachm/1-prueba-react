import React from 'react'

const Card = ({ text, fun, colorStyle }) => {
  return (
    <div className='card'>
      <i className='bx comillas bxs-quote-alt-left' style={{ color: colorStyle }} ></i>
      <div className="text__box" style={{ color: colorStyle }} >
        <p>{text.quote}</p>
        <h3>{text.author}</h3>
        <button style={{ backgroundColor: colorStyle }} onClick={fun}><i className='bx bx-chevron-right' ></i></button>
      </div>
    </div>
  )
}

export default Card