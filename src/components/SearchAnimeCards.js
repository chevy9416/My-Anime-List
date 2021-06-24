import React from 'react'
import './Cards.css';
import SearchAnime from './SearchAnime';



function SearchAnimeCards(props) {


    const { user } = props;



    return (
        <div className='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <SearchAnime
                            user={user}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchAnimeCards