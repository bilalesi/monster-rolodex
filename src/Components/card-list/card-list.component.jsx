import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';


const CardList = (props) => {
    console.log(props);
    return (
        <div className='card-list'>
            {
                props.monsters.map(
                    pp => (<Card monster={pp} key={pp.id}/>)
                )
            }
        </div>
    )
};

export default CardList;