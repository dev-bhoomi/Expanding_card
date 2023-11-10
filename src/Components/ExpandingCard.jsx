import React from 'react'

const ExpandingCard = (props) => {

    const{id , url ,active ,title}= props.data;
  return (
    <div className={`card ${active && 'active'}`}
    style={{backgroundImage:`url(${url})`}}
    onClick={()=>props.onCardClick(id)}>
        <h2>{title}</h2>
        </div>

  )
}

export default ExpandingCard