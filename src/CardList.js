import React from 'react'
import Card from './Card'

const CardList = (props) => {
  return (
    <div id="container">
      {
        props.cards.map((card,idx) => {
          return <Card key={idx} {...card} />
        })
      }
    </div>
  )
}

export default CardList