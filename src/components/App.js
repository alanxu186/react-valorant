import Navbar from './Navbar';
import FeaturedAgent from './FeaturedAgent';
import CharacterDisplay from './CharacterDisplay';
import FooterInfo from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/App.css"


function App() {
  return (
    <div className="App">
      <Navbar />
      <CharacterDisplay />
      <FeaturedAgent />
      <FooterInfo />
    </div>
  );
}

export default App;
