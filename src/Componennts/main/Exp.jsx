import { useContext } from "react";
import { Cont } from "../../App";
import './Exp.scss';
 
 export default function Exp(){
    const expcont = useContext(Cont);
    if(expcont.help == "experience"){
        return <div className="exp">
            <div className="expdiv">
            <div className="vis">
             E X P E R I E N C E
            </div>
            <div className="visdiv2">
             Immerse yourself in the world of Rolls-Royce.
            </div>
            <div className="visdiv2">
           Savour the experience of commissioning your motor car in sublime
            surroundings, enjoy the epitome of luxury escapism with exclusive eve
            nts, and travel with us on journeys around the globe steeped in cultural
             opulence. 
            </div>
            </div>
            <div className="rol">
            <div className="col4">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-4-7-festival-of-speed/page-properties/rolls-royce-festival-of-speed-twin.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>GOODWOOD FESTIVAL OF SPEED</h4>
                  <p>
               Experience the world’s finest curation of cars, stars, and motor spor
               t royalty over four splendid days.
                  </p>
                </div>
                <div className="col2">
                <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-4-2-a-private-privilege/page-properties/rolls-royce-private-privilege-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>ENJOY A PRIVATE PRIVILEGE</h4>
                  <p>
               Go behind the scenes at the Home of Rolls‑Royce in <br />  Goodwood, and disco
               ver the striking rooms that inspire the creation of truly individual m
               otor cars.
                  </p>
                </div>
            </div>
            <div className="rol">
            <div className="col2">
                <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-4-1-goodwood-revival/page-properties/rolls-royce-goodwood-revival-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>GOODWOOD REVIVAL</h4>
                  <p>
                  A golden era of motoring.
                  </p>
                </div>
                <div className="col2">
                <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-4-4-dine-on-the-line/page-properties/rolls-royce-dine-on-the-line-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>ART MEETS PHILANTHROPY: DINE ON THE LINE</h4>
                  <p>
                  Rolls‑Royce Motor Cars presents Evelina Art for Allergy X Dine on the Line 
                  for an exclusive evening of art, philanthropy and culinary experiences at the Home of
                  Rolls‑Royce in Goodwood.
                  </p>
                </div>
                <div className="col2">
                <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-4-3-in-the-artists-studio/page-properties/rolls-royce-in-the-artists-studio-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>IN THE ARTIST'S STUDIO</h4>
                  <p>
                     World-renowned artists reveal their creative spaces to an elite selection o
                     f guests at the Rolls-Royce Motor Cars European Art Drive.
                  </p>
                </div>
            </div>
            <div className="button">
<a href="https://www.rolls-roycemotorcars.com/en_GB/inspiring-greatness/experience.html">
<button class="button-17" role="button">KEEP ME INFORMED</button>
</a>
            </div>
        </div>

    }
 }