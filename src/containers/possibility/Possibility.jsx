import React from 'react';
import './possibility.css';

import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage}/>
            </div>

            <div className='gpt3__possibility-content'>
                <h4>Request Early access to Get started</h4>

                <h1 className='gradient__text'> The possibilitys are beyong our imagination</h1>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perspiciatis quis magni quam architecto consectetur autem sunt.</p>

                <h4>Request Early access to Get started</h4>
            </div>
        </div>
    )
}

export default Possibility
