import '../../App.css';
import VideoSection from '../VideoSection';
import TopAnimeCards from '../TopAnimeCards';
import Navbar from '../Navbar';

function Home(props) {

    const { handleLogout, user } = props;
    return (
        <>

            <Navbar
                user={user}
                handleLogout={handleLogout} />
            <VideoSection />
            <TopAnimeCards
                user={user}

            />


        </>
    )
}

export default Home;