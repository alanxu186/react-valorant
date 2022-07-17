import ValNavBar from "./ValNavBar";
import CharacterDisplay from "./CharacterDisplay";
import FeaturedNews from "./FeaturedNews";
import FooterInfo from "./Footer";

function Homepage() {
    return (
        <div>
            <ValNavBar />
            <CharacterDisplay />
            <FeaturedNews />
            <FooterInfo />
        </div>
    )
}

export default Homepage