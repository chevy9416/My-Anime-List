import Navbar from '../Navbar';
import SearchAnimeCards from '../SearchAnimeCards';



function SearchAnime(props) {

    const { user, handleLogout } = props;


    return (
        <>
            <Navbar
                user={user}
                handleLogout={handleLogout} />
            <SearchAnimeCards
                user={user}
            />

        </>
    )
}

export default SearchAnime;
