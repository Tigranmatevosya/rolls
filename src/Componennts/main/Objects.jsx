import { useContext } from "react";
import { Cont } from "../../App";
import './Objects.scss';
 
 export default function Objects(){
    const objcont = useContext(Cont);
    if(objcont.help == "objects"){
        return <div className="obj">
            <div className="vis">
            O B J E C T S
            </div>
            <div className="visdiv2">
            Design and craftsmanship beyond the pinnacle of motoring.
            </div>
            <div className="visdiv2">  
     Cutting edge craftsmanship, respect for materials and traditional <br />
     techniques combine to create coveted luxury objects.
            </div>
            <div className="rol">
            <div className="col4">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/cellarette/page-components/01_hero/01_HERO_CELLARETTE_D.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>CELLARETTE</h4>
                  <p>
       Combining Rolls-Royce’s engineering pedigree and long-standing dedication to creating the ultimate entertaining experiences.
                  </p>
                </div>
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/bespoke-craft-starlight-headliner/page-properties/rrmc-bespoke-starlight-headliner-Single_Tile.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  BESPOKE CRAFT: STARLIGHT HEADLINER
                  </h4>
                  <p>
               A celestial feature exclusive to Rolls-Royce.</p>
                </div>
            </div>
            <div className="rol">
            <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/coachbuild--boat-tail/page-properties/OJ_BoatTail_03.png/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  DISCOVER BOAT TAIL
                  </h4>
                  <p>
A Coachbuild by Rolls-Royce creation honouring its owners’ lifelong reverence for life at sea.
              </p>
                </div>
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/phantom-tempus-champagne-chest/page-properties/rolls-royce-phantom-tempus-champagne-chest-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  PHANTOM TEMPUS CHAMPAGNE CHEST
                  </h4>
                  <p>
In honour of Phantom Tempus — a collection car inspired by the spacetime continuum — our iconic Champagne Chest receives a cosmic reimagining.
              </p>
                </div>
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-13-leather/page-properties/rrmc-bespoke-leather-Single_Tile.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  BESPOKE CRAFT: LEATHER
                  </h4>
                  <p>
Rolls-Royce leather is a work of exquisite artistry.
              </p>
                </div>
                
            </div>

            <div className="rol">
            <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-12-carbon-weave/page-properties/RR_BespokeCarbon_Weave_Single_Tile.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  BESPOKE CRAFT: TECHNICAL WEAVE
                  </h4>
                  <p>
                  Rolls-Royce reimagines carbon fibre with a colourful twist.
              </p>
                </div>
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-9-champagne-cabinet/page-properties/rolls-royce-champagne-cabinet-privilege-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  CHAMPAGNE CHEST
                  </h4>
                  <p>
                  Create an elegant sense of occasion with the Champagne Chest, which marries exquisite design with signature Rolls‑Royce craftsmanship.
                  </p>
                </div>
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-10-coachbuild--sweptail/page-properties/rolls-royce-sweptail-coachbuild-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  COACHBUILD: SWEPTAIL
                  </h4>
                  <p>
                  The only one of its kind. A singular masterpiece. This is Sweptail.
                  </p>
                </div>
            </div>
            <div className="rol">
            <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-8-phantom-gallery/page-properties/Phantom_Gallery_HP_Pulse-Single-Card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  PHANTOM GALLERY
                  </h4>
                  <p>
                  Running the entire length of fascia in the Phantom is a feature that is truly unique. It’s called The Gallery – conceived to house bespoke artistic creations.
                  </p>
                </div>
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-12-dawn-aero-cowling/page-properties/rolls-royce-aero-cowling-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  DAWN AERO COWLING
                  </h4>
                  <p>
                  Indulge the senses with Dawn Aero Cowling, the tonneau cover – the ultimate two-seater, open-top driving experience by Rolls-Royce Motor Cars.
                  </p>
                </div>
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-5-phantom-suite/page-properties/rolls-royce-phantom-suite-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  PHANTOM SUITE
                  </h4>
                  <p>
                  Experience the luxury of absolute privacy. The Privacy Suite for Phantom Extended transforms the rear cabin into a secluded sanctuary for undisturbed enjoyment.
                  </p>
                </div>
            </div>
            <div className="rol">
            <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-2-picnic-hamper/page-properties/rolls-royce-fine-dining-picnic-hamper-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  PICNIC HAMPER
                  </h4>
                  <p>
                  Recreate the golden age of picnicking with the Rolls-Royce Picnic Hamper – beautifully handcrafted using time-honoured techniques.
                  </p>
                </div>
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-3-the-art-of-packing--wraith-luggage/page-properties/rolls-royce-wraith-luggage-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  THE ART OF PACKING: KINETIC LUGGAGE COLLECTION
                  </h4>
                  <p>
                  Exquisite craftsmanship and elegance collide in our exclusive six-piece collection.
                  </p>
                </div>
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-1-arrive-in-style--phantom-luggage/page-properties/rolls-royce-arrive-in-style-phantom-luggage-buckle-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  ARRIVE IN STYLE: ICON LUGGAGE COLLECTION
                  </h4>
                  <p>
                  Make an entrance with the beautifully handcrafted Icon Luggage Collection, a masterpiece of practicality and elegance.
                  </p>
                </div>
            </div>
            <div className="rol">
            <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-11-cocktail-hamper/page-properties/rolls-royce-cocktail-hamper-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  COCKTAIL HAMPER
                  </h4>
                  <p>
                  Inspired by the launch of Dawn, the Rolls-Royce Cocktail Hamper is our most sociable accessory to date.
                  </p>
                </div>
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-6-celestial-craftsmanship/page-properties/rolls-royce-celestial-craftsmanship-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  CELESTIAL CRAFTSMANSHIP
                  </h4>
                  <p>
                  The only motor car of its kind, this is a tale of romantic commemoration.
                  </p>
                </div>
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-7-the-ultimate-accessory/page-properties/rolls-royce-the-ultimate-accessory-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                  THE ULTIMATE ACCESSORY
                  </h4>
                  <p>
                  The Rolls-Royce Pinstripe Tyre provides Phantom owners with a luxurious accessory that cuts a contemporary, sartorial dash.
                  </p>
                </div>
            </div>
        </div>
    }
 }