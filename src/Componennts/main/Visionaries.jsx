import { useContext } from "react";
import { Cont } from "../../App";
import './visionarie.scss';
 
 export default function Visionaries(){
    const visscont = useContext(Cont);
    if(visscont.help == "visionaries"){
        return <div className="viss">
         <div className="vis">
            V I S I O N A R I E S
            </div>
            <div className="visdiv2">
         A celebration of those Inspiring Greatness.
            </div>
            <div className="visdiv2">
     Visionaries whom embody and demonstrate parallels with our values,
      challenging impossible to reshape the world.
 
            </div>

        <div className="rol">
        <div className="col4">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/the-making-of-cb02/page-properties/rolls-royce-coachbuild-boattail-hero-d%20copy.jpg/jcr:content/renditions/original" alt="" />
              </div>
                  <h4>THE MAKING OF BOAT TAIL</h4>
                  <p>
            Hand-built to perfection. Coachbuild by Rolls-Royce.
                  </p>
                </div>
                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-5-5-forge-yellow/page-properties/forgw-yellow-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>FORGE YELLOW</h4>
                  <p>
            Black Badge Cullinan's signature colour, explained.
                  </p>
                </div>
        </div>
         
         <div className="rol">
             
         <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-5-1-serenity-s-textile-maven/page-properties/rolls-royce-serenity-textiles-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>CREATING PHANTOM SERENITY'S TEXTILE REALM</h4>
                  <p>
                Discover the artistry of an icon enveloped in fine Chinese silk and embroidered with a hand-painted blossom motif.
                  </p>
                </div>

                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-2-6-inspiring-greatness-series/components/year-of-the-dragon-fascia/properties/Dragon-Single-Card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>INSPIRING GREATNESS SERIESL</h4>
                  <p>
             In this exploratory series from Rolls-Royce lies a collection of aspirational stories from those who rewrite the boundaries of greatness.
                  </p>
                </div>

                <div className="col1">
              <div className="img">
              <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-3-2-dan-holdsworth/page-properties/rolls-royce-muse-dan-holdsworth-single-card.jpg/jcr:content/renditions/cq5dam.web.1920.webp" alt="" />
              </div>
                  <h4>
                A TOPOGRAPHIC TALE OF BEAUTY
                  </h4>
                  <p>
             Dan Holdsworth’s ‘Acceleration Structures’ explores and examines the topography of three great Alpine glaciers using geomapping technology, like no artist has done before.
                  </p>
                </div>
         </div>

        </div>
    }
 }