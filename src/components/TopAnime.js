import React from 'react'
import { useState, useEffect } from 'react';
import CardItem from './CardItems';
import 'firebase/database';
import { useFirebaseApp } from 'reactfire';



function TopAnime(props) {

    const { user } = props;


    const [topAnime, SetTopAnime] = useState([]);


    const firebase = useFirebaseApp();

    const db = firebase.database();

    const handleLikedAnime = (topAnime) => {

        if (user != null) {
            const userId = user.uid;
            const listRef = db.ref(`LikedAnimeList/${userId}`);
            listRef.child(topAnime.mal_id).set(topAnime)
        } else {

        }


    };

    const GetTopAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
            .then(res => res.json());

        SetTopAnime(temp.top.slice(0, 5));
    }

    //fetch  when the page start 
    useEffect(() => {
        GetTopAnime();
    }, []);


    return (
        <>
            {topAnime.map(anime => (
                <CardItem
                    id={anime.mal_id}
                    src={anime.image_url}
                    text={anime.title}
                    label={anime.rank}
                    path={anime.url}
                    handleLikedAnime={handleLikedAnime}
                    anime={anime}
                />
            ))}

        </>
    )
}

export default TopAnime
