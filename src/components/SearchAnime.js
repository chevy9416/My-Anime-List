
import CardItem from './CardItems';
import React, { useState } from 'react'
import 'firebase/database';
import { useFirebaseApp } from 'reactfire';


function SearchAnime(props) {

    const { user } = props

    const [animeList, SetAnimeList] = useState([]);
    const [search, SetSearch] = useState("");

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


    const HandleSearch = e => {
        e.preventDefault();

        FetchAnime(search);
    }

    const FetchAnime = async (query) => {
        const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=5`)
            .then(res => res.json());

        SetAnimeList(temp.results);
    }


    return (
        <>
            <div className="searching">
                <form
                    className="search-box"
                    onSubmit={HandleSearch}>
                    <input
                        type="search"
                        placeholder="Search for an anime..."
                        required
                        value={search}
                        onChange={e => SetSearch(e.target.value)} />
                </form>
            </div>

            {
                animeList.map(anime => (
                    <CardItem
                        id={anime.mal_id}
                        src={anime.image_url}
                        text={anime.title}
                        label={anime.score}
                        path={anime.url}
                        handleLikedAnime={handleLikedAnime}
                        anime={anime}
                    />
                )
                )
            }


        </>


    )
}

export default SearchAnime