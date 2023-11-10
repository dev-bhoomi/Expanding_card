import React,{useState} from 'react'
import ExpandingCard from './ExpandingCard';

const Cards = (props) => { 
    const [data,seData] = useState(props.data)

    const onCardClick=(id)=>{
        const newState=[...data];
        newState.map((item)=>item.id=== id ? item.active = true : item.active= false);
        seData(newState)
    }

    if (!data || data.length <= 0){
        return "no data to render cards"
    }
    return (
        <>
            <section className='cards'>
                {
                    data.map((card)=>
                    <ExpandingCard key={card.id} data={card}
                     onCardClick={onCardClick}/>
                    )
                    
                }

            </section>
        </>
    )
}

export default Cards