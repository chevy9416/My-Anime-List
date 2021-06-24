import React from 'react'
import './Cards.css';
import TopAnime from './TopAnime'


function TopAnimeCards(props) {

    const { user } = props;


    return (
        <div className='cards'>

            <h1>top animes right now!</h1>

            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <TopAnime
                            user={user} />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopAnimeCards
