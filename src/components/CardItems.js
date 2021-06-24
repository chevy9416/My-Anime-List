import React from 'react';
import { Button } from './Button';


function CardItem(props) {

    const { path, label, src, text, handleLikedAnime, anime } = props;
    return (
        <>
            <li className='cards__item'>
                <a className='cards__item__link' href={path} target="_blank" rel="noopener noreferrer">
                    <figure className='cards__item__pic-wrap' data-category={label}>
                        <img
                            className='cards__item__img'
                            alt='Anime'
                            src={src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{text}</h5>

                    </div>

                </a>
                <Button
                    className='btn'
                    buttonStyle='btn--primary'
                    buttonSize='btn--medium'
                    onClick={() => handleLikedAnime(anime)}
                >ADD</Button>
            </li>


        </>
    );
}

export default CardItem;