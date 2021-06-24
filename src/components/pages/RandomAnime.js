import React, { useState } from 'react'
import Navbar from '../Navbar';
import 'firebase/database';
import { useFirebaseApp } from 'reactfire';



function RandomAnime(props) {

    const { user, handleLogout } = props;
    const [nameList, SetNameList] = useState("");



    const firebase = useFirebaseApp();

    const db = firebase.database();

    const HandleList = e => {
        SetNameList(e.target.value);

    }




    return (
        <>
            <div>
                <Navbar
                    user={user}
                    handleLogout={handleLogout} />

            </div>

            <form
                className="search-box"
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        const listRef = db.ref("LikedAnimeList");
                        const newUserList = listRef.push();
                        newUserList.set(

                        )
                    }
                }
            >
                <input
                    type="search"
                    placeholder="Enter the name of your list.."
                    required
                    value={nameList}
                    onChange={HandleList} />
                <button type="submit">Create List</button>
            </form>
        </>
    )
}

export default RandomAnime
