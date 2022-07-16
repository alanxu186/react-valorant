import Carousel from 'react-bootstrap/Carousel';

function CharacterDisplay() {
    return (
        <Carousel variant='light'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.realsport101.com/images/ncavvykf/gfinityesports/e2c3b7f5643ad22f165936fa9f54e01e8e8d6740-3840x2160.png?auto=format"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Chamber</h3>
                    <p>Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://d1lss44hh2trtw.cloudfront.net/assets/editorial/2022/07/phoenix-valorant.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Phoenix</h3>
                    <p>Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdna.artstation.com/p/assets/images/images/048/742/788/large/suke-embed-fade-key-art.jpg?1650829213"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Fade</h3>
                    <p>
                        Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdna.artstation.com/p/assets/images/images/038/999/290/large/suke-astra-wallpapers-purple.jpg?1624648567"
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3>Astra</h3>
                    <p>Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she’s always eons ahead of her enemy’s next move.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CharacterDisplay